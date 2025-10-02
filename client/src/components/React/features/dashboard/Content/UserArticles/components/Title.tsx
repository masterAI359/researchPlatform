import React from "react";
import { limitString } from "@/helpers/Presentation";

interface TitleTypes {
    handleArticleSelection?: any,
    article: any
}


function Title({ article, handleArticleSelection }: TitleTypes): React.ReactNode {

    const limitedTitle = limitString(article.title, 60);

    return (
        <div className={`group w-full h-full px-3 xl:p-4`}
            onClick={handleArticleSelection(article)}
        >
            <h3

                className="text-sm sm:text-sm w-11/12 sm:w-full mt-3 lg:mt-4 tracking-tight font-light lg:text-lg xl:text-xl 2xl:text-2xl
                text-white/80 md:group-hover:text-white transition-colors duration-200 ease-in-out">
                {limitedTitle}
            </h3>

            <p className="text-zinc-400 text-xs sm:text-[0.65rem] md:text-xs mt-3 lg:mt-6 w-full text-left">
                {article.authors ? article.authors[0] : 'Date'} - <span>
                    <time className="text-blue-500 md:text-zinc-400 md:group-hover:text-blue-400 transition-colors ease-in-out duration-200" dateTime={article.pubDate}>{article.date_published ?? 'Visit source for date of publication'}</time>
                </span>
            </p>
            <p className="text-zinc-400 text-xs sm:text-[0.65rem] md:text-xs mt-2 lg:mt-4 w-full text-left">
                Published by - <span className="text-blue-500 md:text-zinc-400 md:group-hover:text-blue-400 transition-colors ease-in-out duration-200">{article.provider} </span>
            </p>
        </div>
    )
};


export default React.memo(Title);