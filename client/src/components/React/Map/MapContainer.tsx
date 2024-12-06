import MindMap from "./MindMap"
import ZoomWrapper from "../Buttons/MapZoom/ZoomWrapper"

export default function MapContainer({ currentStep, setCurrentStep }) {

    return (
        <section className="w-full h-full flex items-center relative">
            <div className="xl:min-w-128 xl:min-h-[30rem] mx-auto rounded-4xl">
                <MindMap currentStep={currentStep} setCurrentStep={setCurrentStep} />
                {/* <ZoomWrapper /> */}
            </div>
        </section>
    )
}


