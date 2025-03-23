import { RootState } from "@/ReduxToolKit/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveInvestigation } from "@/helpers/SupabaseData"
import { displayWorkModal } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { PreviousWork } from "../../Modals/PreviousWork"
import { useNavigate } from "react-router-dom"
import { clearState } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"

export default function InvestigateMore() {
    const [open, setOpen] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const saved = useSelector((state: RootState) => state.saveResearch.saved)
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, premises, perspective, biases } = pov
    const { endingPerspective, newConcepts, newPOV, takeaway } = review
    const dispatch = useDispatch()
    const navigate = useNavigate()

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





    const showModal = () => {

        if (saved) {
            dispatch({ type: 'clear' })
            dispatch(clearState())
        } else {
            displayWorkModal(true)
            setOpen(true)
        }

    }



    return (
        <button
            onClick={showModal}
            className="2xl:w-60 bg-white hover:bg-white/10 group shadow-thick 
                    transition-colors duration-200 ease-in-out rounded-full h-fit py-2 px-4 mx-auto flex items-center">
            <p className="text-black w-full text-xs 2xl:text-lg text-nowrap group-hover:text-white font-light text-center">
                Investigate More <span className="ml-2">&#8594;</span>
            </p>
            {open && <PreviousWork />}
        </button>
    )
}