import NextButton from "./Next";
import BackButton from "./Back";


export default function StepControl({ currentStep, setCurrentStep, setCanProceed, canProceed, setNotifyRequired, notifyRequired, gettingHelp }) {


    return (
        <div className={`relative w-full h-fit flex items-center`}>
            <div className="w-auto mx-auto flex items-center xl:gap-x-72 xs:gap-x-16">
                <BackButton
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    gettingHelp={gettingHelp}
                />
                <NextButton
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
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

