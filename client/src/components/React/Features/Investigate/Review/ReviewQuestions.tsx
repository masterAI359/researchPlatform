import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { getMerit, changedStance, moved } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { RootState } from "@/ReduxToolKit/store";
import Retrospect from "./Retrospect";
import Stance from "./Stance";
import ChecksButton from "./buttons/ChecksButton";



const questions = [
    "Did the evidence support the idea?",
    "Has your perspective changed?",
    "What is your perspective now?"
]


export default function ReviewQuestions({ step }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { merit, movedOnIdea } = investigateState.review

    return (
        <div className="h-72 md:h-80 lg:h-88 py-6 opacity-100 z-1 xs:w-full 2xl:w-[36rem] 2xl:h-[32rem] xl:h-96 2xl:p-10 md:grow mx-auto flex flex-col
        2xl:min-h-96 
        flex-none gap-y-4 md:gap-y-7 bg-gradientdown rounded-3xl ring-1 ring-inset ring-white/5">
            <header className="w-full h-auto">
                <h1 className="text-white text-lg lg:text-2xl 2xl:text-4xl w-full font-light tracking-tight text-center">
                    Where you are now?
                </h1>
            </header>
            <main className="w-full h-full mx-auto flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    {step === 1 &&
                        <motion.div
                            layout
                            key={"reflection"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className="w-full h-auto flex flex-col gap-y-6 justify-center items-center">
                            <div className="flex flex-col gap-y-2 md:py-3 items-center h-full mx-auto">
                                <h1 className="text-white font-light w-full tracking-tight text-sm 2xl:text-lg ">
                                    {questions[0]}
                                </h1>
                                <div
                                    className="xs:w-full flex items-center gap-x-2">
                                    <ChecksButton boolOption={true} question={merit} setterFunction={getMerit} />
                                    <ChecksButton boolOption={false} question={merit} setterFunction={getMerit} />
                                </div>
                            </div>
                            <div className="flex-col gap-y-4 md:py-5 items-center h-full mx-auto">
                                <h1 className="text-white font-light mb-2 w-full tracking-tight text-sm 2xl:text-lg ">
                                    {questions[1]}
                                </h1>
                                <div
                                    className="xs:w-full flex items-center gap-x-2">
                                    <ChecksButton boolOption={true} question={movedOnIdea} setterFunction={moved} />
                                    <ChecksButton boolOption={false} question={movedOnIdea} setterFunction={moved} />
                                </div>
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
                            className="w-full"
                        >
                            <Stance />
                        </motion.div>
                    }
                </AnimatePresence>
            </main>
        </div>
    )

}