import MindMap from "./MindMap"

export default function MapContainer({ currentStep }) {

    return (
        <section className="w-fit h-fit flex items-center box-border">
            <div className="xl:min-w-128 xl:h-full mx-auto rounded-4xl">
                <MindMap currentStep={currentStep} />
            </div>
        </section>
    )
}


