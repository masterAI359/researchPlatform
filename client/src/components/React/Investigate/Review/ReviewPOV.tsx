import { useSelector } from "react-redux"
import { newKnowledge, changedStance, wantsMoreContext, getMerit, moved } from "@/ReduxToolKit/Reducers/Review"
import { RootState } from "@/ReduxToolKit/store"
import ReviewInput from "./ReviewInput"


export default function ReviewPOV() {
    const newConcept = useSelector((state: RootState) => state.review.newConcepts)
    const fullyCovered = useSelector((state: RootState) => state.review.wantedMore)
    const newStance = useSelector((state: RootState) => state.review.newPOV)
    const merit = useSelector((state: RootState) => state.review.merit)
    const idea = useSelector((state: RootState) => state.pov.idea)
    const perspective = useSelector((state: RootState) => state.pov.perspective)

    console.log({ newConcept, fullyCovered, newStance })

    return (
        <section className="xs:w-full xs:h-full xs:px-6 md:px-0 flex flex-col xs:gap-y-6 2xl:gap-y-10 items-center content-center">
            <header className="w-full mx-auto">
                <h1 className="xs:text-md text-left text-center w-auto lg:text-xl 
                lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                    With this knowledge <span className="text-zinc-500 font-light tracking-tight">
                        where do you stand?
                    </span>
                </h1>
            </header>
            <main className="h-full w-full flex 2xl:gap-x-24">
                <ReviewInput reducerBoolean={merit} reducerFunction={getMerit} initialResponse={idea} PieceOfPOV={"Idea Examined"} questionPrompted={"Did the evidence support this?"} />
                <ReviewInput reducerBoolean={newStance} reducerFunction={changedStance} initialResponse={perspective} PieceOfPOV={"Initial Opinion"} questionPrompted={"Do you still have this perspective?"} />

            </main>
        </section>
    )
}
