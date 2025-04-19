import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import ArticleSaved from "../../UserArticles/ArticleSaved"
import NoSavedSources from "../NoSavedSources"
import { useEffect } from "react"


export default function SourcesUsed() {
    const sources = useSelector((state: RootState) => state.userWork.sourcesToReview)

    useEffect(() => {
    }, [sources])

    return (
        <section className="lg:p-8">
            <div
                className="mx-auto 2xl:max-w-7xl py-12 2xl:py-0 lg:px-16 md:px-12 px-2 xl:px-12 items-center relative w-full">
                <div
                    className="relative isolate lg:flex-col overflow-hidden bg-gradient-to-tr from-ebony to-mirage rounded-4xl p-10 lg:flex">
                    <div className="pb-12">
                        <h2
                            className="text-3xl tracking-tight font-light lg:text-3xl text-white">
                            Saved Sources
                        </h2>
                    </div>
                    <div className="h-full w-full mt-12">
                        <ul className="flex flex-col h-auto gap-12">
                            {sources !== null && sources.length > 0 ? sources?.map((source: any, index: number) => (
                                <li key={source.article_url}>
                                    <ArticleSaved key={index} index={index} article={source} />
                                </li>
                            )) : <NoSavedSources />}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}