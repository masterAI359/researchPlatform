import { useState } from "react"
import ReviewPagination from "../../Buttons/ButtonWrappers/ReviewPagination"
import ReviewPOV from "../Review/ReviewPOV"
import ReviewQuestions from "../Review/ReviewQuestions"


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
             xs:h-full 2xl:w-fit 2xl:h-fit xs:py-20 md:py-2 rounded-4xl 2xl:max-w-7xl 
             2xl:px-2 bg-ebony shadow-inset overflow-hidden">
                <ReviewPOV />
                <ReviewQuestions step={step} />
            </article>
            <footer className="w-full mx-auto">
                <ReviewPagination setStep={setStep} />
            </footer>
        </main>

    )
}