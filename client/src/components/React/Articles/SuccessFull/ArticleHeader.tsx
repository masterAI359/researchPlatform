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
                            bg-cover bg-center opacity-40 xs:rounded-xl xl:rounded-lg'
                        >
                        </div>
                        <div className='relative z-10 xs:p-2 flex flex-col gap-y-3 xs:py-6 md:py-6'>

                            <div className="w-auto h-full">
                                <h1 className='lg:text-lg xs:text-md leading-6 text-white font-light tracking-tight font-serif'>
                                    {article_title}
                                </h1>
                            </div>

                            <div className="flex items-center self-start">
                                <p className="text-white/70 opacity-100 xs:text-xs md:text-md flex items-center">
                                    {logo && <img className="mr-3 h-9 w-9" src={logo} alt={''} />}

                                    {source}
                                </p>
                            </div>
                            <div id="source_bias_ratings" className="flex gap-x-2 items-center justify-start w-auto h-auto flex-nowrap">
                                <div className="w-9 h-9 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="currentColor"
                                        className="text-white icon icon-tabler icons-tabler-filled icon-tabler-compass"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 14.66a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm3.684 -10.949l-6 2a1 1 0 0 0 -.633 .633l-2.007 6.026l-.023 .086l-.017 .113l-.004 .068v.044l.009 .111l.012 .07l.04 .144l.045 .1l.054 .095l.064 .09l.069 .075l.084 .074l.098 .07l.1 .054l.078 .033l.105 .033l.109 .02l.043 .005l.068 .004h.044l.111 -.009l.07 -.012l.02 -.006l.019 -.002l.074 -.022l6 -2a1 1 0 0 0 .633 -.633l2 -6a1 1 0 0 0 -1.265 -1.265zm-1.265 2.529l-1.21 3.629l-3.629 1.21l1.21 -3.629l3.629 -1.21zm-9.419 1.42a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm-7 -7a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                                </div>
                                <div id="bias_rating bg-black/60 px-2 py-1 rounded-md text-sm">
                                    <p className="text-white/70 font-light text-sm md:text-md">
                                        Source bias: <span className="text-white/60">{rating}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <article className="w-full h-full flex items-center justify-between self-end pt-4 md:pt-0">
                    <figcaption className="w-auto md:w-full h-full flex items-baseline self-start md:self-end">
                        <div className='flex md:flex-col h-full w-full box-border xl:gap-y-4 self-end'>
                            <div className='w-full h-full box-border flex flex-col md:gap-y-2 justify-end'>

                                <div>
                                    <p className="text-white font-light xs:text-sm md:text-lg">
                                        Published - <span className="text-slate-300 font-light xs:text-sm md:text-lg">
                                            {date ? dateFormatted : article_pub_date}{' '}
                                        </span>
                                    </p>
                                </div>
                                <div className='max-w-96 flex flex-wrap items-center'>
                                    <p className='text-white font-light text-sm md:text-lg mr-2'>Authors - </p>
                                    {article_authors && showAllAuthors === false && authShortened.map((author: string, index: number) => {

                                        if (index + 1 < authShortened.length) {
                                            return (<p key={index} className="text-slate-300 md:text-lg text-sm font-light mr-2">
                                                {author},
                                            </p>)
                                        } else if (index + 1 === authShortened.length) {
                                            return (<p key={index} className="text-slate-300 md:text-lg text-sm font-light mr-2">
                                                {author}
                                            </p>)
                                        }
                                    })}
                                    {article_authors && showAllAuthors === true && article_authors.map((author: string, index: number) => {

                                        if (index + 1 < article_authors.length) {
                                            return (<p key={index} className="text-slate-400 md:text-lg font-light mr-2">
                                                {author},
                                            </p>)
                                        } else if (index + 1 === article_authors.length) {
                                            return (
                                                <p key={index} className="text-slate-400 md:text-lg font-light mr-2">
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