import Thumbnail from "./Thumbnail"
import { reviewThisResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import { useDispatch } from "react-redux"
import { presentThisInvestigation } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { limitString } from "@/helpers/Presentation";

export default function PriorInvestigation({ investigation }) {
    const dispatch = useDispatch()


    function reviewResearch() {
        dispatch(reviewThisResearch(investigation))
        setTimeout(() => {
            dispatch(presentThisInvestigation());
        }, 150);
    };

    const topic = limitString(investigation.idea, 120).trim();

    return (
        <div className="md:flex w-full h-auto duration-200 ease-in">
            <h2 id="2023-03-16-heading" className="pl-7 md:w-2/3 md:pl-0 text-sm font-light tracking-tight md:pr-6 text-white md:text-right">
                <span className='text-zinc-400'>From:</span> {investigation.created_at.split('').splice(0, 10).join('')}
            </h2>
            <div className="relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16 md:pb-24">
                <div className="absolute bottom-0 left-0 w-px bg-blue-400 -top-3 md:top-2.5">
                </div>
                <div className="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-black/10 bg-blue-400 md:top-[0.4375rem]">
                </div>
                <div className="items-center w-fit">
                    <div className='w-full'>
                        <Thumbnail investigation={investigation} />
                        <h3 className="text-white font-light tracking-tight text-md mt-8">Topic</h3>
                        <p className="text-zinc-400 mt-2 text-md text-balance">
                            {topic}
                        </p>
                        <div className="mt-4 w-fit">
                            <button onClick={() => reviewResearch()} className="text-sm py-2 px-6 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10
                            text-black duration-200 focus:ring-offset-2 focus:ring-black hover:text-white inline-flex items-center justify-start ring-1 ring-transparent">
                                Review <span className="ml-2">&#8594;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}




