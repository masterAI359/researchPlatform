import StepsEditor from "../../TipTap/StepsEditor"
import { getTakeAways } from "@/ReduxToolKit/Reducers/Review"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function Stance({ }) {
    const finalPOV = useSelector((state: RootState) => state.review.takeAway)
    const changed = useSelector((state: RootState) => state.review.newPOV)

    console.log(finalPOV)

    return (
        <section
            className="xs:w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-6 items-center content-center mx-auto">
            <header className="xs:w-full border-b border-white/10 flex justify-start">
                <div>
                    <h1 className="xs:text-md lg:text-xl lg:mb-2 2xl:text-xl text-white font-light tracking-tight">
                        {changed ? 'So you changed your stance, what moved you?' : 'Your perspective remains, what validated your thoughts?'}
                    </h1>
                </div>
            </header>
            <main className="xs:w-full xs:h-auto mx-auto xs:mb-8">
                <div className="w-full xs:h-32 2xl:h-60 bg-white/10 rounded-lg">
                    <StepsEditor context={finalPOV} setterFunction={getTakeAways} />
                </div>
            </main>
        </section>
    )
}