import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import StartingPoint from "./StartingPoint"
import Stance from "./Stance"
import FinishLineButtons from "../../Buttons/ButtonWrappers/FinishLineButtons"
import ReviewPOV from "./ReviewPOV"


const variants = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
}


export default function FinishLine() {
    const [step, setStep] = useState<number>(1)
    const [takeAway, setTakeAway] = useState<string>(null)

    const testStatement = "Elon Musk is the real President Elect"

    const testPremise = "Trump must run decisions by Elon prior to taking action"

    console.log(takeAway)

    return (
        <main className="w-full h-full flex flex-col items-center xs:px-4">
            <article
                className="relative flex flex-col items-center mx-auto xs:w-full 
             xs:h-[31rem] 2xl:h-168 xs:py-20 md:py-28 lg:py-28 rounded-5xl 2xl:max-w-7xl 
             2xl:px-8 bg-gradientdown">
                <AnimatePresence mode="wait">
                    {step === 1 && <motion.div
                        key={1}
                        variants={variants}
                        initial={false}
                        animate='open'
                        exit='closed'
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <ReviewPOV />

                    </motion.div>}
                    {step === 2 && <motion.div
                        key={2}
                        variants={variants}
                        initial={false}
                        animate='open'
                        exit='closed'
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Stance />
                    </motion.div>}
                </AnimatePresence>
                <FinishLineButtons setStep={setStep} />
            </article>
        </main>

    )
}