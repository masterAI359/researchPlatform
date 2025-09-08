import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { presentResearch } from "@/ReduxToolKit/Reducers/UserContent/ProfileNavigationSlice";
import { reviewThisResearch } from "@/ReduxToolKit/Reducers/UserContent/UserInvestigations";
export default function BackToSavedResearch() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const backToSaved = () => {
        dispatch(presentResearch())
        setTimeout(() => {
            dispatch(reviewThisResearch(null))
        }, 150)

    }

    return (
        <button onClick={backToSaved} className="absolute z-50 md:z-1 top-3 left-0 md:left-0 lg:left-1.5 xl:left-2 2xl:left-2 md:top-96 sm:left-12 xs:w-14 xs:h-8
        lg:w-16 lg:h-auto p-2 transition-all mx-auto flex
        duration-200 ease-in-out hover:bg-white/10 items-center group
        rounded-4xl">
            <div className="absolute p-1 bg-white z-50 opacity-0 transition-all duration-200 ease-in-out delay-500 lg:group-hover:opacity-100 2xl:p-2 lg:bottom-16 2xl:left-2 xl:left-0 lg:left-2 bottom-12 -left-5
                    rounded-md items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
                    after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
                    after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent">
                <p className="text-black text-wrap 2xl:text-nowrap">go back</p>
            </div>
            <span className="mx-auto text-white lg:text-zinc-400 text-2xl sm:text-lg md:text-xl lg:text-3xl font-light">
                ←
            </span>
        </button>
    )
}