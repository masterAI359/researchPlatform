import { RootState } from "@/ReduxToolKit/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { displayWorkModal } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { PreviousWork } from "../modals/PreviousWork"

export default function InvestigateMore() {
    const [open, setOpen] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const saved = useSelector((state: RootState) => state.saveResearch.saved)
    const dispatch = useDispatch()


    const showModal = () => {

        if (saved && id) {
            dispatch({ type: 'clear' })
        } else if (id && !saved) {
            displayWorkModal(true)
            setOpen(true)
        } else if (!id) {
            dispatch({ type: 'clear' })
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