import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { writingNote } from "@/ReduxToolKit/Reducers/Investigate/NoteTaking"

export default function TakeNotes({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { notes } = investigateState
    const { takingNotes } = notes
    const dispatch = useDispatch()

    return (
        <button
            onClick={() => dispatch(writingNote(takingNotes === false ? true : false))}
            className="md:w-fit md:h-auto xs:max-w-8 xs:max-h-8 xl:max-w-7 xl:max-h-7 2xl:max-w-8 2xl:max-h-8 p-0.5
        rounded-lg transition-all duration-300 m-auto relative
        ease-in-out group">

            <div className="absolute p-1 bg-white z-50 hidden transition-all duration-200 ease-in-out md:group-hover:block bottom-10 -left-1
            rounded-md items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
            after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent">
                <p className="text-black" >Take Notes</p>
            </div>

            <div className="h-full w-full box-border">
                <svg className="text-pearl" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M3.75,3c-0.414,0 -0.75,0.336 -0.75,0.75v16.5c0,0.414 0.336,0.75 0.75,0.75h11.25v-5.25c0,-0.414 0.336,-0.75 0.75,-0.75h5.25v-11.25c0,-0.414 -0.336,-0.75 -0.75,-0.75zM7.75,7h8.5c0.414,0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75h-8.5c-0.414,0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75zM7.75,11h4.5c0.414,0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75h-4.5c-0.414,0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75zM16.5,16.5v4.44922c0.103,-0.037 0.2003,-0.09092 0.2793,-0.16992l4,-4c0.079,-0.079 0.13292,-0.1753 0.16992,-0.2793z" /></g></g></svg>

            </div>
        </button>
    )
}