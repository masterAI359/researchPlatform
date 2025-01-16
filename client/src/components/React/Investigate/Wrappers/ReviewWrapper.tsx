import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import StartingPoint from "../Review/StartingPoint"
import Stance from "../Review/Stance"
import ReviewPagination from "../../Buttons/ButtonWrappers/ReviewPagination"
import ReviewPOV from "../Review/ReviewPOV"


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
                <ReviewPagination setStep={setStep} />
            </article>
        </main>

    )
}