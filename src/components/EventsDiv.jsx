import React from 'react'
import Image from 'next/image'

const EventsDiv = ({ eventName, eventDate, imageUrl, description, isLast = false, isActive = true }) => {
  return (
    <div className='min-w-full flex flex-col justify-center items-flex-start'>
      <div className={`lg:text-4xl max-lg:text-2xl font-semibold font-['Montserrat'] transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        {eventName}
      </div>
      <div className="relative lg:mt-8 max-lg:mt-6">
        <div 
          className="absolute top-0 left-0 h-[0.5px] bg-[#6b6b6b]"
          style={{ width: isLast ? 'auto' : '100%', right: isLast ? 'auto' : 0 }}
        >
          {isLast && (
            <div className="inline-block">
              <span className="lg:text-6xl max-lg:text-3xl font-semibold font-['Montserrat'] invisible">
                {eventDate.slice(0, Math.ceil(eventDate.length / 2))}
              </span>
            </div>
          )}
        </div>
        <div className={`pt-2 lg:text-6xl max-lg:text-3xl font-semibold font-['Montserrat'] transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
          {eventDate}
        </div>
      </div>
      <div className={`flex max-md:flex-col md:flex-row lg:gap-6 max-lg:gap-4 lg:mt-6 max-lg:mt-4 lg:pr-[200px] max-lg:pr-0 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        <Image 
          className="lg:w-[20vw] max-lg:w-full h-auto aspect-square object-cover rounded-xl" 
          src={imageUrl} 
          alt={`${eventName} event`}
          width={400}
          height={400}
        />
        <div className="justify-end flex flex-col lg:text-2xl max-lg:text-base font-normal font-['Montserrat'] lg:w-[40%] max-lg:w-full">
          {description}
        </div>
      </div>
    </div>
  )
}

export default EventsDiv;
