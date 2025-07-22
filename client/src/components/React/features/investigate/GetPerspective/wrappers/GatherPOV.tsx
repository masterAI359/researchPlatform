import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import StepWizard from "../../stepWizard/StepWizard";
import ComponentLoader from "@/components/React/Shared/Loaders/ComponentLoader";
const WindowWrapper = lazy(() => import('./WindowWrapper'));

export default function GatherPOV({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { showBlueSkySearch } = investigateState.display;

    return (
        <main
            className="flex grow-0 lg:items-center xl:items-end justify-center lg:px-4 2xl:gap-y-6 w-full h-full relative">
            <StepWizard />

            {showBlueSkySearch === false &&
                <Suspense fallback={<ComponentLoader />}>
                    <WindowWrapper />
                </Suspense>}
        </main>
    )
};