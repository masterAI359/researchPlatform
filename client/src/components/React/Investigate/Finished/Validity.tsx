import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
//TODO: create component to gauge whether the premises held up under scrutiny or not

export default function Validity() {
    const idea = useSelector((state: RootState) => state.pov.idea)
    const premises = useSelector((state: RootState) => state.pov.premises)

    return (
        <div className="w-full h-full mx-auto flex flex-col">
            <header className="w-full border-b border-white/10 flex items-center">
                <h1 className="2xl:text-3xl text-white font-light tracking-tight">
                    {premises !== '' ? 'Were the premises supported by evidence?'
                        : 'Did the idea have merit?'}
                </h1>
            </header>
            <div className="w-full h-full mx-auto">
                <figcaption className="text-white font-light tracking-tight">

                </figcaption>
                <p className="text-white 2xl:text-lg font-light">
                    {premises !== null ? premises : idea}
                </p>
            </div>
        </div>
    )
}