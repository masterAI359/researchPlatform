import React from "react";
import { limitString } from "@/helpers/Presentation";

function Title({ handleArticleSelection, article }): JSX.Element {

    const limitedTitle = limitString(article.title, 60);

    return (
        <div className={`group transition-opacity w-full h-full px-3  xl:p-4 duration-200 ease-in-out`}

            onClick={handleArticleSelection(article)}>
            <h3

                className="text-sm sm:text-sm w-11/12 md:w-full mt-3 lg:mt-4 tracking-tight font-light lg:text-lg xl:text-xl 2xl:text-2xl
                text-white/80 md:group-hover:text-white transition-all duration-200 ease-in-out">
                {limitedTitle}
            </h3>

            <p className="text-zinc-400 text-xs sm:text-[0.65rem] md:text-xs mt-3 lg:mt-6 w-full text-left">
                {article.authors ? article.authors[0] : 'Authors not available'} - <span>
                    <time className="text-blue-400 md:text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200" dateTime={article.pubDate}>{article.date_published}</time>
                </span>
            </p>
            <p className="text-zinc-400 text-xs sm:text-[0.65rem] md:text-xs mt-2 lg:mt-4 w-full text-left">
                Published by - <span className="text-blue-400 md:text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200">{article.provider} </span>
            </p>
        </div>
    )
};


export default React.memo(Title);