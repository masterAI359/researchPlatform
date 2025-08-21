import { ArticleType } from "@/env"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { choose, discard, } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles"
import { memo } from "react"
import LinkThumbnail from "./links/LinkThumbnail"
import LinkTitle from "./links/LinkTitle"
import LinkDescription from "./links/LinkDescription"

const ArticleLink = memo(({ article, index }: LinkProps) => {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { getArticle, display } = investigateState
    const { showGetArticlesModal } = display
    const { chosenArticles } = getArticle
    const dispatch = useDispatch()
    const isPriority: boolean = index >= 8;
    const { name, provider, image, description, logo } = article;
    const isHilighted = chosenArticles.some(item => item.url === article.url)
    const fallbackImage = '/images/logos/fallback.jpg';
    const thumbnail = article.image.img ?? fallbackImage;
    const mute: boolean = chosenArticles.length === 3;

    const dataForServer = {
        url: article.url,
        source: article.provider,
        date: article.datePublished,
        logo: article.logo,
        title: article.name,
        image: image
    };


    const chooseArticle = (article: ArticleType) => {

        const exists = chosenArticles.some(((chosen: ArticleType) => chosen.url === article.url));

        if (!exists && chosenArticles.length <= 2) {
            dispatch(choose(dataForServer));

        } else if (exists) {
            const locatedAt = chosenArticles.findIndex((chosen => chosen.url === article.url))
            dispatch(discard(locatedAt))
        }
    };

    return (
        <li

            onClick={() => { chooseArticle(article) }}
            key={article.url}
            className={`group cursor-pointer box-border list-none 
            xl:min-h-72 xl:max-h-72 xl:min-w-80 xl:max-w-80
            lg:w-72 lg:h-72 md:h-60 md:w-60 sm:w-52 sm:h-52 h-44 w-40
            relative rounded-xl md:rounded-3xl text-white 
            ${mute && !isHilighted ? 'opacity-30' : 'md:opacity-85 md:hover:opacity-100'}
             transition-all ease-in-out 
            duration-200 overflow-y-hidden overflow-x-hidden
            
            ${isHilighted && !showGetArticlesModal ? "shadow-blue-bottom bg-ebony" : "shadow-material bg-gradient-to-tr from-ebony to-mirage"}`}
        >

            <div className='relative w-full m-0 p-0 xl:max-h-36 xl:min-h-36 md:max-h-28 md:min-h-28 min-h-20 max-h-20  overflow-hidden'>
                <LinkThumbnail
                    isPriority={isPriority}
                    thumbnail={thumbnail}
                />
                <LinkTitle
                    name={name}
                />
            </div>
            <LinkDescription
                isPriority={isPriority}
                isHilighted={isHilighted}
                logo={logo}
                provider={provider}
                description={description}
            />
        </li>
    );
});

export default ArticleLink;