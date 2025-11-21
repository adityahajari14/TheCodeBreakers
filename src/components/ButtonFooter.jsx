import React from 'react'

const ButtonFooter = (props) => {
return (
    <div className="flex flex-row gap-1 sm:gap-1.5 justify-center items-center relative py-2 sm:py-2.5 px-3 sm:px-4 rounded-3xl hover:scale-105 active:scale-95 transition-transform duration-200 touch-manipulation min-h-[40px]">
        <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonFooter"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 z-2 rounded-3xl m-[1.2px] bg-black"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
        <img src={props.image} alt="" className="w-3 h-3 sm:w-4 sm:h-4 z-4"/>
        <p className="font-['Montserrat'] text-xs sm:text-sm font-semibold text-white z-4">{props.text}</p>
    </div>
)
}   

export default ButtonFooter
