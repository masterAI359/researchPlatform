import HelpButton from "../../Buttons/Question"
import { Step5Help } from "@/helpInfo/help"
import { motion } from "framer-motion"


export default function Step5({
    setGettingHelp,
    setStartSearch
}) {

    return (
        <div className="block box-border min-w-full max-w-full mx-auto xs:px-0 md:px-2 2xl:h-full no-scrollbar">
            <div className="w-full h-full mx-auto flex flex-col">
                <header className="w-full box-border border-b h-fit border-white/10 mb-4 flex flex-row gap-x-8 items-baseline">
                    <div className="w-fit flex justify-items-start">
                        <h1 className="md:text-2xl xs:text-md tracking-tight font-light text-zinc-300 pb-1 xs:text-left sm:text-center">We've established your perspective
                            <span className="text-zinc-500"> let's search for evidence </span>
                        </h1>
                    </div>
                    <div className="w-fit h-full justify-items-start translate-y-1">
                        <HelpButton
                            info={Step5Help}
                            setGettingHelp={setGettingHelp}
                        />
                    </div>
                </header>
                <main className="w-full h-full mx-auto flex flex-col xs:gap-y-4">
                    <div className="w-full h-full">
                        <p className="xs:text-xs text-white font-light text-left">
                            If you want to adjust any of your answers,
                            please do so now before we begin searching for articles.
                            <br></br>
                            <br></br>
                            When you're ready, let's search for evidence that would
                            support the premises you submitted or the statement examined itself
                        </p>
                    </div>
                    <div className="w-full h-fit mx-auto xs:mt-4">
                        <button
                            onClick={() => setStartSearch(prev => !prev)}
                            className="bg-white/10 rounded-full xs:p-2 xs:w-36 xs:h-12 mx-auto flex items-center">
                            <div className="w-full h-full flex justify-between items-center xs:px-4">
                                <div className="w-auto h-auto">
                                    <p className="text-white xs:text-sm font-light tracking-tight">
                                        Ready to Start
                                    </p>
                                </div>
                                {/* <div className="w-auto h-auto relative top-0 right-1 bottom-0 box-border">
                                    <svg className="xs:h-6 xsw:w-7 text-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M3.5,3c-0.27613,0.00003 -0.49997,0.22387 -0.5,0.5v17c0.00003,0.27613 0.22387,0.49997 0.5,0.5h17c0.27613,-0.00003 0.49997,-0.22387 0.5,-0.5v-17c-0.00003,-0.27613 -0.22387,-0.49997 -0.5,-0.5zM4,4h16v16h-16zM9.61914,8c-0.08737,-0.00138 -0.17445,0.02045 -0.25195,0.06445c-0.157,0.089 -0.25586,0.25455 -0.25586,0.43555v7c0,0.181 0.09886,0.34655 0.25586,0.43555c0.076,0.043 0.15914,0.06445 0.24414,0.06445c0.09,0 0.18077,-0.02427 0.25977,-0.07227l5.77539,-3.5c0.149,-0.091 0.24024,-0.25273 0.24024,-0.42773c0,-0.175 -0.09023,-0.33673 -0.24024,-0.42773l-5.77539,-3.5c-0.077,-0.0465 -0.16458,-0.07089 -0.25195,-0.07227z" /></g></g></svg>
                                </div> */}
                            </div>

                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}