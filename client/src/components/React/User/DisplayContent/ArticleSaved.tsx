import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { limitArray } from "@/helpers/Presentation"
import Bookmark from "../../Buttons/SaveButtons/SaveArticle"
import MoreButton from "../../Buttons/HelpButtons/MoreButton"
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function ArticleSaved({ article, index, articleSelect, setDisplayArticles, setDisplayInvestigations }) {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [open, setOpen] = useState<boolean>(false)
    const readThisArticle = useSelector((state: RootState) => state.userdata.ArticleToReview)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const dataToSave: SavedArticle = {
        title: article.title,
        provider: article.provider,
        image_url: article.image_url,
        text: article.full_text,
        authors: article.authors,
        date: article.date_published,
        url: article.article_url,
        summary: article.summary,
        fallbackDate: null,
        id: id
    }

    const authorsShortened = limitArray(article.authors)

    const handleArticleSelection = () => {
        dispatch(readSavedArticle(article))
        navigate('/SavedArticle')
        setDisplayArticles(true)
        setDisplayInvestigations(false)
    }

    console.log(readThisArticle)

    return (
        <main
            key={index}
            className="w-full 2xl:max-h-72 2xl:min-h-44
                flex xs:flex-col xs:items-center md:flex-row md:justify-end z-1
                xs:border-t xs:border-white/20 xs:px-2 md:py-3">
            <div className="w-fit grow h-fit xs:pt-4 md:pb-4 md:pl-4 xs:justify-self-start md:self-start">
                <time className="text-white font-light text-sm text-left">
                    <em className="text-zinc-400">
                        Saved on:
                    </em> {article.created_at.split('').splice(0, 10).join('')}
                </time>
            </div>

            <div className="flex xs:w-full md:w-168 h-full md:items-end md:justify-end">
                <div className="flex flex-col h-auto w-auto">
                    <div className="flex xs:flex-col md:flex-row-reverse md:gap-x-4 md:justify-between h-full w-full items-center">

                        <figcaption className='relative cursor-pointer w-full lg:max-w-72 lg:min-w-72 lg:max-h-44 lg:min-h-44 xs:h-72  overflow-hidden'>
                            <div
                                style={{ backgroundImage: `url(${article.image_url})` }}
                                className='absolute inset-0 w-full h-full bg-cover bg-center opacity-60
                                transition-all duration-200 ease-in-out
                                rounded-3xl'
                            ></div>
                            <div className='relative h-full w-full z-10 p-4'>

                                <div className="flex xs:gap-x-2 z-10 md:flex-col absolute 
                                md:right-2 md:bottom-2 xs:top-2 xs:right-2 md:self-end
                                md:gap-y-1 xs:items-center md:justify-center md:w-fit md:h-fit">
                                    <div className="flex flex-col items-center h-auto w-auto">
                                        <Bookmark open={open} dataToSave={dataToSave} showNotification={showNotification} setShowNotification={setShowNotification} />
                                    </div>
                                    <div className="flex flex-col items-center relative h-auto w-auto">
                                        <MoreButton context={"profile"} open={open} setOpen={setOpen} showNotification={showNotification} article_url={article.article_url} />
                                    </div>
                                </div>
                            </div>
                        </figcaption>

                        <div className="flex flex-col h-full w-full justify-between">
                            <div className="w-full h-auto">
                                <h1 onClick={handleArticleSelection}
                                    className="cursor-pointer text-lg w-full hover:text-blue-400 transition-all duration-200
                                        ease-in-out text-white text-left font-light tracking-tight self-center relative group">
                                    <p className="absolute lg: lg:-left-24 opacity-0 p-2 rounded-lg border border-white/10 text-xs
                                             group-hover:text-white font-light group-hover:opacity-100 group-hover:bg-ebony text-nowrap
                                            transition-all duration-200 ease-in-out">click to read</p>
                                    {article.title}
                                </h1>
                            </div>

                            <div className="flex flex-col h-full items-start group gap-y-4">
                                <div className="w-auto h-fit">
                                    <p className="text-white font-light text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out">
                                        Source: <span className="text-zinc-400">
                                            <em>
                                                {article.provider}
                                            </em>
                                        </span>
                                    </p>
                                </div>
                                <div className="font-light">
                                    <p className="text-white font-light text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out">
                                        Authors: <span className="text-zinc-400">
                                            <em>
                                                {article.authors ? (`${authorsShortened.map((author: string, index: number) => {
                                                    if (index + 1 === authorsShortened.length) {
                                                        return author + ' ...'
                                                    } else if (author !== 'Https') {
                                                        return author
                                                    }
                                                })}`) : 'Authors N/A: Visit source for authors'}
                                            </em>

                                        </span>
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
            </div>



        </main>
    )
}