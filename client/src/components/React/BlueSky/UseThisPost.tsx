import { useDispatch, useSelector } from "react-redux"
import { displayBlueSkySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { useNavigate } from "react-router-dom"
import { selectPost } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice"
import { acceptedInput, denyIncrement } from "@/ReduxToolKit/Reducers/Investigate/Steps"

interface UseThis {
    context: string,
    post: any
}

export default function UseThisPost ({ context, post }: UseThis) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const investigateThis = (cntxt: string) => {
        if(cntxt === 'investigate') {
            dispatch(denyIncrement(false));
            dispatch(displayBlueSkySearch(false));
            dispatch(acceptedInput(true))
        } else {
            navigate('/investigate');
            dispatch(denyIncrement(false))
        }
    }

    const unselect = () => {
            dispatch(selectPost(null))
    }

    return (
        <div key={post.record.createdAt}  className="relative h-auto w-auto flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 
       sm:gap-y-8 sm:p-8 lg:col-span-2 lg:flex-row lg:items-center mt-2 
        text-center">
             <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-black xl:text-lg font-light tracking-tight">Investigate this?</p>
                <p className="mt-2">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400"></span>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                <div className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full">
                    <button onClick={() => investigateThis(context)} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-black lg:hover:bg-blue-500 text-white duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                    <button onClick={unselect} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-black lg:hover:bg-black/60 text-white duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}