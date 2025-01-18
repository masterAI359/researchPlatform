import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { incrementStory, decrementStory, limitPagination } from "@/ReduxToolKit/Reducers/Reading"


export default function Paginate() {
    const currentStory = useSelector((state: RootState) => state.read.currentStory)
    const stories = useSelector((state: RootState) => state.read.summaries)
    const atLimit = useSelector((state: RootState) => state.read.paginateLimit)
    const totalStories = stories.length
    const dispatch = useDispatch()

    console.log(atLimit)
    //work on animation to notify that there's nothing else to page through

    return (
        <div className="xl:w-44 h-auto p-1 flex gap-x-0 items-center justify-center">

            <button
                onClick={() => currentStory > 0 ? dispatch(decrementStory()) : dispatch(limitPagination(true))}
                className={`xl:w-16 xl:h-12 bg-ebony hover:bg-white/10 
             mx-auto rounded-2xl flex items-center justify-center xl:p-2
             group transition-all duration-200 ease-in-out 
             ${atLimit ? 'animate-[wiggle_1s_ease-in-out_3]' : ''}`}>
                <div className="rounded-md xl:h-fit xl:w-16 flex xs:hidden md:block mx-auto bg:black z-50 opacity-0 absolute xl:translate-y-16 xl:-translate-x-11
border border-white/50 md:group-hover:opacity-100 transition-opacity duration-200 ease-in-out">

                    <h1 className="text-white xl:text-xs xl:p-1 text-center font-light tracking-tight justify-self-start text-center w-full">
                        previous article
                    </h1>
                </div>
                <svg className="p-1.5 text-slate-400 group-hover:text-white transition-all duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                </svg>
            </button>

            <button
                onClick={() => currentStory + 2 <= totalStories ? dispatch(incrementStory()) : dispatch(limitPagination(true))}
                className="xl:w-16 xl:h-12 bg-ebony hover:bg-white/10 rounded-2xl
             mx-auto flex items-center justify-center xl:p-2 group transition-all duration-200 ease-in-out">
                <div className="rounded-md xl:h-fit xl:w-16 flex xs:hidden md:block mx-auto bg:black z-50 opacity-0 absolute xl:translate-y-16 xl:-translate-x-8
border border-white/50 md:group-hover:opacity-100 transition-opacity duration-200 ease-in-out">

                    <h1 className="text-white xl:text-xs xl:p-1 text-center font-light tracking-tight justify-self-start text-center w-full">
                        next article
                    </h1>
                </div>
                <svg className="text-slate-400 p-1.5 group-hover:text-white transition-all duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" fill="currentColor" />
                </svg>
            </button>
        </div>
    )
}