import { useState } from "react"
import ReviewPagination from "../../../../Buttons/Pagination/ReviewPagination"
import ReviewPOV from "../../review/ReviewPOV"
import ReviewQuestions from "../../review/ReviewQuestions"

export default function FinishLine() {
    const [step, setStep] = useState<number>(1)


    return (
        <main className="w-full h-full flex flex-col pt-6 md:pt-16 lg:pt-0 items-center gap-y-1.5 p-1">
            <article
                className="relative flex flex-col md:flex-row items-center 
                md:gap-x-2 2xl:gap-x-0.5 mx-auto w-full h-full p-2 rounded-4xl gap-y-0.5
                2xl:w-fit 2xl:h-full 2xl:max-w-7xl xl:max-w-6xl
              bg-ebony shadow-inset overflow-hidden lg:mt-16">
                <div className="flex flex-col 2xl:px-1 h-full w-full">
                    <ReviewPOV />
                </div>
                <div className="flex flex-col 2xl:px-1 h-full w-full">
                    <ReviewQuestions step={step} />
                </div>
            </article>
            <footer className="w-full mx-auto">
                <div className="w-full h-auto mx-auto block">
                    <ReviewPagination step={step} setStep={setStep} />
                </div>
            </footer>
        </main>

    )
}