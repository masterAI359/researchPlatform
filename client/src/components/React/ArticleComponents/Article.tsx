import { Articles, SelectedArticles } from "@/env"

interface ArticleProps {
    article: Articles,
    selectedForSummary: SelectedArticles[],
    setSelectedForSummary: Function
}

export default function Article({ article, selectedForSummary, setSelectedForSummary }: ArticleProps) {
    const { url, name, provider, image, description, datePublished, logo } = article;
    const thumbnail = image.img
    const isHilighted = selectedForSummary.some(item => item.url === article.url)

    const forSummaryData = {
        url: article.url,
        source: article.provider,
        date: article.datePublished,
        logo: article.logo,
        title: article.name
    }

    const limitDescription = (string: string) => {

        if (string.length >= 111) {
            let newArr = string.split('')

            let count = 0

            let stringArr = []

            for (let i = 0; i < newArr.length; i++) {

                count++
                stringArr.push(newArr[i])

                if (count >= 110) {
                    break
                }
            }

            const newString = stringArr.join('')

            const presentation = newString + '...'

            return presentation
        } else {

        }
    }

    const mobileDescription = limitDescription(description)


    const fallbackImage = '/images/logos/fallback.jpg'
    const resizedImage = thumbnail ? thumbnail + '&w=300&p=0&c=7' : fallbackImage


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
            className={`group cursor-pointer lg:min-h-96 lg:max-h-96 lg:min-w-96 xs:max-h-60 xs:min-h-60 xs:max-w-60 pb-6 relative mx-auto rounded-3xl text-white 
            lg:opacity-90 md:hover:opacity-100 bg-ebony md:hover:scale-110 transition-all ease-in-out duration-300 overflow-y-hidden
            
            ${isHilighted ? "border-2 border-blue-500 shadow-black" : "shadow"}`}
        >
            <figcaption className='relative w-full lg:max-h-40 lg:min-h-40 xs:min-h-24 xs:max-h-24  overflow-hidden'>
                <div
                    style={{ backgroundImage: `url(${resizedImage})` }}
                    className='absolute inset-0 w-full h-full bg-cover bg-center opacity-60 rounded-t-3xl'
                ></div>
                <div className='relative z-10 p-4'>

                    <div className="flex flex-col lg:gap-y-6">
                        <h1 className='lg:text-lg xs:text-xs leading-6 text-white font-light tracking-tight font-serif'>
                            {name}
                        </h1>
                    </div>
                </div>
            </figcaption>
            <figure className="relative w-full mx-auto h-auto box-border pt-2">
                <div className="flex gap-3 items-center relative bottom-0 left-0 px-4">
                    <img
                        className="mr-3 lg:h-8 lg:w-8 xs:h-6 xs:w-6"
                        src={logo}
                        alt=""
                    />
                    <span className='text-sm xs:text-xs lg:text-lg font-serif text-white mb-4'>
                        {provider}
                    </span>
                </div>
                <div className={`h-full group mt-2 pt-2 ${isHilighted ? 'opacity-100' : ''}`}>
                    <blockquote className='relative px-4'>
                        <p className='lg:text-base xs:text-xs transition-colors duration-100 font-serif font-light xs:hidden md:block'>
                            {description}
                        </p>
                        <p className='lg:text-base xs:text-xs transition-colors duration-100 font-serif font-light xs:block md:hidden'>
                            {mobileDescription}
                        </p>
                    </blockquote>
                </div>
            </figure>
        </li>
    );
}



