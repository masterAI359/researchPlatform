import SaveInvestigation from "./buttons/SaveInvestigation"
import InvestigateMore from "./buttons/InvestigateMore"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import DataTable from "./DataTable"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import SavingResearch from "@/components/React/session/notifications/SavingResearch"
import ViewMyInvestigations from "./buttons/ViewMyInvestigations"
import FeedBackForm from "@/components/React/session/forms/UserFeedback/FeedbackForm"


export default function FinalResults() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const saveStatus = useSelector((state: RootState) => state.saveResearch.status)
    const saved = useSelector((state: RootState) => state.saveResearch.saved)
    const seenFeedbackForm = useSelector((state: RootState) => state.feedback.seen)
    const declinedFeedBack = useSelector((state: RootState) => state.feedback.declined)
    const { display } = investigateState
    const { showFeedBackForm } = display
    const { pov } = investigateState
    const { idea } = pov


    useEffect(() => {
    }, [saved, showFeedBackForm, seenFeedbackForm, declinedFeedBack])


    return (
        <section className={`lg:p-8 h-full w-full flex justify-center mx-auto transition-all duration-200 ease-in-out 
        ${showFeedBackForm ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'}`}>
            <AnimatePresence>
                {saveStatus !== 'idle' && <SavingResearch />}
            </AnimatePresence>
            <AnimatePresence>
                {showFeedBackForm && <FeedBackForm />}
            </AnimatePresence>
            <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl sm:max-w-168 h-fit py-16 lg:px-16 md:px-12 xl:px-36 items-center relative w-auto
             max-w-88 bg-gradientdown rounded-[3rem]">
                <div className="text-center max-w-xl mx-auto">
                    <span className="text-md 2xl:text-lg text-blue-500 font-light"> Results</span>
                    <h2 className="text-sm md:text-xl mt-6 tracking-tight font-light lg:text-2xl text-white">
                        Your Investigation of the idea:  <span className="block text-zinc-400 mt-2"> {idea}</span>
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
                    {saved === true && showFeedBackForm !== null ? <ViewMyInvestigations /> : <SaveInvestigation />}
                    <InvestigateMore />
                </div>
            </div>
        </section>


    )
}



