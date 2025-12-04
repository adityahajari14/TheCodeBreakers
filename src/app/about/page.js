"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/teamData.json";
import LiquidEther from "@/components/home/LiquidEther";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const icons = [
    { src: "/icons/react.svg", x: -450, y: 50, mobileX: -130, mobileY: -140, showOnMobile: true },
    { src: "/icons/java.svg", x: 550, y: -120, mobileX: 130, mobileY: -140, showOnMobile: true },
    { src: "/icons/nodejs.svg", x: -300, y: 250, mobileX: -130, mobileY: 180, showOnMobile: true },
    { src: "/icons/figma.svg", x: 650, y: 250, mobileX: 130, mobileY: 180, showOnMobile: true },
    { src: "/icons/rust.svg", x: -100, y: -100, mobileX: 0, mobileY: 0, showOnMobile: false },
    { src: "/icons/python.svg", x: 350, y: 250, mobileX: 0, mobileY: 0, showOnMobile: false },
];

function TeamMemberCard({ member }) {
  return (
    <div className="m-auto flex gap-1 justify-center items-center relative p-1 rounded-[1.25rem] lg:w-[262px] lg:h-[390px] max-lg:w-[220px] max-lg:h-[340px] flex-shrink-0 font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[1.25rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[1.25rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[1.25rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
        <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
      </div>
      <div className="rounded-[1.25rem] overflow-hidden relative lg:p-6 max-lg:p-4 z-4 w-full h-full flex flex-col items-center justify-center">
        {/* Profile Image */}
        <div className="backdrop-blur-[7.5px] backdrop-filter overflow-hidden rounded-full lg:w-[141px] lg:h-[141px] max-lg:w-[110px] max-lg:h-[110px] relative lg:mb-6 max-lg:mb-4">
          <Image 
            src={member.imageUrl} 
            alt={member.name} 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Name and Role */}
        <div className="flex flex-col lg:gap-2 max-lg:gap-1.5 text-center lg:mb-6 max-lg:mb-4">
          <h3 className="text-white lg:text-[24px] max-lg:text-[20px] font-medium m-0 leading-normal">
            {member.name}
          </h3>
          <p className="text-[#cfcfcf] lg:text-[13px] max-lg:text-[11px] font-normal m-0 leading-[1.4]">
            {member.role}
          </p>
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center lg:gap-5 max-lg:gap-3">
          <Link href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
            <Image src="/github.svg" alt="GitHub" width={20} height={20} className="lg:w-5 lg:h-5 max-lg:w-4 max-lg:h-4" />
          </Link>
          <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="lg:w-5 lg:h-5 max-lg:w-4 max-lg:h-4" />
          </Link>
          <Link href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
            <Image src="/instagram.svg" alt="Instagram" width={20} height={20} className="lg:w-5 lg:h-5 max-lg:w-4 max-lg:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function TeamCategoryCard({ title }) {
  return (
    <div className="m-auto flex gap-1 justify-center items-center relative p-1 rounded-[1.25rem] lg:w-[262px] lg:h-[390px] max-lg:w-[220px] max-lg:h-[340px] flex-shrink-0 font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[1.25rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[1.25rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[1.25rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
        <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
      </div>
      <div className="rounded-[1.25rem] overflow-hidden relative lg:p-6 max-lg:p-4 z-4 w-full h-full flex items-center justify-center">
        <p className="font-['Oxanium'] font-bold lg:text-3xl max-lg:text-2xl text-center leading-normal px-4 text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)] bg-clip-text">
          {title}
        </p>
      </div>
    </div>
  );
}


