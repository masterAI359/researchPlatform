import HelpButton from "../../Buttons/Question"
import { PerspectiveHelp, IdeaHelp } from "@/helpInfo/help"
import { Help } from "@/env"
import Expertise from "../Appproach/expertise"

export default function Step4({ setStartSearch }) {

    return (
        <div className="block h-full w-full ">
            <div className="px-5">
                <div className="w-full box-border border-b h-fit border-white/10 lg:mb-4 flex flex-row gap-x-8 items-baseline lg:mt-10">
                    <div className="w-fit flex justify-items-start">
                        <h1 className="text-2xl tracking-tight font-light text-white pb-2">
                            Share your feelings and insight
                        </h1>
                    </div>
                    <div className="w-fit h-full justify-items-start translate-y-1 opacity-100">
                        <HelpButton info={IdeaHelp} />
                    </div>


                </div>
                <div className="w-full flex gap-2 items-center">

                    <div className="w-fit ">
                        <Expertise />
                    </div>
                </div>

            </div>

        </div>
    )
}

