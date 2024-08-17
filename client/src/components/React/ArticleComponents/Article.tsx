import { Articles } from "@/env";

 export default function Article ({ article, selectedForSummary, setSelectedForSummary }) {
    const { url, name, provider, image, description, datePublished, logo } = article;
    const thumbnail = image.img
    const articleURL = article.url
    const hasArticle = (element: any) => element.url === articleURL

    const forSummaryData = {
        url: article.url,
        source: article.provider,
        date: article.datePublished,
        logo: article.logo
    }
    
    const highlighted = selectedForSummary.some(hasArticle)
    

    const chooseArticle = (article:Articles) => {
        const exists:boolean = highlighted
        let newArray:string[]
        setSelectedForSummary((selectedForSummary: any) => {
            if(selectedForSummary.length <= 2 && !exists) { 
                newArray = [...selectedForSummary, forSummaryData]
            } else if(exists) {
                newArray = selectedForSummary.filter((selectedArticle: any) => selectedArticle.url !== articleURL)
            }
            return newArray
        })
    }

    return (
        <li
        onClick = {() => {chooseArticle(article)}}
        key={name}
        className= {`group cursor-pointer min-h-96 relative mx-auto rounded-3xl sm:opacity-0 text-white 
                    lg:opacity-90 lg:hover:opacity-100 p-4 bg-ebony
                    lg:p-8
                    ${highlighted ? "border-2 border-blue-400" : "shadow"}`}
    >
            <figcaption className='relative flex flex-row items-center gap-4 pb-6 border-b border-white/10'>
                <div className='overflow-hidden shrink-0'>
                    <img
                        src={thumbnail}
                        className='object-cover rounded-full h-20 w-20 shrink-0'
                    />
                </div>
                <div>
                    <div className='text-lg font-medium leading-6 text-blue-300'>
                        {name}
                    </div>
                    <div className='mt-1'>
                    </div>
                </div>
            </figcaption>
            <figure className="hover:">
                <div className={`h-full group mt-2 pt-2 group-hover:text-blue-300 transition-colors duration-200 ${highlighted ? 'text-blue-300' : ''}`}>
                    <blockquote className='relative'>
                    <span className={`text-sm mb-5 flex items-center ${highlighted ? 'text-blue-300' : ''}`}>
                          <img 
                          className="mr-3 h-12 w-12"
                          src = {logo}
                          alt = {''}
                          /> 
                          {provider}
                        </span>
                       <p className='text-base transition-colors duration-200'>
                            "{description}"
                        </p>
                    </blockquote>
                </div>
            </figure>
    </li>
    );
}




