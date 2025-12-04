import React, { memo } from 'react'
import Image from 'next/image'

const EventsDiv = memo(({ 
  eventName, 
  eventDate, 
  imageUrl, 
  description, 
  isLast = false, 
  isActive = true,
  titleRef = null
}) => {
  return (
    <div 
      className='min-w-full flex flex-row md:flex-col justify-start items-flex-start'
      role="article"
      aria-label={`${eventName} event`}
    >
      {/* Event Content - includes timeline margin */}
      <div className="flex-1 flex flex-col md:ml-0 ml-6">
        {/* Event Name */}
        <h3 
          ref={titleRef}
          className={`
            text-2xl sm:text-3xl lg:text-4xl 
            font-semibold font-['Montserrat'] 
            transition-all duration-700 ease-out
            ${isActive ? 'opacity-100' : 'opacity-30'}
          `}
        >
          {eventName}
        </h3>
      
      {/* Event Date with decorative line */}
      <div className="relative mt-4 sm:mt-6 lg:mt-8 w-full">
        {/* Horizontal line for desktop */}
        <div
          className={`
            hidden md:block
            absolute top-0 left-0 h-[0.5px] bg-[#6b6b6b]
            ${isLast ? 'w-auto' : 'w-full'}
          `}
          aria-hidden="true"
        >
          {isLast && (
            <span className="text-3xl sm:text-4xl lg:text-6xl font-semibold font-['Montserrat'] invisible">
              {eventDate.slice(0, Math.ceil(eventDate.length / 2))}
            </span>
          )}
        </div>
        <time 
          className={`
            block pt-2 
            text-3xl sm:text-4xl lg:text-6xl 
            font-semibold font-['Montserrat'] 
            transition-all duration-700 ease-out
            ${isActive ? 'opacity-100' : 'opacity-30'}
          `}
          dateTime={eventDate}
        >
          {eventDate}
        </time>
      </div>
      
      {/* Event Details */}
      <div 
        className={`
          flex flex-col md:flex-row 
          gap-4 sm:gap-5 lg:gap-6 
          mt-4 sm:mt-5 lg:mt-6 
          pr-0 md:pr-12 lg:pr-[200px]
          transition-all duration-700 ease-out
          ${isActive ? 'opacity-100' : 'opacity-30'}
        `}
      >
        <div className="w-full md:w-auto md:flex-shrink-0">
          <Image
            className="w-full md:w-[280px] lg:w-[20vw] h-auto aspect-square object-cover rounded-xl"
            src={imageUrl}
            alt={`${eventName} event photo`}
            width={400}
            height={400}
            loading="lazy"
            quality={85}
          />
        </div>
        <div 
          className="
            flex flex-col justify-end 
            text-base sm:text-lg lg:text-2xl 
            font-normal font-['Montserrat'] 
            leading-relaxed
            w-full md:flex-1
          "
        >
          {description}
        </div>
      </div>
      </div>
    </div>
  )
})

EventsDiv.displayName = 'EventsDiv'

export default EventsDiv;
