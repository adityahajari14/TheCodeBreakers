"use client";
import EventsDiv from "@/components/EventsDiv";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import data from "@/data/eventsData.json";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function EventsPage() {
  const eventsContainerRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lastEventTitleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState('100%');

  const eventsData = useMemo(() => data.events, []);
  const numberOfEvents = eventsData.length;

  // Memoize snap points calculation
  const snapPoints = useMemo(() => {
    return Array.from({ length: numberOfEvents }, (_, i) => 
      i / Math.max(numberOfEvents - 1, 1)
    );
  }, [numberOfEvents]);

  // Callback for active index update
  const handleProgressUpdate = useCallback((progress) => {
    const currentIndex = Math.round(progress * (numberOfEvents - 1));
    setActiveIndex(prevIndex => prevIndex !== currentIndex ? currentIndex : prevIndex);
  }, [numberOfEvents]);

  // Calculate timeline height based on last event title position
  useEffect(() => {
    if (window.innerWidth < 768 && lastEventTitleRef.current && eventsContainerRef.current) {
      const containerRect = eventsContainerRef.current.getBoundingClientRect();
      const titleRect = lastEventTitleRef.current.getBoundingClientRect();
      
      // Height from container start to end of last event title
      const heightToTitle = titleRect.bottom - containerRect.top + 8; // 8px for padding
      setTimelineHeight(`${heightToTitle}px`);
    }
  }, [numberOfEvents]);

  useGSAP(() => {
    const eventsContainer = eventsContainerRef.current;
    const eventsSection = eventsSectionRef.current;

    if (!eventsContainer || !eventsSection) return;

    // Desktop horizontal scroll animation
    if (window.innerWidth >= 768) {
      const viewportWidth = window.innerWidth;
      const paddingLeft = viewportWidth >= 1024 ? 170 : 100;
      const paddingRight = viewportWidth >= 1024 ? 100 : 60;
      const availableWidth = viewportWidth - paddingLeft - paddingRight;
      const scrollDistance = (numberOfEvents - 1) * availableWidth;

      gsap.to(eventsContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: eventsSection,
          scroller: "body",
          start: "top -5%",
          end: () => `+=${scrollDistance * 1.5}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          snap: {
            snapTo: snapPoints,
            duration: { min: 0.1, max: 0.3 },
            delay: 0,
            ease: "power1.inOut"
          },
          onUpdate: (self) => handleProgressUpdate(self.progress),
          invalidateOnRefresh: true
        }
      });
    } else {
      // Mobile: Simple scroll with fade-in animations
      const eventCards = Array.from(eventsContainer.querySelectorAll('[role="article"]'));
      
      eventCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index)
            }
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [numberOfEvents, snapPoints, handleProgressUpdate]);

  // Handle empty state
  if (!eventsData || eventsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-['Montserrat'] text-gray-400">
          No events available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <section 
        ref={eventsSectionRef} 
        className="
          eventsection 
          w-full 
          overflow-hidden 
          flex flex-col 
          justify-center 
          items-center 
          pt-[15vh] sm:pt-[18vh] lg:pt-[20vh] 
          pb-[12vh] sm:pb-[14vh] lg:pb-[16vh] 
          px-4 sm:px-6 md:px-0
        "
        aria-label="Events section"
      >
        {/* Section Title */}
        <h2 
          className="
            pb-8 sm:pb-10 lg:pb-20 
            text-center 
            text-3xl sm:text-4xl lg:text-5xl 
            font-bold 
            font-['Oxanium'] 
            text-transparent 
            !bg-clip-text 
            [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(180deg,_#fff,_#999)] 
            [-webkit-background-clip:text] 
            [-webkit-text-fill-color:transparent]
          "
        >
          Events at TCB
        </h2>

        {/* Events Container */}
        <div 
          ref={eventsContainerRef} 
          className="
            events 
            w-full 
            flex 
            flex-col md:flex-row 
            justify-flex-start 
            items-stretch md:items-center 
            gap-12 md:gap-0
            pl-4 sm:pl-6 md:pl-[100px] lg:pl-[170px] 
            pr-4 sm:pr-6 md:pr-[60px] lg:pr-[100px]
            relative
          "
          role="list"
        >
          {/* Vertical Timeline for Mobile */}
          <div 
            ref={timelineRef}
            className="
              md:hidden
              absolute 
              left-[0.625rem] 
              top-0
              w-[0.5px] 
              bg-[#6b6b6b]
            "
            style={{
              height: timelineHeight,
            }}
            aria-hidden="true"
          />
          
          {eventsData.map((event, index) => (
            <EventsDiv
              key={`${event.eventName}-${index}`}
              eventName={event.eventName}
              eventDate={event.eventDate}
              imageUrl={event.imageUrl}
              description={event.description}
              isLast={index === eventsData.length - 1}
              isActive={index === activeIndex}
              titleRef={index === eventsData.length - 1 ? lastEventTitleRef : null}
            />
          ))}
        </div>

        {/* Progress Indicator (Desktop) */}
        <div 
          className="
            hidden md:flex 
            fixed 
            bottom-8 
            left-1/2 
            -translate-x-1/2 
            gap-2 
            z-10
          "
          role="navigation"
          aria-label="Event navigation"
        >
          {eventsData.map((_, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 
                rounded-full 
                transition-all 
                duration-300
                ${index === activeIndex 
                  ? 'bg-white w-8' 
                  : 'bg-gray-500 hover:bg-gray-400'
                }
              `}
              aria-label={`Event ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
