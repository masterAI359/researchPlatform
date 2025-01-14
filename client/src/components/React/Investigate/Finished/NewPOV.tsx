import StepsEditor from "../../TipTap/StepsEditor"
import { newPerspective } from "@/ReduxToolKit/Reducers/Finished"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function NewPOV({ setterFunction }) {
    const changed = useSelector((state: RootState) => state.finish.changedPerspective)

    return (
        <section
            className="xs:w-full xs:h-full xs:px-6 flex flex-col xs:gap-y-6 items-center content-center mx-auto">
            <header className="xs:w-full border-b border-white/10 flex justify-start">
                <div>
                    <h1 className="xs:text-md lg:text-xl lg:mb-2 2xl:text-3xl text-white font-light tracking-tight">
                        If you've changed your perspective, what moved you?
                    </h1>
                </div>
            </header>
            <main className="xs:w-full xs:h-auto mx-auto xs:mb-8">
                <div className="w-full xs:h-32 2xl:h-52 bg-white/10 rounded-lg">
                    <StepsEditor context={changed} setterFunction={setterFunction} />
                </div>
            </main>
        </section>
    )
}