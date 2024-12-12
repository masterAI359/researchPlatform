import MindMap from "./MindMap"

export default function MapContainer({ currentStep, setCurrentStep }) {

    return (
        <section className="w-fit h-fit flex items-center box-border relative xs:hidden md:block">
            <div className="xl:min-w-128 xl:min-h-[30rem]  mx-auto rounded-4xl">
                <MindMap currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </div>
        </section>
    )
}


