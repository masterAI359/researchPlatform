import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step5Help } from "@/helpInfo/help"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { startSearch } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"


export default function Step5({ containerWidth
}) {
    const dispatch = useDispatch()

    return (
        <div style={{ flexShrink: 0, maxWidth: containerWidth }}
            className='xs:w-full
      text-center mx-auto xs:h-full box-border flex xs:px-2 basis-full'>
            <div className="block box-border min-w-full max-w-full mx-auto xs:px-0 md:px-2 2xl:h-full no-scrollbar">
                <div className="w-full h-full mx-auto flex flex-col">
                    <div className="w-full h-auto border-b border-white/10 mb-4">
                        <header className="w-full box-border h-auto flex flex-row xs:gap-x-4 md:gap-x-8 items-center">
                            <div className="w-fit flex justify-items-start">
                                <h1 className="2xl:text-3xl md:text-2xl xs:text-md tracking-tight font-light text-zinc-300 pb-1 xs:text-left">
                                    It's time to investigate the premises
                                </h1>
                            </div>
                            <div className="w-fit h-full">
                                <HelpButton
                                    info={Step5Help}
                                />
                            </div>
                        </header>
                    </div>
                    <main className="w-fit h-full mx-auto flex flex-col xs:gap-y-4 md:gap-y-2 xl:mt-6">
                        <div className="w-fit h-full">
                            <p className="xs:text-xs xl:text-lg w-fit text-white font-light tracking-tight text-left">
                                Let's seek out evidence that would
                                support the premises you submitted<br></br> or the statement examined itself

                                <br></br>
                                If you want to adjust any of your answers,
                                please do so now before we begin <br></br> searching for articles.
                            </p>
                        </div>
                        <div className="w-fit h-fit 2xl:mt-0 xs:mt-4">
                            <motion.button
                                onClick={() => dispatch(startSearch(true))}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'tween', duration: 0.1 }}
                                className="bg-white rounded-full group 2xl:-translate-x-1
                            xs:p-2 md:p-0 xl:mt-8 xs:w-36 xs:h-12 xl:w-44 xl:h-10 mx-auto flex items-center 
                            text-center hover:bg-white/10 transition-all duration-200 ease-in-out">
                                <div className="w-full h-full flex justify-between items-center xs:px-4">
                                    <div className="w-auto h-auto">
                                        <p className="text-black group-hover:text-white font-light xs:text-xs xl:text-lg w-fit">
                                            Get Started <span className="ml-2">&#8594;</span>
                                        </p>
                                    </div>
                                </div>

                            </motion.button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}