import { useState, useEffect, useLayoutEffect } from "react";
import MoreButton from "../../Buttons/HelpButtons/MoreButton";
import SaveArticle from "../../Buttons/SaveButtons/SaveArticle";
import { supabase } from "@/SupaBase/supaBaseClient";


const { data: { session } } = await supabase.auth.getSession()


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
    const currentSession = session
    const { id } = currentSession.user

    const [fillBookMark, setFillBookMark] = useState<boolean>(false)
    const [showSavedNotification, setShowSavedNotification] = useState<boolean>(null)
    const [articleExists, setArticleExists] = useState<boolean>(null)
    const [removeNotification, setRemoveNotification] = useState<boolean>(null)



    const checkArticle = async () => {
        console.log({ ActionTriggered: "checking for article in database" })


        try {
            const { data, error } = await supabase
                .from('articles')
                .select('article_url')
                .eq('user_id', id)
                .eq('article_url', article_url)

            if (data.length > 0) {
                setFillBookMark(true)
                setArticleExists(true)
            } else if (error) {
                console.log(error)
            } else if (!session) {
                setArticleExists(false)
                console.log("Not found")
            } else {
                setArticleExists(false)
                setRemoveNotification(true)
            }
        } catch (error) {
            console.log(error)

        }

    }

    const saveArticle = async (e: any) => {
        try {
            const { data, error } = await supabase.from('articles')
                .insert([
                    {
                        title: article_title,
                        provider: source,
                        full_text: article_text,
                        authors: article_authors,
                        date_published: date ? date : article_pub_date,
                        article_url: article_url,
                        summary: summary,
                        user_id: id
                    }

                ])
                .select()
            if (error) {
                console.log(error)

            } else if (data.length > 0) {
                setFillBookMark(true)
                setArticleExists(true)
            } else {
                setFillBookMark(false)
            }

        } catch (err) {
            console.log(err)
        }
    }




    const limitArray = (arr: any) => {

        let shortenedAuthors = []


        if (arr !== null) {

            for (let i = 0; i < arr.length; i++) {

                if (i < 3) {

                    if (arr[i].length < 25) {
                        shortenedAuthors.push(arr[i])
                    } else {
                        continue
                    }
                } else if (i > 3) {
                    break
                }
            }
        } else {
            shortenedAuthors.push("The authors of this article couldn't be determined. Visit the provider for author information")
        }

        return shortenedAuthors
    }


    const authShortened = limitArray(article_authors)
    const fallbackImage = '/images/logos/fallback.jpg'
    const storyImage = article_image || fallbackImage


    useLayoutEffect(() => {
        console.log(session)
        if (session) {
            checkArticle()
        }


    }, [session])


    return (
        <header
            className="relative flex mx-auto box-border border-b border-white/20 w-full mx-auto 2xl:mb-1">
            <section className="flex xs:flex-col xs:gap-y-2 md:flex-row md:gap-x-4 items-center w-full h-full mx-auto xs:pb-2 xl:pb-2">
                <div className="w-fit flex items-center">
                    <div className="xs:h-full xs:h-full flex flex-row justify-start relative">
                        <div
                            style={{ backgroundImage: `url("${article_image}")` }}
                            className='absolute inset-0 xs:w-full xs:h-full xl:w-full
                            bg-cover bg-center opacity-50 xs:rounded-xl xl:rounded-lg xl:w-full'
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
                                    <img className="mr-3 h-9 w-9" src={logo} alt={''} />

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
                                        return (<p className="text-slate-300 md:text-lg font-serif mr-2">
                                            {author},
                                        </p>)
                                    } else if (index + 1 === authShortened.length) {
                                        return (<p className="text-slate-300 md:text-lg font-serif mr-2">
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
                        <SaveArticle removeNotification={removeNotification} articleExists={articleExists} setRemoveNotification={setRemoveNotification} fillBookMark={fillBookMark} saveArticle={saveArticle} />
                    </div>
                    <div className="w-auto h-auto">
                        <MoreButton key={article_title} article_url={article_url} />
                    </div>
                </div>
            </section>
        </header>
    )
}