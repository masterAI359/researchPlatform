import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"
import { useState } from "react"
import Title from "./Title"
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage"
import ArticleSkeleton from "./skeletons/SavedArticleSkeleton"

export default function ArticleSaved({ article }) {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleArticleSelection = (): void => {
    dispatch(readSavedArticle(article));
    setTimeout(() => { dispatch(presentThisArticle()) }, 150);
  };


  return (
    <li key={article.article_url} className="cursor-pointer relative h-auto w-full max-w-full">
      <ErrorBoundary fallback={<ErrMessage message="failed to load article :/" />}>
        <a
          className={`
            grid grid-cols-1 gap-12 lg:gap-24
            md:grid-cols-2 items-center relative
            transition-opacity duration-200 ease-in-out
            md:justify-items-start justify-items-center
            ${loaded ? 'opacity-100' : 'opacity-0'}
             `}
          href="#"
          title={article.title}>

          <Title article={article} handleArticleSelection={handleArticleSelection} loaded={loaded} />
          <img
            onLoad={() => setLoaded(true)}
            className={`
             w-full sm:w-5/6 lg:w-4/5 xl:w-4/5 rounded-3xl bg-zinc-100 
            object-cover aspect-[3/2] 
            `}
            src={article.image_url}
          />

        </a>
        {loaded === false && <ArticleSkeleton />}

      </ErrorBoundary>


    </li>
  )
};

