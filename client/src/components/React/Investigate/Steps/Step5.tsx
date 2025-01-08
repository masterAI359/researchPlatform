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
                <header className="w-full box-border border-b h-fit border-white/10 mb-4 flex flex-row xs:gap-x-4 md:gap-x-2 items-center">
                    <div className="w-fit flex justify-items-start">
                        <h1 className="2xl:text-2xl md:text-2xl xs:text-md tracking-tight font-light text-zinc-300 pb-1 xs:text-left">
                            You've expressed your perspective,
                            <span className="text-zinc-500"> what does the evidence say? </span>
                        </h1>
                    </div>
                    <div className="w-fit h-full translate-y-1">
                        <HelpButton
                            info={Step5Help}
                            setGettingHelp={setGettingHelp}
                        />
                    </div>
                </header>
                <main className="w-full h-full mx-auto flex flex-col xs:gap-y-4 xl:mt-6">
                    <div className="w-full h-full">
                        <p className="xs:text-xs xl:text-lg text-white font-light tracking-tight text-left">
                            Let's seek out evidence that would
                            support the premises you submitted or the statement examined itself

                            <br></br>
                            If you want to adjust any of your answers,
                            please do so now before we begin searching for articles.
                        </p>
                    </div>
                    <div className="w-full h-fit mx-auto xs:mt-4">
                        <motion.button
                            whileHover={{ scale: 1.10 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            onClick={() => setStartSearch(prev => !prev)}
                            className="bg-white/10 rounded-full xs:p-2 xl:mt-8 xs:w-36 xs:h-12 xl:w-44 xl:h-14 mx-auto flex items-center text-center hover:bg-white/20 transition-opacity ease-in-out">
                            <div className="w-full h-full flex justify-between items-center xs:px-4">
                                <div className="w-auto h-auto mx-auto">
                                    <p className="text-white xs:text-xs xl:text-lg font-light xs:tracking-tight w-fit">
                                        Ready
                                    </p>
                                </div>
                            </div>

                        </motion.button>
                    </div>
                </main>
            </div>
        </div>
    )
}