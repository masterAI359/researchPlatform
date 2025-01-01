import WindowContainer from "./WindowContainer"
import MapContainer from "../Map/MapContainer"

export default function ContentWrapper({ currentStep, setCurrentStep, setStartSearch, setCanProceed, notifyRequired, setNotifyRequired, setGettingHelp, gettingHelp, summaries, canProceed }) {

    return (
        <main
            className="flex mx-auto my-auto box-border w-full h-fit justify-start">
            <WindowContainer
                summaries={summaries}
                currentStep={currentStep}
                setStartSearch={setStartSearch}
                setCanProceed={setCanProceed}
                notifyRequired={notifyRequired}
                setNotifyRequired={setNotifyRequired}
                gettingHelp={gettingHelp}
                setGettingHelp={setGettingHelp}
                canProceed={canProceed}
                setCurrentStep={setCurrentStep}
            />
            <div className="xs:hidden md:block w-fit h-fit flex items-center">
                <MapContainer currentStep={currentStep} />

            </div>
        </main>
    )
}