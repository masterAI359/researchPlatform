import NextButton from "./Next";
import BackButton from "./Back";


export default function StepControl({ currentStep, setCurrentStep, setCanProceed, canProceed, setNotifyRequired, notifyRequired, gettingHelp }) {


    return (
        <div className={`relative lg:bottom-0 w-full h-fit flex items-center`}>
            <div className="w-auto mx-auto flex items-center xl:gap-x-6 xs:gap-x-16">
                <BackButton
                />
                <NextButton
                    gettingHelp={gettingHelp}
                />
            </div>

        </div>
    )
}

