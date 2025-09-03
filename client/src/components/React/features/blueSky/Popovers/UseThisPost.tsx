import { useDispatch } from "react-redux"
import { displayBlueSkySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { useNavigate } from "react-router-dom"
import { selectPost } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice"
import { acceptedInput, denyIncrement } from "@/ReduxToolKit/Reducers/Investigate/Steps"

interface UseThis {
    context?: string,
    post: any
}

export default function UseThisPost({ context, post }: UseThis) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const investigateThis = (cntxt: string) => {
        if (cntxt === 'investigate') {
            dispatch(denyIncrement(false));
            dispatch(displayBlueSkySearch(false));
            dispatch(acceptedInput(true))
        } else {
            navigate('/investigate');
            dispatch(denyIncrement(false))
            dispatch(displayBlueSkySearch(false))
        }
    }

    const unselect = () => {
        dispatch(selectPost(null));
    };

    return (
        <div key={post.record.createdAt} className="bg-transparent relative h-auto w-auto flex justify-center items-center gap-x-8 rounded-3xl
        lg:col-span-2 lg:flex-row lg:items-center
        text-center">
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto flex justify-center items-center">

                <div
                    className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full"
                >
                    <button
                        aria-label="confirm post to investigate"
                        onClick={() => investigateThis(context)}
                        type="button"
                        className="text-lg font-light py-2 w-full 2xl:w-24 px-4 border focus:ring-2 rounded-full border-transparent
                     bg-white lg:hover:bg-blue-500 text-black focus:ring-offset-2 focus:ring-white 
                     hover:text-white inline-flex items-center justify-center ring-1 ring-transparent 
                     transition-all duration-200 ease-in-out"
                    >
                        Yes
                    </button>
                    <button
                        aria-label="unselect BlueSky post"
                        onClick={unselect}
                        type="button"
                        className="text-lg font-light py-2 w-full 2xl:w-24 px-4 border focus:ring-2 rounded-full border-transparent
                     bg-white lg:hover:bg-mirage text-black focus:ring-offset-2 focus:ring-white 
                     hover:text-white inline-flex items-center justify-center ring-1 ring-transparent
                     transition-all duration-200 ease-in-out"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};