import TakeNotes from "../PanelButtons/TakeNotes"
import { CompareStories } from "./CompareStories"
import { FinishedReading } from "../PanelButtons/FinishedReading"
import ReturnToSearch from "../PanelButtons/ReturnToSearch"
import StoryPaginate from "../Pagination/StoryPaginate"

export default function ControlPanel({ }) {

    return (
        <div className="fixed 2xl:left-12 2xl:bottom-12 xl:left-2 xl:bottom-6 lg:left-6 lg:bottom-6 
        bottom-0 left-0 right-0 z-30 flex lg:w-[12rem] 2xl:w-[13.22rem] shadow-black
         h-auto bg-black xl:bg-astro_black lg:rounded-full border-t md:border border-border_gray overflow-x-hidden">

            <div className="shrink-0 w-fit h-auto px-2 py-0.5 md:py-1.5  md:py-1.5 xl:px-2 2xl:px-2.5  md:hover:bg-border_gray transition-all ease-in-out border-r border-border_gray flex justify-center">
                <ReturnToSearch />
            </div>

            <div className="shrink-0 w-fit h-auto py-0.5 px-2 md:py-1.5 xl:px-2 2xl:px-2.5 md:hover:bg-border_gray transition-all ease-in-out flex justify-center border-r border-border_gray">
                <FinishedReading />
            </div>
            <div className="md:shrink-0 hidden md:block w-fit h-auto px-2 py-0.5 xl:px-2 2xl:px-2.5 md:hover:bg-border_gray transition-all ease-in-out flex justify-center ">
                <CompareStories />

            </div>
            <div className="shrink-0 lg:grow w-fit h-auto px-2 py-0.5 xl:px-2 2xl:px-2.5 md:hover:bg-border_gray transition-all ease-in-out flex justify-center xs:border-r lg:border-0 border-border_gray">
                <TakeNotes />
            </div>
            <div className="block lg:hidden grow shrink-0 justify-end w-fit h-auto py-1.5 xl:px-2 2xl:px-2.5 lg:hover:bg-border_gray transition-all ease-in-out flex justify-center lg:border-0 border-border_gray">
                <StoryPaginate />
            </div>
        </div>
    )
}



