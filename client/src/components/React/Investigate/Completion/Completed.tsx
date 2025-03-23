import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import { useEffect } from "react"
import { displayCompletion, displayResults } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function Completed() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { display } = investigateState
    const showComplete = display
    const dispatch = useDispatch()

    useEffect(() => {

        const timer = setTimeout(() => {
            dispatch(displayCompletion(false))

        }, 2000)

        return () => {
            dispatch(displayResults(true))
            clearTimeout(timer)
        }

    }, [showComplete])

    return (
        <article className="2xl:min-w-[60rem] w-4/5 h-fit md:h-full mx-auto flex flex-col items-center md:gap-y-6 relative">
            <header className="h-fit w-full flex justify-center">
                <h1 className="md:text-3xl text-white tracking-tight font-light">
                    All Done <span className="text-zinc-400">Case Closed</span>
                </h1>
            </header>
            <main className="w-full h-full flex items-center justify-center">
                <div className="w-1/2 md:w-1/4 h-fit">
                    <Lottie animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                </div>
            </main>


        </article>
    )
}