import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import { saveInvestigation } from "@/helpers/SupabaseData"
import { useAppdispatch } from "@/Hooks/appDispatch"


export default function SaveInvestigation() {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const dispatch = useAppdispatch()
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, premises, perspective, expertise, biases } = pov
    const { endingPerspective, newConcepts, newPOV, merit, takeaway } = review

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


    return (
        <button
            onClick={() => saveInvestigation(investigateData)}
            className="w-auto bg-white hover:bg-white/10 group shadow-thick 
                    transition-colors duration-200 ease-in-out rounded-full h-fit py-2 px-4 mx-auto flex items-center">
            <p className="text-black text-xs text-nowrap group-hover:text-white font-light text-center">
                Save your research <span className="ml-2">&#8594;</span>
            </p>
        </button>
    )
}