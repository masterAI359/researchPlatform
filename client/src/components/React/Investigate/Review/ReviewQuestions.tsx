import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { getMerit, changedStance } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { RootState } from "@/ReduxToolKit/store";
import Retrospect from "./Retrospect";
import Checks from "../../Buttons/ButtonWrappers/Checks";
import Stance from "./Stance";



const questions = [
    "Did the evidence support the idea?",
    "Has your perspective changed?",
    "What is your perspective now?"
]


export default function ReviewQuestions({ step }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { review } = investigateState
    const { merit, newPOV } = review

    return (
        <div className="h-full py-6 opacity-100 z-1 xs:w-full 2xl:w-[36rem] 2xl:h-[32rem] 2xl:p-10 md:grow mx-auto flex flex-col
        2xl:min-h-96 
        flex-none gap-y-2 md:gap-y-16 bg-gradientdown rounded-3xl ring-1 ring-inset ring-white/5">
            <header className="w-full h-auto">
                <h1 className="text-white text-lg 2xl:text-4xl w-full font-light tracking-tight text-center">
                    Where you are now?
                </h1>
            </header>
            <main className="w-full h-full mx-auto">
                <AnimatePresence mode="wait">
                    {step === 1 &&
                        <motion.div
                            layout
                            key={"reflection"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className="w-full h-auto flex flex-col gap-y-3 justify-center">
                            <div className="flex flex-col gap-y-2 md:py-5 items-center h-full mx-auto">
                                <h1 className="text-white font-light w-full tracking-tight text-sm 2xl:text-lg ">
                                    {questions[0]}
                                </h1>
                                <Checks setterFunction={getMerit} answer={merit} />
                            </div>
                            <div className="flex-col gap-y-4 md:py-5 items-center h-full mx-auto">
                                <h1 className="text-white font-light mb-2 w-full tracking-tight text-sm 2xl:text-lg ">
                                    {questions[1]}
                                </h1>
                                <Checks setterFunction={changedStance} answer={newPOV} />
                            </div>
                        </motion.div>}


                    {step === 2 &&
                        <motion.div
                            layout
                            key={"newPerspective"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <Retrospect />
                        </motion.div>
                    }

                    {step === 3 &&
                        <motion.div
                            layout
                            key={"takeAways"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <Stance />
                        </motion.div>
                    }
                </AnimatePresence>
            </main>
        </div>
    )

}