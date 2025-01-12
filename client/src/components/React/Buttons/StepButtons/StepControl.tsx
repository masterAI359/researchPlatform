import NextButton from "./Next";
import BackButton from "./Back";


export default function StepControl({ currentStep, setCurrentStep, setCanProceed, canProceed, setNotifyRequired, notifyRequired, gettingHelp }) {


    return (
        <div className={`relative lg:bottom-0 w-full h-fit flex items-center`}>
            <div className="w-auto mx-auto flex items-center xl:gap-x-60 xs:gap-x-16">
                <BackButton
                    gettingHelp={gettingHelp}
                />
                <NextButton
                    setCanProceed={setCanProceed}
                    canProceed={canProceed}
                    setNotifyRequired={setNotifyRequired}
                    notifyRequired={notifyRequired}
                    gettingHelp={gettingHelp}
                />
            </div>

        </div>
    )
}

