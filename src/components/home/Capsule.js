export default function Capsule({activeTab, setActiveTab}) {

  return(
    <div className="flex justify-center lg:mb-6 max-lg:mb-6 lg:mt-8 max-lg:mt-6 max-lg:px-4">
                    <div className="relative flex bg-[rgba(91,91,91,0.06)] rounded-full p-1 border-2 border-white/25 overflow-hidden shadow-[10px_10px_40px_10px_rgba(255,255,255,0.07)_inset,0_10px_40px_2px_rgba(0,0,0,0.07)] blur-[6px">
                        <button
                            onClick={() => setActiveTab("tech")}
                            className={`relative px-7 py-2 rounded-full transition-all max-lg:touch-manipulation max-lg:min-h-[44px] ${activeTab === "tech"
                                ? "text-white font-semibold transition-transform duration-200"
                                : "text-white hover:text-gray-300 "
                                }`}
                        >
                            {activeTab === "tech" && (
                                <>
                                    <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"></div>
                                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-black"></div>
                                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                                </>
                            )}
                            <span className="relative z-4">Tech</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("nontech")}
                            className={`relative px-7 py-2 rounded-full transition-all max-lg:touch-manipulation max-lg:min-h-[44px] ${activeTab === "nontech"
                                ? "text-white font-semibold transition-transform duration-200"
                                : "text-white hover:text-gray-300"
                                }`}
                        >
                            {activeTab === "nontech" && (
                                <>
                                    <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"></div>
                                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-black"></div>
                                    <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                                </>
                            )}
                            <span className="relative z-4">Non Tech</span>
                        </button>
                    </div>
                </div>

  )
}