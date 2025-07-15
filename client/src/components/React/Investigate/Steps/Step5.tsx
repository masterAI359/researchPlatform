import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { displaySearch, displayMindMap } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { RootState } from "@/ReduxToolKit/store"
import { limitString } from "@/helpers/Presentation"
import { variants } from "@/motion/variants"

export default function Step5() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov } = investigateState
    const { idea } = pov
    const dispatch = useDispatch()

    const shortened = limitString(idea)

    const beginSearch = () => {
        dispatch(displayMindMap(false))
        dispatch(displaySearch(true))
    }

    return (
        <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className='absolute inset-0
            flex items-center justify-start basis-full'>
            <div className="block w-full max-w-full mx-auto h-full no-scrollbar">
                <div className="w-full h-full mx-auto flex flex-col items-start justify-start sm:justify-center box-border">

                    <main className="w-full md:w-fit h-auto min-h-32 2xl:min-h-40 flex flex-col 
                    justify-start items-start md:justify-center
                    gap-y-5 md:gap-y-2 2xl:gap-y-12">
                        <div className="w-full h-full flex flex-col gap-y-4">
                            <p className="flex md:hidden text-xs xl:text-lg w-fit text-white whitespace-normal 
                            font-light tracking-tight text-left text-wrap">
                                The idea: <span className="text-zinc-400 font-light tracking-tight">
                                    {shortened ? shortened : idea}
                                </span>
                            </p>
                            <p className="text-xs xl:text-lg w-fit text-white font-light tracking-tight text-wrap">
                                Let's look for some evidence to support the idea you're evaluating
                            </p>
                        </div>
                        <div className="w-fit h-auto">
                            <motion.button
                                onClick={beginSearch}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'tween', duration: 0.1 }}
                                className="bg-white/10 rounded-full group 2xl:-translate-x-1 mb-2 sm:mb-0
                            w-32 h-8 xl:w-44 xl:h-10 mx-auto flex items-center 
                            text-center hover:bg-white/20 shadow-material_2">
                                <div className="w-full h-full flex justify-between items-center">
                                    <div className="w-auto h-auto mx-auto">
                                        <p className="text-white group-hover:text-white font-light text-sm text-center xl:text-lg w-fit">
                                            Get Started <span className="ml-2">&#8594;</span>
                                        </p>
                                    </div>
                                </div>

                            </motion.button>
                        </div>
                    </main>
                </div>
            </div>
        </motion.div>
    );
};