export default function AboutPage() {
  const iconRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    iconRefs.current.forEach((el, i) => {
      if (!el) return;

      // Skip animation for mobile-hidden icons
      if (isMobile && !icons[i].showOnMobile) {
        gsap.set(el, { opacity: 0, scale: 0 });
        return;
      }

      const targetX = isMobile ? icons[i].mobileX : icons[i].x;
      const targetY = isMobile ? icons[i].mobileY : icons[i].y;

      // Snap quickly from center to final position
      gsap.set(el, { x: 0, y: 0, opacity: 0, scale: 0 });
      gsap.to(el, {
        x: targetX,
        y: targetY,
        opacity: 1,
        scale: 1,
        delay: i * 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Subtle random floating around final position
      const float = () => {
        gsap.to(el, {
          x: targetX + gsap.utils.random(-15, 15),
          y: targetY + gsap.utils.random(-15, 15),
          rotation: gsap.utils.random(-8, 8),
          duration: 1 + Math.random() * 0.5,
          ease: "sine.inOut",
          onComplete: float, // keep looping
        });
      };
      float();

      // Hover effects (desktop only)
      if (!isMobile) {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen h-screen bg-black overflow-hidden text-white bg-cover">
        {/* Floating Tech Icons */}
        <div className="absolute w-full h-full flex items-center justify-center z-9">
          {icons.map((icon, i) => (
            <div
              key={i}
              ref={(el) => (iconRefs.current[i] = el)}
              className="absolute cursor-pointer hidden md:block"
            >
              <Image
                src={icon.src}
                alt="icon"
                width={300}
                height={300}
                className="drop-shadow-lg select-none w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-[300px] xl:h-[300px] opacity-60 sm:opacity-65 md:opacity-70 lg:opacity-80"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* Hero Text */}
        <div className="text-center flex flex-col items-center z-10 px-4 sm:px-8 md:px-6 gap-4 sm:gap-5 md:gap-6 w-full max-w-screen-xl mx-auto">
          <h1 className="font-['Oxanium'] text-[1.75rem] leading-[1.15] xs:text-[2rem] sm:text-[2.5rem] md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-[linear-gradient(60deg,_#02232A,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#02232A)] bg-clip-text text-transparent whitespace-nowrap">
            The Codebreakers Club
          </h1>
          <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_#999_70%)] bg-clip-text px-2 sm:px-0">
            Breaking Codes, Creating Minds
          </p>
          <button 
            onClick={() => {
              document.getElementById('our-team')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 lg:py-2.5 lg:px-4.5 rounded-3xl w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer touch-manipulation min-h-[44px]"
          >
            <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
            <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
            <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
            <p className="font-['Montserrat'] text-sm font-semibold text-white z-4">Explore Now</p>
          </button>
        </div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <LiquidEther
            colors={['#073445', '#41bfb7', '#073445']}
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={3}
            takeoverDuration={1}
            autoResumeDelay={1000}
            autoRampDuration={0.6}
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="bg-black lg:py-20 max-lg:py-12 lg:pl-12 max-lg:pl-4 pr-0">
        <h2 className="font-['Oxanium'] lg:text-5xl max-lg:text-2xl font-bold lg:mb-10 max-lg:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#999] lg:px-8 max-lg:px-0">
          Our Team
        </h2>

        {/* Core Team */}
        <div className="flex lg:gap-4 max-lg:gap-3 lg:mb-[70px] max-lg:mb-12 overflow-x-auto pb-4 no-scrollbar lg:px-8 max-lg:px-0">
          <TeamCategoryCard title="Core Team" />
          {data.coreTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Tech Team */}
        <div className="flex lg:gap-4 max-lg:gap-3 lg:mb-[70px] max-lg:mb-12 overflow-x-auto pb-4 no-scrollbar lg:px-8 max-lg:px-0">
          <TeamCategoryCard title="Tech Team" />
          {data.techTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Socials Team */}
        <div className="flex lg:gap-4 max-lg:gap-3 overflow-x-auto pb-4 no-scrollbar lg:px-8 max-lg:px-0">
          <TeamCategoryCard title="Graphic, Publicity & Social Media Team" />
          {data.socialsTeam.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
