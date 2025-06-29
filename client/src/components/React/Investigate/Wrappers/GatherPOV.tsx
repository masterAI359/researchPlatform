import WindowContainer from "../../Containers/WindowContainer"
import StepWizard from "../../StepWizard/StepWizard"

export default function GatherPOV({ }) {

    //TODO create new component to display the user's input while going through POV steps

    return (
        <main
            className="flex grow-0 lg:items-center xl:items-end justify-center lg:px-4 2xl:gap-y-6 w-full h-full relative">
            <StepWizard />
            <WindowContainer />
        </main>
    )
}