import MoreButton from "../../Buttons/HelpButtons/MoreButton";
import SaveArticle from "../../Buttons/SaveButtons/SaveArticle";
import { SavedArticle } from "@/env";
import { limitArray } from "@/helpers/Presentation";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useState } from "react";
import { formatDate } from "@/helpers/Presentation";

export default function ArticleHeader({ articleData, setFullStory, fullStory }) {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [open, setOpen] = useState<boolean>(false)
    const [showAllAuthors, setShowAllAuthors] = useState<boolean>(false)

    const { article_image,
        logo,
        source,
        date,
        article_pub_date,
        article_title,
        article_authors,
        article_url,
        article_text,
        summary,
        factual_reporting,
        bias,
        country
    } = articleData

    const dateFormatted = date ? formatDate(date) : formatDate(article_pub_date)


    const dataToSave: SavedArticle = {
        title: article_title,
        provider: source,
        image_url: article_image,
        text: article_text,
        authors: article_authors,
        date: date ? date : article_pub_date,
        url: article_url,
        summary: summary,
        fallbackDate: article_pub_date,
        id: id,
        provider_reporting: factual_reporting,
        provider_bias: bias,
        country: country
    }
    const authShortened = limitArray(article_authors)
    const fallbackImage = '/images/logos/fallback.jpg'
    const storyImage = article_image || fallbackImage

    return (
        <header className="border-b border-white/10"
        >
            <section className="flex flex-col gap-y-2  md:flex-row md:gap-x-4 items-center w-full h-full mx-auto pb-3">

                <article className="w-full h-full flex items-center justify-between self-end pt-4 md:pt-0">
                    <div
                        className="flex justify-start items-center gap-x-4 w-4/5">
                        <div className="w-full h-auto">
                            <img
                                className="aspect-[16/9] rounded-3xl bg-zinc-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                width="400"
                                src={article_image}
                            />
                        </div>

                        <div className="group w-full">
                            <h3

                                className="text-3xl mt-6 tracking-tight font-light lg:text-3xl text-white/80  transition-all duration-200 ease-in-out">
                                {article_title}
                            </h3>
                            <p className="text-zinc-400 text-xs mt-6">
                                {article_authors ? article_authors[0] : 'Authors not available'} <span>
                                    <span className="text-zinc-400">-</span> <time className="text-zinc-400 transition-all ease-in-out duration-200" dateTime={article_pub_date}>
                                        {dateFormatted ? dateFormatted : article_pub_date}
                                    </time>
                                </span>
                            </p>
                            <p className="text-blue-400 text-xs mt-6">
                                Published by <span className="text-zinc-400">-</span> <span className="text-zinc-400 transition-all ease-in-out duration-200">
                                    {source} {country ? `- Country of origin: ${country}` : ''}
                                </span>
                            </p>
                            <p className="text-blue-400 text-xs mt-6">
                                Source bias <span className="text-zinc-400">-</span> <span className="text-zinc-400">
                                    {bias ? bias : 'Unkown'}
                                </span>
                            </p>
                        </div>

                    </div>
                    <div className="self-end w-auto h-full flex flex-col gap-y-1 md:gap-y-6 items-center">
                        <div className="w-auto h-auto flex justify-start">
                            <SaveArticle open={open} dataToSave={dataToSave} showNotification={showNotification} setShowNotification={setShowNotification} />
                        </div>
                        <div className="w-auto h-auto">
                            <MoreButton showAllAuthors={showAllAuthors} fullStory={fullStory} setFullStory={setFullStory} authors={article_authors} setShowAllAuthors={setShowAllAuthors} context={'reading'} key={article_title} open={open} setOpen={setOpen} article_url={article_url} showNotification={showNotification} />
                        </div>
                    </div>
                </article>


            </section>
        </header>
    )
}