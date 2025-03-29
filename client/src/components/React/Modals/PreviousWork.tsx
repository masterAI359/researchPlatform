import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { saveInvestigation } from "@/helpers/SupabaseData"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useNavigate } from "react-router-dom"
import { displayWorkModal } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"

export function PreviousWork() {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, premises, perspective, biases } = pov
    const { endingPerspective, newConcepts, newPOV, takeaway } = review
    const dispatch = useDispatch()

    const investigateData = {
        idea: idea,
        premises: premises,
        perspective: perspective,
        biases: biases,
        ending_perspective: endingPerspective,
        new_concepts: newConcepts,
        changed_opinion: newPOV,
        takeaway: takeaway,
        user_id: id
    }

    const storedInvestigation = investigateData

    const stringifiedData = JSON.stringify(storedInvestigation)

    const variants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    }



    const handlePreviousWork = () => {

        if (id) {
            localStorage.setItem("userWork", stringifiedData)
            saveInvestigation(investigateData)
            dispatch({ type: 'clear' })
            displayWorkModal(false)

        }

    }

    const discardWork = () => {

        dispatch({ type: 'clear' })
    }

    const modal = (
        <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
         xl:min-w-96 xl:min-h-80 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 
        sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-ebony mt-2 
        shadow-inset text-center">
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-white xl:text-3xl font-light tracking-tight">Save your work?</p>
                <p className="mt-4">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400"></span>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                <div className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full">
                    <button onClick={handlePreviousWork} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                    <button onClick={discardWork} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>
                </div>
            </div>
        </motion.div>)


    return (
        createPortal(modal, document.body)
    )

}

