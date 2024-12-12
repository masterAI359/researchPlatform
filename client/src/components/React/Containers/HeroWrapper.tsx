import WindowContainer from "./WindowContainer"
import MapContainer from "../Map/MapContainer"

export default function HeroWrapper({ currentStep, setStartSearch, setQuery, isLoading,
    query, setIsSubmitted, setCurrentStep, setCanProceed, notifyRequired, setNotifyRequired, setGettingHelp, summaries, canProceed }) {

    return (
        <main className="flex mx-auto box-border w-full h-full justify-start">
            <WindowContainer
                summaries={summaries}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                query={query}
                setQuery={setQuery}
                isLoading={isLoading}
                setIsSubmitted={setIsSubmitted}
                setStartSearch={setStartSearch}
                setCanProceed={setCanProceed}
                notifyRequired={notifyRequired}
                setNotifyRequired={setNotifyRequired}
                setGettingHelp={setGettingHelp}
                canProceed={canProceed}
            />
            <MapContainer currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </main>
    )
}