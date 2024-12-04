import MindMap from "./MindMap"
import ZoomWrapper from "../Buttons/MapZoom/ZoomWrapper"

export default function MapContainer({ currentStep, setCurrentStep }) {

    return (
        <section className="w-fit min-h-full relative box-border flex items-center px-8">
            <main className={`xl:min-w-128 xl:min-h-[30rem] mx-auto rounded-4xl translate-all overflow-hidden
                 duration-100 ease-in-out box-border ${currentStep < 4 ? 'bg-white/10' : 'translate-y-16 translate-x-80 bg-mirage'}`}>
                <MindMap currentStep={currentStep} setCurrentStep={setCurrentStep} />
                <ZoomWrapper />
            </main>
        </section>
    )
}


