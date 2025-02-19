import { isReading } from "@/ReduxToolKit/Reducers/Investigate/Reading"
import { clearChosenArticles } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles"
import { useDispatch } from "react-redux"

export default function ReturnToSearch() {
    const dispatch = useDispatch()


    return (
        <button onClick={() => {
            dispatch(isReading(false))
            dispatch(clearChosenArticles())
        }}
            className="my-auto mx-auto rounded-lg transition-all 
        duration-300 xs:max-w-8 xs:max-h-8 xl:max-w-7 xl:max-h-7 2xl:max-w-8 
        2xl:max-h-8 p-0.5 ease-in-out group relative"
        >
            <div
                className="fixed rounded-md z-50 -translate-y-16 -translate-x-4 mx-auto
            border border-slate-500 xl:p-3 2xl:p-2 opacity-0 group-hover:opacity-100 bg-astro_black 
            shadow-black transition-opacity duration-300 ease-in-out">
                <p className="text-white" >Return to Search</p>
            </div>

            <div className="h-full w-full box-border">
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M2,7v9h9l-3.62109,-3.62109c1.38641,-1.16734 3.16599,-1.87891 5.12109,-1.87891c3.534,0 6.52498,2.29466 7.58398,5.47266l2.36719,-0.78906c-1.389,-4.171 -5.31317,-7.18359 -9.95117,-7.18359c-2.64603,0 -5.05412,0.98632 -6.89648,2.60352z" /></g></g></svg>

            </div>

        </button>
    )
}