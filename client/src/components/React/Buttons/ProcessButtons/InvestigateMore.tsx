import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"



export default function InvestigateMore() {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { pov, review } = investigateState
    const { idea, premises, perspective, biases } = pov
    const { endingPerspective, newConcepts, newPOV, takeaway } = review

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

    const storeUserWork = () => {
        localStorage.setItem("userWork", stringifiedData)
    }

    useEffect(() => {

        const loggingStorage = localStorage.getItem("userWork")
        const retrievedStorage = JSON.parse(loggingStorage)

        return () => {
            console.log(retrievedStorage)
        }
    }, [])


    return (
        <button
            onClick={storeUserWork}
            className="w-auto bg-white hover:bg-white/10 group shadow-thick 
                    transition-colors duration-200 ease-in-out rounded-full h-fit py-2 px-4 mx-auto flex items-center">
            <p className="text-black text-xs text-nowrap group-hover:text-white font-light text-center">
                Investigate More <span className="ml-2">&#8594;</span>
            </p>
        </button>
    )
}