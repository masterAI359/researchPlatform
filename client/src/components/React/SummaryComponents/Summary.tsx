import SummaryImage from '../Fallbacks/SummaryImage.jsx'
import Warning from '../Fallbacks/Warning.jsx'
import { useState } from "react"




export function Summary({ summaryData }) {
    const [fullStory, setFullStory] = useState<boolean>(false)

    const { summary, article_image, article_url, article_title, date, article_pub_date, article_authors, article_text, logo, source, failed, image }: any = summaryData

    function handleArticleView() {
        setFullStory(fullStory => !fullStory)
    }

    return (
        <li className="2xl:max-w-7xl xl:max-w-6xl mx-auto w-full 2xl:min-h-full 2xl:max-h-max  grid-cols-1 2xl:mx-auto gap-40 mb-40 padding-b-20 bg-ebony rounded-4xl">

            <header className="h-1/3 mb-24 pt-1 2xl:mx-20 mx-7 border-b border-white/10 pb-10">
                <figcaption className="my-10 ">
                    <h1 className="text-white opacity-87 text-3xl font-light tracking-tight" >
                        {article_title ? article_title : <div className="flex items-center animate-pulse"> <Warning /> <span className="pl-5">Issue retrieving resource</span></div>}
                    </h1>
                </figcaption>
                <div className="w-full">
                    {article_image ? <img
                        className="mb-4 rounded-lg max-w-full h-auto 2xl:max-w-[40rem]"
                        src={article_image}
                    /> : <div className="flex items-center max-w-full"> <span> <SummaryImage /> </span></div>}
                    <figcaption>

                        <div className="flex items-center">
                            <p className="text-white text-xl flex items-center mb-3" >
                                <img
                                    className="mr-3 h-12 w-12"
                                    src={logo}
                                    alt={''}
                                />

                                {`${source}`}

                            </p>

                        </div>
                        <div>
                            <p className="text-white text-xl font-serif" >{date ? date : article_pub_date} </p>
                        </div>
                    </figcaption>
                </div>
            </header>
            <main className="display-block 2xl:mx-20 mx-5 opacity-87" >
                <div className="">
                    <div className={` text-white 2xl:text-2xl text-lg leading-10 whitespace-pre-wrap pb-16 transition-all duration-300 ease-in-out ${fullStory ? 'opacity-0 hidden' : 'opacity-100'}`} >
                        {typeof summary[0] === 'string' ? `${summary[0]}` : summary.map((obj: any, index: number) => {
                            return (
                                <div key={index}>
                                    {failed ? <div>
                                        <p> {obj.denied} <span className="text-blue-400 font-bold">{obj.failedArticle}</span></p>
                                    </div> : ''}
                                    {obj.heading === '' ? ''
                                        : <div className="w-full">
                                            <h1 className="text-2xl text-white pt-10 pb-5 font-serif"
                                            > {obj.heading} </h1>
                                        </div>}

                                    <p
                                        className="font-serif indent-5 text-2xl"
                                    >{obj.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`text-white font-serif text-2xl font-thin leading-10 whitespace-pre-wrap pb-16 transition-all duration-1000 ease-in-out ${fullStory ? 'block opacity-100' : 'hidden'}`}>
                        {article_text}
                    </div>
                </div>
                <div>
                    <button
                        className={`text-sm py-2 px-4 mb-10 border focus:ring-2 rounded-full border-transparent bg-white
                 hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white
                  hover:text-white inline-flex items-center justify-center ring-1 ring-transparent`}
                        onClick={handleArticleView}
                    >
                        <p>{failed ?
                            <a
                                href={article_url}
                                target="_blank"> Visit Source &nbsp; &rarr;</a>
                            : `View ${fullStory ? 'Summary' : 'full article'}`}</p>

                    </button>
                </div>
            </main>
        </li>
    );
}
