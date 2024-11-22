import TakeNotes from "../TakeNotes"
import { CompareStories } from "./CompareStories"
import { FinishedReading } from "../FinishedReading"
import HelpButton from "../Question"




export default function ControlPanel({ setTakingNotes }) {

    return (
        <div className="fixed md:left-12 md:bottom-12 xs:left-4 xs:bottom-4 z-50 flex md:w-[13.3rem] xs:w-56 shadow-black
         h-auto bg-astro_black rounded-full border border-border_gray overflow-hidden">

            <div className="shrink-0 w-fit h-full py-1.5 px-2.5  hover:bg-border_gray transition-all ease-in-out border-r border-border_gray flex justify-center">
                <TakeNotes setTakingNotes={setTakingNotes} />
            </div>

            <div className="shrink-0 w-fit h-auto py-1.5 px-2.5 hover:bg-border_gray transition-all ease-in-out flex justify-center border-r border-border_gray">
                <FinishedReading />
            </div>
            <div className="shrink-0 w-fit h-auto py-1.5 px-2.5 hover:bg-border_gray transition-all ease-in-out flex justify-center ">
                <CompareStories />

            </div>
            <div className="w-fit h-auto py-1.5 px-2.5 hover:bg-border_gray transition-all ease-in-out flex justify-center border-border_gray">
                <TakeNotes setTakingNotes={setTakingNotes} />
            </div>
        </div>
    )
}



