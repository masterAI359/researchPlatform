import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import PriorInvestigation from "./Test"


export default function SavedResearchLayout() {
    const savedInvestigations = useSelector((state: RootState) => state.userWork.userResearch)

    return (
        <section className="lg:p-0 bg-">
            <div className="px-8 py-12 lg:py-0 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="relative text-left">
                    <span className="text-blue-400"> Investigations </span>
                    <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white text-left">
                        A timeline of your<span className="block text-zinc-400">research and conclusions.</span>
                    </h2>
                </div>
                <div className="mx-auto max-w-2xl mt-12">
                    {savedInvestigations.map((investigation: any, index: number) => (
                        <PriorInvestigation key={index} investigation={investigation} />
                    ))}
                </div>
            </div>
        </section>

    )
}