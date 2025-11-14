import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Simple Card component with consistent styling
const BentoCard = ({ children, width = '400px' }) => (
    <div
        className="bg-[#060010] border border-[#392e4e] rounded-[20px] text-white flex flex-col justify-center items-center font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] md:w-auto w-full min-h-[180px] md:min-h-0"
        style={{ width, height: '260px' }}
    >
        {children}
    </div>
);

const Bento = ({ activeTab }) => {
    return (
        <div className="w-full flex justify-center px-4 select-none">
            <div className="max-w-[54rem] w-full flex flex-col gap-4">
                
                {activeTab === "tech" && (
                    <>
                        {/* Row 1 */}
                        <div className="flex justify-center gap-4 md:flex-row flex-col md:w-auto w-[90%] mx-auto">
                            <BentoCard width="650px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Web Development
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Build and design interactive websites and web apps using modern technologies like React, Next.js, and Tailwind CSS.
                                        </p>
                                    </div>
                                </BentoCard>

                                <BentoCard width="400px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Competitive Programming
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Solve coding challenges, boost problem-solving skills, and prepare for global tech contests.
                                        </p>
                                    </div>
                                </BentoCard>
                            </div>

                            {/* Row 2 */}
                        <div className="flex justify-center gap-4 md:flex-row flex-col md:w-auto w-[90%] mx-auto">
                            <BentoCard width="400px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Machine Learning
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Explore real-world AI with hands-on projects using Python, TensorFlow, and data-driven insights.
                                        </p>
                                    </div>
                                </BentoCard>

                                <BentoCard width="650px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Blockchain
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Learn the technology behind cryptocurrencies, decentralized apps, and smart contracts.
                                        </p>
                                    </div>
                                </BentoCard>
                            </div>
                        </>
                    )}

                    {activeTab === "nontech" && (
                    <>
                        {/* Row 1 */}
                        <div className="flex justify-center gap-4 md:flex-row flex-col md:w-auto w-[90%] mx-auto">
                            <BentoCard width="400px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Content Writing
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Craft engaging stories and blogs that connect ideas with people.
                                        </p>
                                    </div>
                                </BentoCard>

                                <BentoCard width="650px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Event Management
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Plan, organize, and execute exciting campus and tech events.
                                        </p>
                                    </div>
                                </BentoCard>
                            </div>

                            {/* Row 2 */}
                        <div className="flex justify-center gap-4 md:flex-row flex-col md:w-auto w-[90%] mx-auto">
                            <BentoCard width="650px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            Graphic Designing
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Explore creativity with UI/UX and graphic design experiences.
                                        </p>
                                    </div>
                                </BentoCard>

                                <BentoCard width="400px">
                                    <div className="flex flex-col justify-start h-full p-2">
                                        <h3 className={`${montserrat.className} text-start m-5 text-3xl font-semibold`}>
                                            PR & Marketing
                                        </h3>
                                        <p className="text-sm text-start m-5 opacity-80 mt-2">
                                            Promote events, engage audiences, and build strong community presence.
                                        </p>
                                    </div>
                                </BentoCard>
                            </div>
                        </>
                )}

            </div>
        </div>
    );
};

export default Bento;