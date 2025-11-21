"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import data from "@/data/achievementsData.json"

const achievementsData = data.achievements
const placementData = data.placements
const hackathonsData = data.hackathons

const AchievementCard = ({ imageUrl, gridClass }) => {
  return(
    <div className={`${gridClass} relative w-full h-full`}>
      <div className="absolute top-[0px] left-[0px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] overflow-hidden z-[5]">
        <Image src={imageUrl} alt="Achievement" fill className="object-cover block" />
      </div>
    </div>
  )
}

const PlacementCard = ({ data }) => {
  return(
    <div className="m-auto flex gap-1 justify-center items-center relative p  -1 rounded-[2.5rem] w-fit font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[2.5rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[2.5rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[2.5rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
          <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
          <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
      </div>
      <div className="rounded-[2.5rem] overflow-hidden relative p-2 z-4 w-full h-full flex flex-col">
          <div className="backdrop-blur-[7.5px] backdrop-filter overflow-hidden rounded-[2.5rem] w-[100%] aspect-square relative mb-4">
            <Image src={data.imageUrl} alt={data.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-2">
              <h3 className={` text-white text-[24px] font-medium m-0 leading-normal`}>{data.name}</h3>
              <p className={`text-[#ebebeb] text-[14px] font-normal m-0 leading-[1.4]`}>{data.role}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Image src="/github.svg" alt="GitHub" width={21} height={21} className="w-[21px] h-[21px] cursor-pointer" />
                </Link>
                <Link href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={21} height={21} className="w-[21px] h-[21px] cursor-pointer" />
                </Link>
              </div>
              <div className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 rounded-3xl w-fit">
                <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
                <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
                <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                <p className="font-['Montserrat'] text-sm font-semibold text-white z-4">Accenture - 12 LPA</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

const HackathonCard = ({ data, onViewMore }) => {
  return(
     <div className="m-auto flex gap-1 justify-center items-center relative p  -1 rounded-[2.5rem] w-fit font-['Montserrat']">
      <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[2.5rem] cardBorder"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[2.5rem] m-[1.2px] bg-black"></div>
      <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[2.5rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
          <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
          <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
      </div>
      <div className="rounded-[2.5rem] overflow-hidden relative p-2 z-4 w-full h-full flex flex-col">
          <div className="backdrop-blur-[7.5px] backdrop-filter overflow-hidden rounded-[2.5rem] w-[100%] aspect-square relative mb-4">
            <Image src={data.imageUrl} alt={data.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-2">
              <h3 className={` text-white text-[24px] font-medium m-0 leading-normal`}>{data.name}</h3>
              <p className={`text-[#ebebeb] text-[14px] font-normal m-0 leading-[1.4]`}>{data.role}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Image src="/github.svg" alt="GitHub" width={21} height={21} className="w-[21px] h-[21px] cursor-pointer" />
                </Link>
                <Link href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={21} height={21} className="w-[21px] h-[21px] cursor-pointer" />
                </Link>
              </div>
              <button onClick={() => onViewMore(data)} className="flex gap-1 justify-center items-center relative py-2.5 px-4.5 rounded-3xl w-fit hover:scale-102 transition-transform duration-200 cursor-pointer">
                <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
                <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
                <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                <p className="font-['Montserrat'] text-sm font-semibold text-white z-4">View More +</p>
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

const AchievementsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleViewMore = (data) => {
    setSelectedCard(data)
  }

  const handleClose = () => {
    setSelectedCard(null)
  }

  return(
    <div className={`font-['montserrat'] flex flex-col w-full bg-[#030505] antialiased`}>
      <section className="w-full hidden lg:block">
        <div className="w-full py-[40px] px-[20px] flex justify-center">
          <div className="grid grid-flow-col grid-cols-9 auto-rows-[60.188px] auto-cols-[120.102px] gap-[20px] mx-auto max-w-[1560px] w-full relative">
            <div className="col-start-1 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-3 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-4 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-5 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-7 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-8 col-span-1 row-start-1 row-span-1 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>
            <div className="col-start-9 col-span-1 row-start-1 row-span-2 bg-[#0C0C0C] rounded-[20px] w-full h-full"></div>

            <AchievementCard imageUrl={achievementsData[0].imageUrl} gridClass="col-start-1 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[1].imageUrl} gridClass="col-start-2 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[2].imageUrl} gridClass="col-start-3 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[3].imageUrl} gridClass="col-start-4 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[4].imageUrl} gridClass="col-start-5 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[5].imageUrl} gridClass="col-start-6 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[6].imageUrl} gridClass="col-start-7 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[7].imageUrl} gridClass="col-start-8 col-span-1 row-start-2 row-span-3" />
            <AchievementCard imageUrl={achievementsData[8].imageUrl} gridClass="col-start-9 col-span-1 row-start-3 row-span-3" />
            <AchievementCard imageUrl={achievementsData[9].imageUrl} gridClass="col-start-1 col-span-1 row-start-6 row-span-3" />
            <AchievementCard imageUrl={achievementsData[10].imageUrl} gridClass="col-start-2 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[11].imageUrl} gridClass="col-start-8 col-span-1 row-start-5 row-span-3" />
            <AchievementCard imageUrl={achievementsData[12].imageUrl} gridClass="col-start-9 col-span-1 row-start-6 row-span-3" />

            <div className="col-start-4 col-span-3 row-start-6 row-span-2 text-white text-center flex flex-col justify-center items-center z-[10] pointer-events-none">
              <h1 className={`font-['oxanium'] m-0 leading-[1.2] text-[3.2rem] font-bold whitespace-nowrap bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)]`}>Achievements & Success Stories</h1>
              <p className={`font-['montserrat'] text-[1.2rem] opacity-80 text-center justify-center items-center whitespace-nowrap font-extrabold bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#999_100%)]`}>
                Celebrating the wins of TheCodeBreakers community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:hidden py-[30px] sm:py-[40px] px-[15px] sm:px-[20px]">
        <div className="text-center mb-[30px] sm:mb-[40px]">
          <h1 className={`font-['oxanium'] text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2`}>Achievements & Success Stories</h1>
          <p className={`font-['montserrat'] text-sm xs:text-base sm:text-lg text-white/80 font-semibold px-4 sm:px-6`}>
            Celebrating the wins of TheCodeBreakers community.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 max-w-[1200px] mx-auto">
          {achievementsData.slice(0, 12).map((achievement) => (
            <div key={achievement.id} className="relative w-full aspect-square rounded-[12px] sm:rounded-[15px] overflow-hidden shadow-lg">
              <Image src={achievement.imageUrl} alt="Achievement" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full pt-[25px] xs:pt-[30px] sm:pt-[40px] lg:pt-[50px] pb-[40px] xs:pb-[50px] sm:pb-[70px] lg:pb-[100px]">
        <div className="max-w-[1400px] mx-auto px-[15px] xs:px-[20px] sm:px-[25px]">
          <h1 className={`font-['oxanium'] text-white text-xl xs:text-2xl sm:text-3xl lg:text-[3rem] mb-[20px] xs:mb-[30px] sm:mb-[40px] lg:mb-[50px] text-center sm:text-left font-bold px-2 sm:px-0`}>Placements & Offers</h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
            {placementData.map((data) => (
              <div key={data.id} className="w-full max-w-[350px] xs:max-w-none">
                <PlacementCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pt-[25px] xs:pt-[30px] sm:pt-[40px] lg:pt-[50px] pb-[40px] xs:pb-[50px] sm:pb-[70px] lg:pb-[100px]">
        <div className="max-w-[1400px] mx-auto px-[15px] xs:px-[20px] sm:px-[25px]">
          <h1 className={`font-['oxanium'] text-white text-xl xs:text-2xl sm:text-3xl lg:text-[3rem] mb-[20px] xs:mb-[30px] sm:mb-[40px] lg:mb-[50px] text-center sm:text-left font-bold px-2 sm:px-0`}>Hackathons & Internships</h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px] xs:gap-[24px] sm:gap-[32px] lg:gap-[40px] xl:gap-[48px] justify-items-center">
            {hackathonsData.map((data) => (
              <div key={data.id} className="w-full max-w-[350px] xs:max-w-none">
                <HackathonCard data={data} onViewMore={handleViewMore} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCard && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/80 p-3 xs:p-4">
          <div className="relative w-full max-w-[95vw] xs:max-w-[90vw] sm:max-w-[780px]">
            <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-[2.5rem] placementCardBorder"></div>
            <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-[2.5rem] m-[1.2px] bg-black"></div>
            <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-[2.5rem] m-[1.2px] overflow-hidden bg-[rgba(0,0,0,0.06)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25),_61px_121px_38px_0_rgba(0,0,0,0.04),_22px_43px_29px_0_rgba(0,0,0,0.10)]">
              <div className="absolute -translate-x-[40%] -bottom-10 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
              <div className="absolute translate-x-[30%] -top-10 right-0 w-60 h-25 bg-[rgba(52,148,145,0.70)] blur-[100px] z-3" />
            </div>
            <div className="relative z-4 rounded-[2.5rem] p-4 xs:p-5 sm:p-6 flex flex-col sm:flex-row gap-4 xs:gap-5 sm:gap-6">
              <div className="w-full sm:w-56 md:w-64 aspect-square rounded-[2rem] overflow-hidden flex-shrink-0 mx-auto sm:mx-0 relative backdrop-blur-[7.5px]">
                <Image src={selectedCard.imageUrl} alt={selectedCard.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-1 min-h-0 text-white">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 line-clamp-1">{selectedCard.name}</h3>
                <ul className="list-disc pl-5 mb-4 xs:mb-5 space-y-1 xs:space-y-2 text-sm xs:text-base sm:text-lg text-[#ebebeb] flex-1 overflow-y-auto">
                  {selectedCard.achievements?.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-col xs:flex-row sm:flex-row justify-between items-start xs:items-center sm:items-center mt-auto border-t border-white/10 pt-3 xs:pt-4 gap-3 xs:gap-4 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <Link href={selectedCard.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Image src="/github.svg" alt="GitHub" width={24} height={24} className="w-6 h-6 cursor-pointer" />
                    </Link>
                    <Link href={selectedCard.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 cursor-pointer" />
                    </Link>
                  </div>
                  <div className="flex gap-1 justify-center items-center relative py-2 px-4 rounded-3xl w-fit">
                    <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-3xl buttonBorder"></div>
                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-3xl m-[1.2px] bg-black"></div>
                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                    <p className="font-['Montserrat'] text-xs xs:text-sm font-semibold text-white z-4 whitespace-nowrap">{selectedCard.company}</p>
                  </div>
                </div>
              </div>
              <button onClick={handleClose} className="absolute top-3 right-3 xs:top-4 xs:right-4 sm:top-5 sm:right-5 text-white text-xl xs:text-2xl hover:opacity-70 transition-opacity duration-200 bg-black/50 rounded-full w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center z-[100] backdrop-blur-sm border border-white/20">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AchievementsPage