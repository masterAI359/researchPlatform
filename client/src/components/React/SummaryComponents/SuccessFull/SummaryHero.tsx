import { SummaryHelp } from "@/helpInfo/help"
import StoryPaginate from "../../Buttons/ButtonWrappers/StoryPaginate"
import HelpButton from "../../Buttons/Question"

export default function SummaryHero({ }) {

    return (
        <header className="xs:w-full h-auto mx-auto flex items-center justify-between border-b border-white/10 xl:mt-20 2xl:mt-24 xl:max-w-6xl xl:mb-4">

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
            <StoryPaginate />

        </header>
    )
}