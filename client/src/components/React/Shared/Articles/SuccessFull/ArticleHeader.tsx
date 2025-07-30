import MoreButton from "../buttons/MoreButton";
import SaveArticle from '../buttons/SaveArticle';
import FrontMatter from "./FrontMatter";
import { SavedArticle } from "@/env";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useState } from "react";

export default function ArticleHeader({ articleData, setFullStory, fullStory }) {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [open, setOpen] = useState<boolean>(false)
    const [showAllAuthors, setShowAllAuthors] = useState<boolean>(false);


    const {
        article_image,
        logo,
        source,
        date_published,
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


    const dataToSave: SavedArticle = {
        title: article_title,
        provider: source,
        image_url: article_image,
        full_text: article_text,
        authors: article_authors,
        date: date_published ? date_published : article_pub_date,
        url: article_url,
        summary: summary,
        fallbackDate: article_pub_date,
        id: id,
        factual_reporting: factual_reporting,
        bias: bias,
        country: country
    };





    const fallbackImage = '/images/logos/fallback.jpg'
    const storyImage = article_image || fallbackImage

    const aspectClass = "w-[400px] aspect-[16/9] rounded-2xl lg:rounded-3xl sm:aspect-[2/1] lg:aspect-[3/2] w-full object-cover";


    return (
        <header className="border-b border-white/10"
        >
            <section className="flex flex-col gap-y-2  md:flex-row md:gap-x-4 items-center w-full h-full mx-auto pb-3">

                <article className="w-full h-full flex items-center justify-between self-end pt-4 md:pt-0">
                    <FrontMatter article={articleData} aspectClass={aspectClass} />
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