import expandarrow from "*.svg"
import { useState } from "react"

export function Summary({ summaryData }) {
    const [fullStory, setFullStory] = useState<boolean>(true)

    const { summary, article_image, article_url, article_title, date, article_pub_date, article_authors, article_text, logo, source }: any = summaryData
    const summaryContent = summary[0]


    function handleArticleView  () {
        setFullStory(fullStory => !fullStory)
    }

     return (
        <li className="2xl:max-w-7xl min-h-fit 2xl:max-h-max  grid-cols-1 mx-auto gap-40 mb-40 padding-b-20 bg-ebony rounded-4xl">
          
            <header className="h-1/3 mb-24 pt-1 mx-20">
            <figcaption className="my-10 "> 
                    <h1 className="text-white text-xl" >
                        {article_title}
                    </h1>
                    </figcaption>
                <div className="w-full">
                    <img 
                    width = {500}
                    height = {400}
                    className="mb-4 rounded-lg"
                    src = {article_image}/>
                    <figcaption>
                        <span>
                            <p className="text-white text-xl" >Published: {date ? date : article_pub_date} </p>
                        </span>
                        <span>
                            <p className="text-white text-xl flex items-center" >
                                 <img
                                  className="mr-3 h-12 w-12"
                                  src = {logo}
                                  alt = {''}
                                 />
                                 
                                 {`${source}`} 
                                 
                                 </p>
                        </span>
                    </figcaption>
                </div>
            </header>
        <main className="display-block mx-20" >
            <div className="">
           <div className={` text-white text-lg leading-10 whitespace-pre-wrap pb-16 transition-all duration-300 ease-in-out ${fullStory ? 'opacity-0 hidden' : 'opacity-100'}`} >
                {summaryContent}
            </div> 
            <div className={`text-white text-lg leading-10 whitespace-pre-wrap pb-16 transition-all duration-1000 ease-in-out ${fullStory ? 'block opacity-100' : 'hidden'}`}>
            {article_text}
            </div>
            </div>
            <div>
                <button
                className="bg-ebony text-blue-200 text-md p-3.5 rounded-full border border-blue-500 mb-5 hover:text-blue-400"
                onClick={handleArticleView}
                >View {fullStory ? 'Summary' : 'full article'}
                </button>
            </div>
        </main>
        </li>
    );
}
