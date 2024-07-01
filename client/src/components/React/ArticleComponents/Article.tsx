import { useState } from "react";
import { Articles } from "@/env";



 export default function Article ({ article, selectedForSummary, setSelectedForSummary }) {

    const [isHighlighted, setIsHighlighted] = useState<boolean>(false)

    const { url, name, provider, image, description, datePublished, logo } = article;
    const thumbnail = image.img
    const articleURL = article.url

    const chooseArticle = (article:Articles) => {

        const exists = selectedForSummary.some(selectedArticle => selectedArticle.url === articleURL)

        setSelectedForSummary((selectedForSummary) => {

            if(selectedForSummary.length <= 2 && !exists) { //just setting this to 2, as to limit the selectedForSummary array length to 3

                setIsHighlighted(true)
                return [...selectedForSummary, article]
            } else if(exists) {

                setIsHighlighted(false) 

                const newArray = selectedForSummary.filter(selectedArticle => selectedArticle.url !== articleURL)
                return newArray
            }

            return selectedForSummary
        })
       
    }




    return (
        <li
        onClick = {() => {chooseArticle(article)}}
        key={name}
        className= {`cursor-pointer relative mx-auto rounded-3xl sm:opacity-0
                    lg:opacity-90 lg:hover:opacity-100 p-4 bg-white/10 
                    lg:p-8
                    ${isHighlighted ? "shadow-blue-top" : "shadow-inset"}`}
    >
            <figcaption className='relative flex flex-row items-center gap-4 pb-6 border-b border-white/10'>
                <div className='overflow-hidden shrink-0'>
                    <img
                        src={thumbnail}
                        className='object-cover rounded-full h-20 w-20 shrink-0'
                    />
                </div>
                <div>
                    <div className='text-lg font-medium leading-6 text-white'>
                        {name}
                    </div>
                    <div className='mt-1'>
                    </div>
                </div>
            </figcaption>
            <figure>
                <div className='h-full group mt-2 pt-2'>
                    <blockquote className='relative'>
                    <span className='text-sm mb-5 flex items-center text-white group-hover:text-white'>
                          <img 
                          className="mr-3 h-12 w-12"
                          src = {logo}
                          alt = {''}
                          /> 
                          {provider}
                        </span>
                       <p className='text-base text-white'>
                            "{description}"
                        </p>
                    </blockquote>
                </div>
            </figure>
    </li>
    );
}




