import Checks from "./Checks";
import { useDispatch, useSelector } from "react-redux";
import { getMerit, changedStance } from "@/ReduxToolKit/Reducers/Review";
import { RootState } from "@/ReduxToolKit/store";
import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import Retrospect from "./Retrospect";


const questions = [
    "Did the evidence support the idea?",
    "Has your perspective on the idea changed?",
    "What is your perspective now?"
]

const opinions: string[] = [
    "Agree",
    "Disagree",
    "Just Curious"
]

export default function ReviewQuestions({ step }) {
    const merit = useSelector((state: RootState) => state.review.merit)
    const finalPerspective = useSelector((state: RootState) => state.review.newPOV)
    const changed = useSelector((state: RootState) => state.review.movedOnIdea)

    return (
        <div className="w-fit h-full p-10 mx-auto flex flex-col flex-none gap-y-8 bg-gradientdown rounded-3xl ring-1 ring-inset ring-white/5">
            <header className="w-full h-auto">
                <h1 className="text-white text-2xl font-light text-center">
                    Where are you now?
                </h1>
            </header>
            <main className="w-full h-full mx-auto">
                {step === 1 && <>
                    <div className="flex flex-col gap-y-4 items-center 2xl:pl-6 h-full">
                        <h1 className="text-white font-light mb-2 w-full tracking-tight 2xl:text-lg ">
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
                </>}
                {step === 2 &&
                    <Retrospect />
                }
            </main>
        </div>
    )

}