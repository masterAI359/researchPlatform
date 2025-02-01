import StepsEditor from "../../TipTap/StepsEditor"
import EndInvestigateButton from "../../Buttons/ProcessButtons/FinishInvestigation"
import { getTakeAways } from "@/ReduxToolKit/Reducers/Investigate/Review"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function Stance({ }) {
    const finalPOV = useSelector((state: RootState) => state.review.takeAway)
    const changed = useSelector((state: RootState) => state.review.newPOV)

    console.log(finalPOV)

    return (
        <section
            className="xs:w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-1 items-center content-center mx-auto">
            <header className="xs:w-full border-b border-white/10 md:mb-2 flex justify-start">
                <div className="w-full h-auto">
                    <h1 className="xs:text-md w-full lg:text-lg lg:mb-2 2xl:text-xl text-white font-light tracking-tight">
                        {changed ? 'So you changed your stance, what moved you?' : 'What validated your initial thoughts?'}
                    </h1>
                </div>
            </header>
            <main className="xs:w-full xs:h-auto mx-auto xs:mb-8">
                <div className="w-full xs:h-32 2xl:h-52 bg-white/10 rounded-lg">
                    <StepsEditor context={finalPOV} setterFunction={getTakeAways} />
                </div>
            </main>

            <EndInvestigateButton />
        </section>
    )
}