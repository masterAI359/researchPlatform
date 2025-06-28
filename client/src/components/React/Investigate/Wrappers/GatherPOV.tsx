import WindowContainer from "../../Containers/WindowContainer"
import StepWizard from "../../StepWizard/StepWizard"

export default function GatherPOV({ }) {

    //TODO create new component to display the user's input while going through POV steps

    return (
        <main
            className="flex flex-col grow-0 items-center lg:px-4 2xl:gap-y-6 xl:px-0 w-full h-full relative">
            <StepWizard />
            <WindowContainer />
        </main>
    )
}