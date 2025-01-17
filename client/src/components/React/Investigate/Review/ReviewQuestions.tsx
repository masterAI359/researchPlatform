import Checks from "./Checks";
import { useSelector } from "react-redux";
import { getMerit, changedStance } from "@/ReduxToolKit/Reducers/Review";
import { RootState } from "@/ReduxToolKit/store";
import Retrospect from "./Retrospect";
import { motion, AnimatePresence } from "framer-motion";


const questions = [
    "Did the evidence support the idea?",
    "Has your perspective on the idea changed?",
    "What is your perspective now?"
]


export default function ReviewQuestions({ step }) {
    const merit = useSelector((state: RootState) => state.review.merit)
    const changed = useSelector((state: RootState) => state.review.movedOnIdea)

    return (
        <div className="w-96 h-96 shrink-0 p-10 mx-auto flex flex-col flex-none gap-y-8 bg-gradientdown rounded-3xl ring-1 ring-inset ring-white/5">
            <header className="w-full h-auto">
                <h1 className="text-white text-3xl font-light text-center">
                    Where are you now
                </h1>
            </header>
            <main className="w-full h-full mx-auto">
                <AnimatePresence mode="wait">
                    {step === 1 &&
                        <motion.div
                            key={"reflection"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className="w-full h-full flex flex-col lg:gap-y-6">
                            <div className="flex flex-col gap-y-4 items-center 2xl:pl-6 h-full">
                                <h1 className="text-white font-light w-full tracking-tight 2xl:text-lg ">
                                    {questions[0]}
                                </h1>
                                <Checks setterFunction={getMerit} answer={merit} />
                            </div>
                            <div className="flex-col gap-y-4 items-center 2xl:pl-6 h-full">
                                <h1 className="text-white font-light mb-2 w-full tracking-tight 2xl:text-lg ">
                                    {questions[1]}
                                </h1>
                                <Checks setterFunction={changedStance} answer={changed} />
                            </div>
                        </motion.div>}
                </AnimatePresence>

                {step === 2 &&
                    <motion.div
                        key={"newPerspective"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Retrospect />
                    </motion.div>
                }
            </main>
        </div>
    )

}