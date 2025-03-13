import { SummaryHelp } from "@/helpInfo/help"
import StoryPaginate from "../Buttons/Pagination/StoryPaginate"
import HelpButton from "../Buttons/HelpButtons/Question"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function ReadingHero({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { showContent } = investigateState.display
    const { read } = investigateState
    const { summaries, ContentStatus } = read

    return (
        <header className="w-full mt-12 h-auto mx-auto flex items-center justify-between border-b border-white/10 xl:mt-20 2xl:mt-24 xl:max-w-6xl xl:mb-4">

            <div className="w-auto my-auto flex xl:gap-x-6 xs:gap-x-4 items-center">
                <h1 className="xl:text-3xl xs:text-md text-left text-white font-light tracking-tight md:mb-0 xs:mb-2">
                    Dive into the details
                </h1>
                <div className="w-fit h-full justify-items-start self-center md:mb-0 xs:mb-2">
                    <HelpButton
                        info={SummaryHelp}
                    />
                </div>
            </div>
            <div className="hidden lg:block">
                {ContentStatus === 'fulfilled' && summaries ? <StoryPaginate /> : null}
            </div>
        </header>
    )
}