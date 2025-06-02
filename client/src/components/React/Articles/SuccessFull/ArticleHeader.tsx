import MoreButton from "../../Buttons/HelpButtons/MoreButton";
import SaveArticle from "../../Buttons/SaveButtons/SaveArticle";
import { SavedArticle } from "@/env";
import { limitArray } from "@/helpers/Presentation";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useState } from "react";


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
        bias
    } = articleData

    let rating: string | null;
    let factual_reporting: string | null;
    let country: string | null;

    if (bias) {
        rating = bias.bias || null;
        factual_reporting = bias.factual_reporting;
        country = bias.country;

        console.log(rating);
        console.log(factual_reporting);
    }

    const formatDate = (datePublished: string) => {
        if (datePublished) {
            const splitDate = datePublished.split(" ")
            const addCommas = splitDate.map((str: string, index: number) => {

                if (splitDate.length === index + 2) {
                    return str + ','
                } else {
                    return str
                }
            })

            const formatted = addCommas.join(" ")


            return formatted
        } else {
            return "Date unavailable, visit source to see date of publication."
        }


    }

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
        provider_bias: rating,
        country: country
    }
    const authShortened = limitArray(article_authors)
    const fallbackImage = '/images/logos/fallback.jpg'
    const storyImage = article_image || fallbackImage

    return (
        <header
            className="relative flex mx-auto box-border border-b border-white/20 w-full h-full 2xl:mb-1">
            <section className="flex flex-col gap-y-2 md:flex-row md:gap-x-4 items-center w-full h-full mx-auto pb-2">
                <div className="w-fit flex items-center">
                    <div className="xs:h-full flex flex-row justify-start relative">
                        <div
                            style={{ backgroundImage: `url("${storyImage}")` }}
                            className='absolute inset-0 w-full h-full xl:w-full
                            bg-cover bg-center opacity-60 xs:rounded-xl xl:rounded-lg'
                        >
                        </div>
                        <div className='relative z-10 xs:p-2 flex flex-col gap-y-10 xs:py-6 md:py-6'>

                            <div className="w-auto h-full">
                                <h1 className='lg:text-lg xs:text-md leading-6 text-white font-light tracking-tight font-serif'>
                                    {article_title}
                                </h1>
                            </div>
                            <div className="flex items-center self-start">
                                <p className="text-white opacity-100 xs:text-xs md:text-md flex items-center">
                                    {logo && <img className="mr-3 h-9 w-9" src={logo} alt={''} />}

                                    {source}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <article className="w-full h-full flex items-center justify-between self-end pt-4 md:pt-0">
                    <figcaption className="w-auto md:w-full h-full flex items-baseline self-start md:self-end">
                        <div className='flex md:flex-col h-full w-full box-border xl:gap-y-4 self-end'>
                            <div className='w-full h-full box-border flex flex-col md:gap-y-4 justify-end'>

                                <div>
                                    <p className="text-white font-light xs:text-sm md:text-lg font-serif">
                                        Published - <span className="text-slate-400 font-light xs:text-sm md:text-lg font-serif">
                                            {date ? dateFormatted : article_pub_date}{' '}
                                        </span>
                                    </p>
                                </div>
                                <div className='max-w-96 flex flex-wrap mt-3 items-center'>
                                    <p className='text-white text-sm md:text-lg mr-2'>Authors - </p>
                                    {article_authors && showAllAuthors === false && authShortened.map((author: string, index: number) => {

                                        if (index + 1 < authShortened.length) {
                                            return (<p key={index} className="text-slate-400 md:text-lg text-sm font-serif mr-2">
                                                {author},
                                            </p>)
                                        } else if (index + 1 === authShortened.length) {
                                            return (<p key={index} className="text-slate-400 md:text-lg text-sm font-serif mr-2">
                                                {author}
                                            </p>)
                                        }
                                    })}
                                    {article_authors && showAllAuthors === true && article_authors.map((author: string, index: number) => {

                                        if (index + 1 < article_authors.length) {
                                            return (<p key={index} className="text-slate-400 md:text-lg font-serif mr-2">
                                                {author},
                                            </p>)
                                        } else if (index + 1 === article_authors.length) {
                                            return (
                                                <p key={index} className="text-slate-400 md:text-lg font-serif mr-2">
                                                    {author}
                                                </p>
                                            )
                                        }
                                    })}
                                    {article_authors === null && (<p className="text-slate-400 font-serif">Authors could not be determined. Visit the source to view the article's authors.</p>)}
                                </div>
                            </div>
                        </div>
                    </figcaption>
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