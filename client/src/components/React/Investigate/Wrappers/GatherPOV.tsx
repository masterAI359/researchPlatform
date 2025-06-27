import WindowContainer from "../../Containers/WindowContainer"
import StepWizard from "../../StepWizard/StepWizard"

export default function GatherPOV({ }) {

    return (
        <main
            className="flex flex-col items-center lg:px-4 xl:px-0 w-full h-full">
            <div className="w-full h-auto flex justify-center items-center">
                <StepWizard />

            </div>
            <WindowContainer
            />
        </main>
    )
}