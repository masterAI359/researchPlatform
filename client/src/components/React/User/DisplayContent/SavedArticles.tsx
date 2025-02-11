import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import Article from "../../ArticleComponents/Article"


export default function SavedArticles() {
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)

    return (
        <section className="w-full flex flex-col-reverse xs:gap-3 min-h-full 2xl:gap-6 mt-6 mx-auto">

            {userArticles.map((article: any, index: number) => (
                <div className="w-full mx-auto rounded-lg p-6 bg-white/5 flex flex-col">


                    <div className="flex items-center gap-x-4">
                        <div className="w-full h-auto">
                            <img className="max-w-80 h-auto rounded-lg" src={article.image_url} />
                        </div>
                        <h1 className="text-lg text-white font-light">
                            {article.title}
                        </h1>

                    </div>

                    <div className="mt-12 text-white">
                        {article.authors}
                    </div>
                </div>
            ))}

        </section>
    )
}