import { Articles, SelectedArticles } from "@/env"
import { useEffect, useState } from "react"

interface ArticleProps {
    article: Articles,
    selectedForSummary: SelectedArticles[],
    setSelectedForSummary: Function
}

export default function Article({ article, selectedForSummary, setSelectedForSummary }: ArticleProps) {
    const { url, name, provider, image, description, datePublished, logo } = article;
    const thumbnail = image.img
    const isHilighted = selectedForSummary.some(item => item.url === article.url)

    console.log(article)

    const forSummaryData = {
        url: article.url,
        source: article.provider,
        date: article.datePublished,
        logo: article.logo,
        title: article.name
    }

    const chooseArticle = (article: Articles) => {
        setSelectedForSummary((prevSelectedForSummary: SelectedArticles[]) => {

            const isAlreadySelected = prevSelectedForSummary.some(selected => selected.url === article.url);

            if (isAlreadySelected) {
                return prevSelectedForSummary.filter(item => item.url !== article.url);

            } else {
                if (prevSelectedForSummary.length < 3) {
                    return [...prevSelectedForSummary, forSummaryData];

                } else {
                    return prevSelectedForSummary;
                }
            }
        });
    }


    return (
        <li
            onClick={() => { chooseArticle(article) }}
            key={name}
            className={`group cursor-pointer min-h-96 relative mx-auto rounded-3xl text-white 
                    lg:opacity-90 lg:hover:opacity-100 p-4 bg-ebony 2xl:hover:scale-110 transition-all ease-in-out duration-300
                    lg:p-8
                    ${isHilighted ? "border-2 border-blue-400" : "shadow"}`}
        >
            <figcaption className='relative flex flex-row items-center gap-4 pb-6 border-b border-white/10'>
                <div className='overflow-hidden shrink-0'>
                    <img
                        src={thumbnail}
                        className='object-cover rounded-full h-20 w-20 shrink-0'
                    />
                </div>
                <div>
                    <h1 className='text-xl leading-6 text-white font-serif'>
                        {name}
                    </h1>
                    <div className='mt-1'>
                    </div>
                </div>
            </figcaption>
            <figure className="hover:">
                <div className={`h-full group mt-2 pt-2 group-hover: transition-colors duration-200 ${isHilighted ? 'opacity-100' : null}`}>
                    <blockquote className='relative'>
                        <span className={`text-sm font-serif mb-5 flex items-center ${isHilighted ? 'opacity-100' : null}`}>
                            <img
                                className="mr-3 h-12 w-12"
                                src={logo}
                                alt={''}
                            />
                            {provider}
                        </span>
                        <p className='text-base transition-colors duration-100 font-serif'>
                            "{description}"
                        </p>
                    </blockquote>
                </div>
            </figure>
        </li>
    );
}




