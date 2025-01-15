import Checks from "./Checks"
import { useSelector } from "react-redux"
import { newKnowledge, changedStance, wantsMoreContext } from "@/ReduxToolKit/Reducers/Finished"
import { RootState } from "@/ReduxToolKit/store"


export default function NewKnowledge() {
    const newConcept = useSelector((state: RootState) => state.finish.newConcepts)
    const fullyCovered = useSelector((state: RootState) => state.finish.wantedMore)
    const newStance = useSelector((state: RootState) => state.finish.newPOV)

    console.log({ newConcept, fullyCovered, newStance })

    return (
        <section className="xs:w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-6 items-center content-center mx-auto">
            <header className="xs:w-full border-b border-white/10 flex justify-start">
                <h1 className="xs:text-md lg:text-xl lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                    Now that you've dug into the details, <span className="text-zinc-500">has anything changed?</span>
                </h1>
            </header>
            <main className="h-full mx-auto flex flex-col xs:gap-y-2 lg:gap-y-8 text-white">
                <div className="h-auto w-full flex flex-col items-center">
                    <figcaption className="xs:text-sm lg:text-lg lg:tracking-tight xs:mb-2 lg:mb-3 w-full 2xl:text-xl text-left font-light">
                        Was there anything you read that you hadn't heard before?
                    </figcaption>
                    <Checks setterFunction={newKnowledge} answer={newConcept} />
                </div>

                <div className="h-auto w-full flex flex-col items-center">
                    <figcaption className="xs:text-sm lg:text-lg lg:tracking-tight xs:mb-2 lg:mb-3 2xl:text-xl text-left w-full font-light">
                        Did your perspective on the issue change?
                    </figcaption>
                    <Checks setterFunction={changedStance} answer={newStance} />
                </div>
                <div className="h-auto w-full flex flex-col items-center">
                    <figcaption className="xs:text-sm lg:text-lg lg:tracking-tight xs:mb-2 lg:mb-3 w-full 2xl:text-xl text-left font-light">
                        Was there anything you wanted to know that wasn't adressed?
                    </figcaption>
                    <Checks setterFunction={wantsMoreContext} answer={fullyCovered} />
                </div>
            </main>
        </section>
    )
}