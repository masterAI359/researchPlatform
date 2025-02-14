import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import { useEffect } from "react"
import { session } from "@/SupaBase/supaBaseClient"
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function Completed() {
    const appDispatch = useAppdispatch()
    const id = useSelector((state: RootState) => state.auth.user_id)


    useEffect(() => {

        if (session) {
            appDispatch(fetchSavedArticles(id))
        }
    }, [])

    return (
        <article className="2xl:min-w-[60rem] h-full mx-auto flex flex-col items-center md:gap-y-6">
            <header className="h-fit w-full flex justify-center">
                <h1 className="md:text-3xl text-white tracking-tight font-light">
                    All Done <span className="text-zinc-400">Case Closed</span>
                </h1>
            </header>
            <main className="w-full h-full flex items-center justify-center">
                <div className="w-1/4 h-fit">
                    <Lottie animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                </div>
            </main>
        </article>
    )
}