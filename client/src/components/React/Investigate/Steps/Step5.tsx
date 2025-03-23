import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step5Help } from "@/helpInfo/help"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { displaySearch, displayMindMap } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { RootState } from "@/ReduxToolKit/store"

export default function Step5({ containerWidth }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov } = investigateState
    const { idea } = pov
    const dispatch = useDispatch()

    const beginSearch = () => {
        dispatch(displayMindMap(false))
        dispatch(displaySearch(true))
    }

    return (
        <div style={{ flexShrink: 0, maxWidth: containerWidth }}
            className='w-full h-full
            flex items-center justify-start text-center basis-full'>
            <div className="block w-full max-w-full mx-auto px-2  md:h-full no-scrollbar">
                <div className="w-full h-full mx-auto flex flex-col items-start py-4 box-border">
                    <div className="w-full h-auto border-b border-white/10 mb-4">
                        <header className="w-full h-auto flex flex-row gap-x-8 md:gap-x-8 items-center">
                            <div className="w-fit flex justify-items-start">
                                <h1 className="2xl:text-3xl md:text-2xl text-md tracking-tight font-light text-zinc-300 pb-1 xs:text-left">
                                    Now we search for evidence
                                </h1>
                            </div>
                            <div className="w-fit h-full">
                                <HelpButton
                                    info={Step5Help}
                                />
                            </div>
                        </header>
                    </div>
                    <main className="w-fit h-full flex flex-col justify-start md:justify-center gap-y-4 md:gap-y-2 xl:mt-16">
                        <div className="w-full h-full flex flex-col gap-y-4">
                            <p className="text-xs xl:text-lg w-fit text-white font-light tracking-tight text-left">
                                The idea: <span className="text-zinc-400 font-light tracking-tight">
                                    <em>
                                        {idea}
                                    </em>
                                </span>
                            </p>
                            <p className="text-xs xl:text-lg w-fit text-white font-light tracking-tight text-wrap text-pretty">
                                Let's look for some evidence to support the idea you're evaluating
                            </p>
                        </div>
                        <div className="w-fit h-fit 2xl:mt-0 mt-2 md:mx-0">
                            <motion.button
                                onClick={beginSearch}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'tween', duration: 0.1 }}
                                className="bg-white rounded-full group 2xl:-translate-x-1
                             md:p-0 xl:mt-8 w-32 h-8 xl:w-44 xl:h-10 mx-auto flex items-center 
                            text-center hover:bg-white/10 transition-all duration-200 ease-in-out">
                                <div className="w-full h-full flex justify-between items-center">
                                    <div className="w-auto h-auto mx-auto">
                                        <p className="text-black group-hover:text-white font-light text-sm text-center xl:text-lg w-fit">
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