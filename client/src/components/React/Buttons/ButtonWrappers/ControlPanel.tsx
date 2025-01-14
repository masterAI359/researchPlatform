import TakeNotes from "../TakeNotes"
import { CompareStories } from "./CompareStories"
import { FinishedReading } from "../FinishedReading"
import ReturnToSearch from "../ReturnToSearch"

export default function ControlPanel({ }) {

    return (
        <div className="fixed 2xl:left-12 2xl:bottom-12 xl:left-2 xl:bottom-6 md:left-6 md:bottom-6 xs:bottom-0 xs:left-0 right-0 z-50 flex xl:w-[12rem] 2xl:w-[13.22rem] shadow-black
         h-auto xs:bg-black xl:bg-astro_black md:rounded-full xs:border-t md:border border-border_gray overflow-x-hidden">

            <div className="shrink-0 w-fit h-auto xs:px-2 xs:py-0.5  md:py-1.5 xl:px-2 2xl:px-2.5  hover:bg-border_gray transition-all ease-in-out border-r border-border_gray flex justify-center">
                <ReturnToSearch />
            </div>

            <div className="shrink-0 w-fit h-auto py-1.5 xl:px-2 2xl:px-2.5 hover:bg-border_gray transition-all ease-in-out flex justify-center border-r border-border_gray">
                <FinishedReading />
            </div>
            <div className="md:shrink-0 xs:hidden md:block w-fit h-auto py-1.5 xl:px-2 2xl:px-2.5 hover:bg-border_gray transition-all ease-in-out flex justify-center ">
                <CompareStories />

            </div>
            <div className="shrink-0 grow w-fit h-auto py-1.5 xl:px-2 2xl:px-2.5 hover:bg-border_gray transition-all ease-in-out flex justify-center xs:border-r lg:border-0 border-border_gray">
                <TakeNotes />
            </div>
        </div>
    )
}



