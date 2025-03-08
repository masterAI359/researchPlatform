import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import IdeaTackled from "./IdeaTackled"
import { Testing } from "./Testing"

export default function InitialThoughts() {
    const investigation = useSelector((state: RootState) => state.userWork.investigationToReview)


    return (
        <main className="w-full h-full flex flex-col items-center gap-y-2 px-2">
            <article
                className="relative flex flex-col md:flex-row items-center 
                md:gap-x-2 2xl:gap-x-0 relative mx-auto w-full h-full py-2 rounded-4xl gap-y-1
                2xl:w-fit 2xl:h-full   2xl:max-w-7xl 
             2xl:px-2 bg-ebony shadow-inset overflow-hidden 2xl:mt-16">
                <div className="flex flex-col px-2 2xl:px-1 h-full w-full">
                    <IdeaTackled />

                </div>
            </article>
        </main>
    )
}


