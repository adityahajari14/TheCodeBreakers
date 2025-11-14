"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Oxanium, Montserrat } from "next/font/google"

const oxanium = Oxanium({
  subsets: ["latin"],
})
const montserrat = Montserrat({
  subsets: ["latin"],
})

const achievementsData = [
  { id: 1, imageUrl: "https://picsum.photos/seed/person1/300" },
  { id: 2, imageUrl: "https://picsum.photos/seed/person2/300" },
  { id: 3, imageUrl: "https://picsum.photos/seed/person3/300" },
  { id: 4, imageUrl: "https://picsum.photos/seed/person4/300" },
  { id: 5, imageUrl: "https://picsum.photos/seed/person5/300" },
  { id: 6, imageUrl: "https://picsum.photos/seed/person6/300" },
  { id: 7, imageUrl: "https://picsum.photos/seed/person7/300" },
  { id: 8, imageUrl: "https://picsum.photos/seed/person8/300" },
  { id: 9, imageUrl: "https://picsum.photos/seed/person9/300" },
  { id: 10, imageUrl: "https://picsum.photos/seed/person10/300" },
  { id: 11, imageUrl: "https://picsum.photos/seed/person11/300" },
  { id: 12, imageUrl: "https://picsum.photos/seed/person12/300" },
  { id: 13, imageUrl: "https://picsum.photos/seed/person13/300" },
]

