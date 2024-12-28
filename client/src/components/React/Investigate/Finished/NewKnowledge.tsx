import { useState } from "react"
import Checks from "./Checks"


export default function NewKnowledge() {
    const [newConcept, setNewConcept] = useState<boolean | null>(null)
    const [fullyCovered, setFullyCovered] = useState<boolean | null>(null)
    const [expandedViews, setExpandedViews] = useState<boolean | null>(null)


    return (
        <section className="xs:w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-6 items-center content-center mx-auto">
            <header className="xs:w-11/12 border-b border-white/10 flex justify-start">
                <h1 className="xs:text-md lg:text-xl lg:mb-2 2xl:text-2xl text-white font-light tracking-tight">
                    Now that you've dug into the details, <span className="text-zinc-500">what did you learn?</span>
                </h1>
            </header>
            <main className="h-full mx-auto flex flex-col xs:gap-y-2 lg:gap-y-8 text-white">
                <div className="h-auto w-full flex flex-col items-center">
                    <figcaption className="xs:text-sm lg:text-lg lg:tracking-tight lg:mb-3 w-full 2xl:text-xl text-left font-light">
                        Was there anything you read that you hadn't heard before?
                    </figcaption>
                    <Checks setterFunction={setNewConcept} answer={newConcept} />
                </div>
                <div className="h-auto w-full flex flex-col items-center">
                    <figcaption className="xs:text-sm lg:text-lg lg:tracking-tight lg:mb-3 w-full 2xl:text-xl text-left font-light">
                        Was there anything you wanted to know that wasn't adressed?
                    </figcaption>
                    <Checks setterFunction={setFullyCovered} answer={fullyCovered} />
                </div>
                <div className="h-auto w-full flex flex-col items-center">
                    <figcaption className="xs:text-sm lg:text-lg lg:tracking-tight lg:mb-3 2xl:text-xl text-left w-full font-light">
                        Did this add to your perspective on the issue?
                    </figcaption>
                    <Checks setterFunction={setExpandedViews} answer={expandedViews} />
                </div>

            </main>
        </section>
    )
}