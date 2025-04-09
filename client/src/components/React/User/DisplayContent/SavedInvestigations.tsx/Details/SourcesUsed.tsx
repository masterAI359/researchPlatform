import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import ArticleSaved from "../../UserArticles/ArticleSaved"
import NoSavedSources from "../NoSavedSources"


export default function SourcesUsed() {
    const sources = useSelector((state: RootState) => state.userWork.sourcesToReview)

    return (
        <section className="lg:p-8">
            <div
                className="mx-auto 2xl:max-w-7xl py-12 2xl:py-0 lg:px-16 md:px-12 px-2 xl:px-36 items-center relative w-full">
                <div
                    className="relative isolate lg:flex-col overflow-hidden bg-ebony rounded-4xl px-6 p-10 lg:flex lg:p-12">
                    <div className="pb-12">
                        <h2
                            className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                            Saved Sources
                        </h2>
                    </div>
                    <div className="h-full w-full mt-12">
                        <ul className="flex flex-col h-auto gap-12">
                            {sources.length > 0 ? sources?.map((source: any, index: number) => (
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