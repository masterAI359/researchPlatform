import { ArticleType } from "@/env"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { choose, discard, } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles"
import { motion } from "framer-motion"
import { memo } from "react"
import { limitDescription } from "@/helpers/Presentation"

const ArticleLink = memo(({ article, index }: LinkProps) => {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { getArticle, display } = investigateState
    const { showGetArticlesModal } = display
    const { chosenArticles } = getArticle
    const dispatch = useDispatch()

    const { url, name, provider, image, description, datePublished, logo } = article;
    const isHilighted = chosenArticles.some(item => item.url === article.url)

    const forSummaryData = {
        url: article.url,
        source: article.provider,
        date: article.datePublished,
        logo: article.logo,
        title: article.name,
        image: image
    }


    const mobileDescription = limitDescription(description)
    const fallbackImage = '/images/logos/fallback.jpg'
    const resizedImage = article.image.img ? article.image.img + '&w=300&p=0&c=7' : fallbackImage

    const chooseArticle = (article: ArticleType) => {

        const exists = chosenArticles.some(((chosen: ArticleType) => chosen.url === article.url));

        if (!exists && chosenArticles.length <= 2) {
            dispatch(choose(forSummaryData));

        } else if (exists) {
            const locatedAt = chosenArticles.findIndex((chosen => chosen.url === article.url))
            dispatch(discard(locatedAt))
        }
    };

    return (
        <motion.li

            onClick={() => { chooseArticle(article) }}
            key={article.url}
            className={`group cursor-pointer box-border list-none xl:min-h-72 xl:max-h-72 xl:min-w-80 xl:max-w-80
                 lg:w-72 lg:h-72 md:h-60 md:w-60 h-44 w-40
                  relative rounded-xl md:rounded-3xl text-white 
            md:opacity-85 md:hover:opacity-100 transition-all ease-in-out duration-200 overflow-y-hidden overflow-x-hidden
            
            ${isHilighted && !showGetArticlesModal ? "shadow-blue-bottom bg-ebony" : "shadow-material bg-mirage"}`}
        >

            <div className='relative w-full m-0 p-0 xl:max-h-36 xl:min-h-36 md:max-h-28 md:min-h-28 min-h-20 max-h-20  overflow-hidden'>
                <div
                    style={{ backgroundImage: `url(${resizedImage})` }}
                    className='absolute inset-0 w-full h-full bg-cover bg-center opacity-40 rounded-t-xl md:rounded-t-3xl'
                ></div>
                <div className='relative z-10 p-4'>

                    <div className="flex flex-col lg:gap-y-6">
                        <h1 className='xl:text-lg lg:text-base md:text-sm text-xs leading-6 text-white font-light tracking-tight font-serif'>
                            {name}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="relative w-full mx-auto h-auto box-border pt-2">
                <div className="flex gap-4 items-center relative px-4">
                    <div>
                        <img
                            className="lg:h-8 lg:w-8 xs:h-6 xs:w-6"
                            src={logo}
                            alt=""
                        />
                    </div>

                    <div className='h-full text-xs text-left lg:text-sm xl:text-base font-serif text-white'>
                        {provider}
                    </div>
                </div>
                <div className={`h-full group mt-2 lg:mt-6 xl:mt-4 pt-2 ${isHilighted ? 'opacity-100' : ''}`}>
                    <blockquote className='relative px-4'>
                        <p className='lg:text-sm xs:text-xs text-left transition-colors duration-100 font-serif font-light'>
                            {mobileDescription}
                        </p>
                    </blockquote>
                </div>
            </div>
        </motion.li>
    );
});


export default ArticleLink;