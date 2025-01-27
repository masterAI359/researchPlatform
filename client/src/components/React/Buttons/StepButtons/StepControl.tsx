import NextButton from "./Next";
import BackButton from "./Back";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";


export default function StepControl({ }) {
    const gettingHelp = useSelector((state: RootState) => { state.help.gettingHelp })

    return (
        <div className={`absolute 2xl:bottom-6 2xl:right-60 w-full h-fit flex items-center`}>
            <div className="w-auto mx-auto flex items-center xl:gap-x-6 xs:gap-x-16">
                <BackButton
                />
                <NextButton
                />
            </div>

        </div>
    )
}

