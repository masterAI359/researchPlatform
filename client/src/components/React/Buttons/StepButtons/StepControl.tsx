import NextButton from "./Next";
import BackButton from "./Back";


export default function StepControl({ currentStep, setCurrentStep, setCanProceed, canProceed, setNotifyRequired, notifyRequired }) {


    return (
        <div className={`relative w-full h-fit flex items-center ${currentStep === 4 ? 'hidden' : 'block'}`}>
            <div className="w-auto mx-auto flex items-center xl:gap-x-72">
                <BackButton
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
                <NextButton
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    setCanProceed={setCanProceed}
                    canProceed={canProceed}
                    setNotifyRequired={setNotifyRequired}
                    notifyRequired={notifyRequired}
                />
            </div>

        </div>
    )
}

