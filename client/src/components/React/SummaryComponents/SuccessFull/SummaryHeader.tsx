import MoreButton from "../../Buttons/HelpButtons/MoreButton";
import SaveArticle from "../../Buttons/SaveButtons/SaveArticle";
import { SavedArticle } from "@/env";
import { limitArray } from "@/helpers/Presentation";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useState } from "react";


export default function SummaryHeader({
    article_image,
    logo,
    source,
    date,
    article_pub_date,
    article_title,
    index,
    article_authors,
    fullStory,
    setFullStory,
    article_url,
    article_text,
    summary

}) {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [open, setOpen] = useState<boolean>(false)

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
        id: id
    }

    const authShortened = limitArray(article_authors)
    const fallbackImage = '/images/logos/fallback.jpg'
    const storyImage = article_image || fallbackImage

    return (
        <header
            className="relative flex mx-auto box-border border-b border-white/20 w-full 2xl:mb-1">
            <section className="flex xs:flex-col xs:gap-y-2 md:flex-row md:gap-x-4 items-center w-full h-full mx-auto xs:pb-2 xl:pb-2">
                <div className="w-fit flex items-center">
                    <div className="xs:h-full flex flex-row justify-start relative">
                        <div
                            style={{ backgroundImage: `url("${article_image}")` }}
                            className='absolute inset-0 xs:w-full xs:h-full xl:w-full
                            bg-cover bg-center opacity-50 xs:rounded-xl xl:rounded-lg'
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

                <figcaption className="w-full h-full flex items-baseline">
                    <div className='flex md:flex-col h-full w-full box-border xl:gap-y-4 items-center self-end'>
                        <div className='w-full h-full box-border xs:flex xs:flex-col md:gap-y-2 justify-end'>

                            <div>
                                <p className="text-slate-300 font-light xs:text-sm md:text-lg font-serif">
                                    Published - {date ? date : article_pub_date}{' '}
                                </p>
                            </div>
                            <div className='max-w-3/4 flex flex-wrap mt-3 items-center'>
                                <p className='text-slate-300 md:text-lg font-light mr-2'>Authors - </p>
                                {article_authors !== undefined && article_authors !== null ? authShortened.map((author: string, index: number) => {

                                    if (index + 1 < authShortened.length) {
                                        return (<p key={index} className="text-slate-300 md:text-lg font-serif mr-2">
                                            {author},
                                        </p>)
                                    } else if (index + 1 === authShortened.length) {
                                        return (<p key={index} className="text-slate-300 md:text-lg font-serif mr-2">
                                            {author}
                                        </p>)
                                    }
                                }) : (<p className='text-slate-300 md:text-lg font serif mr-2'>Could not determine. Visit the source to determine authors.</p>)}
                            </div>
                        </div>
                    </div>
                </figcaption>
                <div className="self-end w-auto h-auto flex flex-col gap-y-6 items-center">
                    <div className="w-auto h-auto flex justify-start">
                        <SaveArticle dataToSave={dataToSave} showNotification={showNotification} setShowNotification={setShowNotification} />
                    </div>
                    <div className="w-auto h-auto">
                        <MoreButton context={'reading'} key={article_title} open={open} setOpen={setOpen} article_url={article_url} showNotification={showNotification} />
                    </div>
                </div>
            </section>
        </header>
    )
}