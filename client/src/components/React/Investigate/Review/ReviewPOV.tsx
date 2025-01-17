import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function ReviewPOV() {
    const newConcept = useSelector((state: RootState) => state.review.newConcepts)
    const fullyCovered = useSelector((state: RootState) => state.review.wantedMore)
    const newStance = useSelector((state: RootState) => state.review.newPOV)
    const merit = useSelector((state: RootState) => state.review.merit)
    const idea = useSelector((state: RootState) => state.pov.idea)
    const perspective = useSelector((state: RootState) => state.pov.perspective)

    console.log({ newConcept, fullyCovered, newStance })

    return (
        <section className="xs:w-fit xs:h-full  2xl:w-[36rem] 2xl:h-[32rem] 2xl:p-10 box-border grow flex flex-col
         lg:bg-gradient-to-tr from-ebony to-mirage lg:border border-white/5
        rounded-3xl xs:gap-y-6 2xl:gap-y-10 items-center content-center">
            <header className="xs:w-full 2xl:min-w-96 mx-auto ">
                <h1 className="xs:text-md text-left text-center mx-auto w-full lg:text-xl 
                lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                    Where you began
                </h1>
            </header>
            <main className="h-full w-full flex flex-col gap-y-12 grow lg:min-h-20">
                <div className="w-full h-full flex flex-col gap-y-4 ">
                    <div className="w-full border-b border-white/20">
                        <h1 className="text-white font-light mb-2 text-xl">
                            <em>Idea Examined</em>
                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-white font-lg">
                            {idea}
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col gap-y-4 lg:min-h-20">
                    <div className="w-full border-b border-white/20">
                        <h1 className="text-white font-light mb-2 text-xl ">
                            <em> Initial Perspective</em>

                        </h1>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-white font-lg">
                            {perspective}
                        </p>
                    </div>
                </div>
            </main>
        </section>
    )
}
