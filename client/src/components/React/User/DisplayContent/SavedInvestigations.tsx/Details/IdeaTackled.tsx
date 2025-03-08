import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import { delay, motion } from "framer-motion"

export default function IdeaTackled() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)

    const variants = {
        hide: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0.7,
                duration: 0.2,
                type: 'tween'
            }
        },
        exit: {
            opacity: 0
        }
    }
    return (
        <section className="h-full py-6 opacity-100 z-1 xs:w-full 2xl:w-[36rem] 2xl:h-[32rem] 2xl:p-10 md:grow mx-auto flex flex-col
        2xl:min-h-96 
        flex-none gap-y-2 md:gap-y-16 bg-gradientdown rounded-3xl ring-1 ring-inset ring-white/5">
            <header className="xs:w-full 2xl:min-w-96 mx-auto ">
                <h1 className="text-lg text-left text-center mx-auto w-full lg:text-xl 
               lg:mb-2 2xl:text-4xl text-white font-light tracking-tight">
                    Where you began
                </h1>
            </header>
            <motion.main
                variants={variants}
                initial='hide'
                animate='show'
                exit='exit'
                className="h-full w-full flex flex-col gap-y-6 grow lg:min-h-16">
                <div className="w-full h-full flex flex-col gap-y-4 ">
                    <div className="w-full border-b border-white/20">
                        <h1 className="text-white font-light mb-0.5 text-sm 2xl:text-xl">
                            <em>Idea Examined</em>
                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-white text-xs font-light tracking-tight">
                            {investigation.idea}
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col gap-y-4 lg:min-h-20">
                    <div className="w-full border-b border-white/20">
                        <h1 className="text-white font-light mb-0.5 text-sm 2xl:text-xl ">
                            <em> Initial Perspective</em>

                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-white text-base">
                            {investigation.initial_perspective}
                        </p>
                    </div>
                </div>
            </motion.main>
        </section>
    )
}