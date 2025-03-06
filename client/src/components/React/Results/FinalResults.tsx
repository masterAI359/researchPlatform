import SaveInvestigation from "../Buttons/ProcessButtons/SaveInvestigation"
import InvestigateMore from "../Buttons/ProcessButtons/InvestigateMore"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import DataTable from "./DataTable"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import SavingResearch from "../Forms/AuthNotifications/SavingResearch"

export default function FinalResults() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, perspective, expertise } = pov
    const { endingPerspective, merit, movedOnIdea } = review
    const [savingInvestigation, setSavingInvestigation] = useState<boolean>(null)





    return (
        <section className="lg:p-8 h-full w-full flex justify-center">
            <AnimatePresence>
                {savingInvestigation && <SavingResearch />}
            </AnimatePresence>
            <div className="2xl:max-w-7xl h-fit py-16 lg:px-16 md:px-12 px-2 xl:px-36 items-center relative w-full bg-gradientdown rounded-[3rem]">
                <div className="text-center max-w-xl mx-auto">
                    <span className="text-md 2xl:text-lg text-blue-500 font-light"> Results</span>
                    <h2 className="text-xl mt-6 tracking-tight font-light lg:text-2xl text-white">
                        Your Investigation of the idea:  <span className="block text-zinc-400"> {idea}</span>
                    </h2>
                </div>

                <div className="isolate mt-12">
                    <div className="relative -mx-8">
                        <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                            <div className="flex w-1/4 px-4" style={{ marginLeft: '50%' }} aria-hidden="true">
                                <div className="w-full rounded-xl ring-1 ring-white/5 bg-ebony shadow-inset">
                                </div>
                            </div>
                        </div>
                        <DataTable />
                    </div>
                </div>

                <div className="flex mt-16 gap-x-2 2xl:gap-x-6 w-1/2 justify-center mx-auto">
                    <SaveInvestigation setSavingInvestigation={setSavingInvestigation} />
                    <InvestigateMore />
                </div>
            </div>
        </section>


    )
}



