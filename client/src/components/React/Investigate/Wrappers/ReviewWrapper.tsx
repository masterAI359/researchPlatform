import { useState } from "react"
import ReviewPagination from "../../Buttons/ButtonWrappers/ReviewPagination"
import ReviewPOV from "../Review/ReviewPOV"
import ReviewQuestions from "../Review/ReviewQuestions"
import EndInvestigateButton from "../../Buttons/FinishInvestigation"
import { AnimatePresence, motion } from "framer-motion"


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
        <main className="w-full h-full flex flex-col items-center gap-y-2 xs:px-4">
            <article
                className="relative flex items-center gap-x-2 relative mx-auto xs:w-full
             xs:h-full 2xl:w-fit 2xl:h-full xs:py-20 md:py-2 rounded-4xl 2xl:max-w-7xl 
             2xl:px-2 bg-ebony shadow-inset overflow-hidden 2xl:mt-16">
                <div className="flex flex-col h-full w-full">
                    <ReviewPOV />
                </div>
                <div className="flex flex-col h-full w-full">
                    <ReviewQuestions step={step} />
                </div>
            </article>
            <footer className="w-full mx-auto">
                <div className="w-full h-auto mx-auto xs:hidden md:block">
                    <ReviewPagination setStep={setStep} />
                </div>
            </footer>
        </main>

    )
}