const placementData = [
  { id: 1, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Accenture - 12 LPA", imageUrl: "https://picsum.photos/seed/lara1/300" },
  { id: 2, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Accenture - 12 LPA", imageUrl: "https://picsum.photos/seed/lara2/300" },
  { id: 3, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Accenture - 12 LPA", imageUrl: "https://picsum.photos/seed/lara3/300" },
  { id: 4, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Accenture - 12 LPA", imageUrl: "https://picsum.photos/seed/lara4/300" },
  { id: 5, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Accenture - 12 LPA", imageUrl: "https://picsum.photos/seed/lara5/300" },
  { id: 6, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Accenture - 12 LPA", imageUrl: "https://picsum.photos/seed/lara6/300" },
]

const hackathonsData = [
  { id: 1, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara1/300" },
  { id: 2, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara2/300" },
  { id: 3, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara3/300" },
  { id: 4, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara4/300" },
  { id: 5, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara5/300" },
  { id: 6, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara6/300" },
  { id: 7, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara7/300" },
  { id: 8, name: "Lara Jean", role: "Product designer who focuses on simplicity and usability", company: "Intern @Google", imageUrl: "https://picsum.photos/seed/lara8/300" },
]

const AchievementCard = ({ imageUrl, gridClass }) => {
  return(
    <div className={`${gridClass} relative w-full h-full`}>
      <div className="absolute inset-0 bg-[#0C0C0C] rounded-[20px] transition-transform duration-300 ease z-[2]"></div>
      <div className="absolute top-[10px] left-[-10px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[20px] overflow-hidden z-[5]">
        <Image src={imageUrl} alt="Achievement" fill className="object-cover block" />
      </div>
    </div>
  )
}

const LinkedinIcon = () => (
  <svg className="w-5 h-5 block flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)
const InstagramIcon = () => (
  <svg className="w-5 h-5 block flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
)

const PlacementCard = ({ data }) => {
  return(
    <div className="w-full rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] lg:rounded-[40px] overflow-hidden p-[10px] xs:p-[12px] sm:p-[15px] text-white border border-[rgba(255,255,255,0.1)]" style={{ background: "linear-gradient(-135deg, #194242, #05100f, #0e0e0e 85%, #0b2727, #073535)" }}>
      <div className="w-full pt-[100%] relative overflow-hidden rounded-[10px] xs:rounded-[12px] sm:rounded-[15px]">
        <Image src={data.imageUrl} alt={data.name} fill className="object-cover block" />
      </div>
      <div className="pt-[10px] xs:pt-[12px] sm:pt-[15px]">
        <h3 className={`${oxanium.className} text-[1rem] xs:text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] m-0 font-bold line-clamp-1`}>{data.name}</h3>
        <p className={`${montserrat.className} text-[0.75rem] xs:text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] opacity-70 mt-[4px] xs:mt-[5px] mb-[10px] xs:mb-[12px] sm:mb-[15px] line-clamp-2`}>{data.role}</p>
        <div className="flex flex-wrap justify-between items-center border-t border-t-[#333] pt-[6px] xs:pt-[8px] sm:pt-[10px] text-[0.65rem] xs:text-[0.7rem] sm:text-[0.75rem] lg:text-[0.8rem] gap-2">
          <div className="flex items-center gap-[6px] xs:gap-[8px] sm:gap-[10px]">
            <LinkedinIcon />
            <InstagramIcon />
            <Image src="/mdi_github.svg" alt="GitHub" width={30} height={30} className="w-[20px] h-[20px] xs:w-[24px] xs:h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] block flex-shrink-0" />
          </div>
          <span className="bg-[#33334f] px-[5px] py-[2px] xs:px-[6px] xs:py-[3px] sm:px-[8px] sm:py-[4px] rounded-[6px] xs:rounded-[8px] sm:rounded-[10px] font-semibold text-[0.65rem] xs:text-[0.7rem] sm:text-[0.75rem] lg:text-[0.8rem] whitespace-nowrap">{data.company}</span>
        </div>
      </div>
    </div>
  )
}

const HackathonCard = ({ data, onViewMore }) => {
  return(
    <div className="w-full h-[340px] xs:h-[380px] sm:h-[400px] lg:h-[440px] rounded-[15px] xs:rounded-[20px] sm:rounded-[25px] lg:rounded-[40px] overflow-hidden p-[10px] xs:p-[12px] sm:p-[15px] text-white border border-[rgba(255,255,255,0.1)]" style={{ background: "linear-gradient(-135deg, #194242, #05100f, #0e0e0e 85%, #0b2727, #073535)" }}>
      <div className="w-full pt-[100%] relative overflow-hidden rounded-[10px] xs:rounded-[12px] sm:rounded-[15px]">
        <Image src={data.imageUrl} alt={data.name} fill className="object-cover block" />
      </div>
      <div className="pt-[10px] xs:pt-[12px] sm:pt-[15px]">
        <h3 className={`${oxanium.className} text-[1rem] xs:text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] m-0 font-bold line-clamp-1`}>{data.name}</h3>
        <div className="flex flex-wrap justify-between items-center border-t border-t-[#333] pt-[6px] xs:pt-[8px] sm:pt-[10px] text-[0.65rem] xs:text-[0.7rem] sm:text-[0.75rem] lg:text-[0.8rem] mt-[10px] xs:mt-[12px] sm:mt-[15px] gap-2">
          <div className="flex items-center gap-[6px] xs:gap-[8px] sm:gap-[10px]">
            <LinkedinIcon />
            <InstagramIcon />
            <Image src="/mdi_github.svg" alt="GitHub" width={30} height={30} className="w-[20px] h-[20px] xs:w-[24px] xs:h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] block flex-shrink-0" />
          </div>
          <button onClick={() => onViewMore(data)} className="bg-[#33334f] px-[5px] py-[2px] xs:px-[6px] xs:py-[3px] sm:px-[8px] sm:py-[4px] rounded-[6px] xs:rounded-[8px] sm:rounded-[10px] font-semibold text-[0.65rem] xs:text-[0.7rem] sm:text-[0.75rem] lg:text-[0.8rem] whitespace-nowrap border-2 border-[rgba(255,255,255,0.01)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-200">
            View More +
          </button>
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
    <div className={`${montserrat.className} flex flex-col w-full bg-[#030505] antialiased`}>
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
              <h1 className={`${oxanium.className} m-0 leading-[1.2] text-[3.2rem] font-bold whitespace-nowrap`}>Achievements & Success Stories</h1>
              <p className={`${montserrat.className} text-[1.2rem] opacity-80 max-w-[300px] mt-[15px] mr-[242px] whitespace-nowrap font-extrabold text-white`}>
                Celebrating the wins of TheCodeBreakers community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:hidden py-[30px] sm:py-[40px] px-[15px] sm:px-[20px]">
        <div className="text-center mb-[30px] sm:mb-[40px]">
          <h1 className={`${oxanium.className} text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2`}>Achievements & Success Stories</h1>
          <p className={`${montserrat.className} text-sm xs:text-base sm:text-lg text-white/80 font-semibold px-4 sm:px-6`}>
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
          <h1 className={`${oxanium.className} text-white text-xl xs:text-2xl sm:text-3xl lg:text-[3rem] mb-[20px] xs:mb-[30px] sm:mb-[40px] lg:mb-[50px] text-center sm:text-left font-bold px-2 sm:px-0`}>Placements & Offers</h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px] xs:gap-[24px] sm:gap-[32px] lg:gap-[40px] xl:gap-[48px] justify-items-center">
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
          <h1 className={`${oxanium.className} text-white text-xl xs:text-2xl sm:text-3xl lg:text-[3rem] mb-[20px] xs:mb-[30px] sm:mb-[40px] lg:mb-[50px] text-center sm:text-left font-bold px-2 sm:px-0`}>Hackathons & Internships</h1>
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
          <div className="relative w-full max-w-[95vw] xs:max-w-[90vw] sm:max-w-[620px] h-auto sm:h-auto rounded-2xl xs:rounded-3xl sm:rounded-4xl overflow-hidden p-3 xs:p-4 sm:p-5 flex flex-col sm:flex-row gap-3 xs:gap-4 text-white border border-white/22 bg-gradient-to-br from-white/10 to-white/10 backdrop-blur-md shadow-xl bg-[linear-gradient(18deg,rgba(14,14,14,0.6),rgba(5,16,15,0.6),rgba(25,66,66,0.6))]">
            <div className="w-full sm:w-48 md:w-56 h-48 xs:h-56 sm:h-auto sm:aspect-square rounded-xl xs:rounded-2xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0 relative">
              <Image src={selectedCard.imageUrl} alt={selectedCard.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col flex-1 min-h-0">
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 line-clamp-1">{selectedCard.name}</h3>
              <ul className="list-disc pl-4 xs:pl-5 mb-3 xs:mb-4 space-y-0.5 xs:space-y-1 text-xs xs:text-sm sm:text-[1rem] text-white flex-1 overflow-y-auto">
                <li className="line-clamp-2 xs:line-clamp-none">100x Engineers Buildathon: Qualified for Semi Finals</li>
                <li className="line-clamp-2 xs:line-clamp-none">Hack for BioHeritage: Winner</li>
              </ul>
              <div className="flex flex-col xs:flex-row sm:flex-row justify-between items-start xs:items-center sm:items-center mt-auto border-t border-white/10 pt-2 xs:pt-3 gap-2 xs:gap-3 sm:gap-0">
                <div className="flex items-center gap-2 xs:gap-3">
                  <Image src="/mdi_github.svg" alt="GitHub" width={28} height={28} className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                  <LinkedinIcon />
                  <InstagramIcon />
                </div>
                <span className="bg-white/10 border border-white/10 px-2 xs:px-3 py-1 rounded-full text-[0.65rem] xs:text-xs sm:text-sm whitespace-nowrap">
                  {selectedCard.company}
                </span>
              </div>
            </div>
            <button onClick={handleClose} className="absolute top-1.5 right-1.5 xs:top-2 xs:right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white text-lg xs:text-xl sm:text-2xl hover:opacity-80 transition-opacity duration-200 bg-black/30 rounded-full w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AchievementsPage