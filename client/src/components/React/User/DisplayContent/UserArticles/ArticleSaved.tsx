import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { limitArray } from "@/helpers/Presentation"
import Bookmark from "../../../Buttons/SaveButtons/SaveArticle"
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function ArticleSaved({ article, index, }) {
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const [open, setOpen] = useState<boolean>(false)
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

    const fallbackImage = '/images/logos/fallback.jpg'
    const image = article.image_url || fallbackImage

    const authorsShortened = limitArray(article.authors)

    const handleArticleSelection = () => {
        dispatch(readSavedArticle(article))
        navigate('/SavedArticle')
    }

    return (
             <li key={article.article_url} className="cursor-pointer">
  <a
    className="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-2 items-center"
    href="#"
    title={article.title}>
    <div className="group"  onClick={handleArticleSelection}>
      <h3
       
        className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white/80 md:group-hover:text-white transition-all duration-200 ease-in-out">
        {article.title}
      </h3>
      <p className="text-zinc-400 text-xs mt-6">
        {article.authors ? article.authors[0] : 'Authors not available'} - <span> <time className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200" dateTime={article.pubDate}>{article.date_published}</time></span>
      </p>
         <p className="text-zinc-400 text-xs mt-6">
        Published by - <span className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200">{article.provider} </span>
      </p>
    </div>
    <img
      className="aspect-[16/9] w-4/5 rounded-3xl bg-zinc-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      width="560"
      height="380"
      src={article.image_url}
    />
  </a>
</li>
    )
}







//(
//    <main
//            key={article.article_url}
//            className="w-full 2xl:max-h-72 2xl:min-h-44
//                flex flex-col xs:items-center md:flex-row md:justify-end z-1
//                xs:border-t xs:border-white/20 px-2 md:py-3">
//            <div className="w-fit grow h-fit xs:pt-4 md:pt-0 md:pb-4 lg:pl-4 xs:justify-self-start md:self-start">
//                <time className="text-white font-light sm:hidden md:block text-[0.6rem] xl:text-sm text-left text-nowrap">
//                    <em className="text-zinc-400">
//                        Saved on:
//                    </em> {article.created_at.split('').splice(0, 10).join('')}
//                </time>
//            </div>
//
//            <div className="flex w-full  md:w-168 h-full md:items-end md:justify-end">
//                <div className="flex flex-col h-auto w-auto">
//                    <div className="flex xs:flex-col md:flex-row-reverse md:gap-x-0.5 lg:gap-x-4 md:justify-between h-full w-full items-center">
//
//                        <figcaption className='relative cursor-pointer w-full max-h-44 2xl:max-h-44 2xl:min-h-44 2xl:max-w-72 2xl:min-w-72 xl:max-w-60 xl:max-h-40 lg:max-w-52 lg:h-36 h-72
//                        md:max-w-44 md:max-h-32
//                        overflow-hidden'>
//                            <div
//                                style={{ backgroundImage: `url(${image})` }}
//                                className='absolute inset-0 w-full h-full bg-cover bg-center opacity-60
//                                transition-all duration-200 ease-in-out
//                                rounded-3xl'
//                            ></div>
//                            <div className='relative h-full w-full z-10 p-4'>
//
//                                <div className="flex xs:gap-x-2 z-10 md:flex-col absolute 
//                                md:right-2 md:bottom-2 xs:top-2 xs:right-2 md:self-end
//                                md:gap-y-1 xs:items-center md:justify-center md:w-fit md:h-fit">
//                                    <div className="flex flex-col items-center h-auto w-auto">
//                                        <Bookmark open={open} dataToSave={dataToSave} showNotification={showNotification} setShowNotification={setShowNotification} />
//                                    </div>
//                                </div>
//                            </div>
//                        </figcaption>
//
//                        <div className="flex flex-col h-fit md:h-full my-10 md:my-0 w-full justify-between">
//                            <div className="w-full h-auto">
//                                <h1 onClick={handleArticleSelection}
//                                    className="cursor-pointer text-xs lg:text-sm xl:text-base 2xl:text-lg w-full hover:text-blue-400 transition-all duration-200
//                                        ease-in-out text-white text-left font-light tracking-tight self-center relative group">
//                                    <p className="absolute md:-left-24 md:top-6 shadow-thick bg-white z-30 hidden p-2 rounded-lg border border-white/10 text-xs
//                                             group-hover:text-black font-bold md:group-hover:block group-hover:bg-white text-nowrap
//                                            transition-all duration-200 ease-in-out">click to read</p>
//                                    {article.title}
//                                </h1>
//                            </div>
//
//                            <div className="flex flex-col h-auto md:h-full py-1 lg:py-2 items-start group gap-y-4 mt-2">
//                                <div className="w-auto h-fit">
//                                    <p className="text-white font-light text-xs 2xl:text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out">
//                                        Source: <span className="text-zinc-400">
//                                            <em>
//                                                {article.provider}
//                                            </em>
//                                        </span>
//                                    </p>
//                                </div>
//                                <div className="font-light">
//                                    <p className="text-white font-light text-xs xl:text-sm group-hover:text-blue-400 transition-all duration-200 ease-in-out">
//                                        Authors: <span className="text-zinc-400">
//                                            <em>
//                                                {article.authors ? (`${authorsShortened.map((author: string, index: number) => {
//                                                    if (index + 1 === authorsShortened.length) {
//                                                        return author + ' ...'
//                                                    } else if (author !== 'Https') {
//                                                        return author
//                                                    }
//                                                })}`) : 'Authors N/A: Visit source for authors'}
//                                            </em>
//
//                                        </span>
//                                    </p>
//                                </div>
//                            </div>
//
//                        </div>
//
//
//                    </div>
//
//
//
//                </div>
//            </div>
//
//
//
//        </main>
//)