import { SummaryHelp } from "@/helpInfo/help"
import HelpButton from "../../Buttons/Question"

export default function ({ setGettingHelp, gettingHelp }) {

    return (
        <header className="w-full h-auto mx-auto flex items-center border-b border-white/10 xl:mb-16 xl:mt-6">

            <div className="w-auto my-auto flex gap-x-8 items-center">
                <h1 className="xl:text-3xl xs:text-md text-left text-white font-light tracking-tight xs:mb-2 xl:mb-4">
                    Articles Prepared for You
                </h1>
                <div className="w-fit h-full justify-items-start self-center mb-1">
                    <HelpButton
                        info={SummaryHelp}
                        setGettingHelp={setGettingHelp}
                    />
                </div>
            </div>

        </header>
    )
}