import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"
import { useState } from "react"
import TitleSkeleton from "@/components/React/Loaders/TitleSkeleton"
import ImageSkeleton from "./ImageSkeleton"
import Title from "./Title"
import ErrorBoundary from "@/components/React/ErrorBoundaries/ErrorBoundary"
import ErrMessage from "@/components/React/ErrorMessages/ErrMessage"

export default function ArticleSaved({ article }) {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleArticleSelection = (): void => {
    dispatch(readSavedArticle(article));
    setTimeout(() => { dispatch(presentThisArticle()) }, 150);
  };

  //TODO: absolutely position skeleton, relatively position (with opacity-0 when loaded is false) content

  return (
    <li key={article.article_url} className="cursor-pointer">
      <ErrorBoundary fallback={<ErrMessage message="failed to load article :/" />}>
        <a
          className="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-2 items-center relative"
          href="#"
          title={article.title}>
          {loaded === false
            ? <TitleSkeleton />
            :
            <Title article={article} handleArticleSelection={handleArticleSelection} loaded={loaded} />
          }

          <img
            onLoad={() => setLoaded(true)}
            className={`aspect-[16/9] w-4/5 rounded-3xl bg-zinc-100 
            object-cover sm:aspect-[2/1] lg:aspect-[3/2] 
            transition-opacity duration-200 ease-in-out
            ${loaded ? 'opacity-100' : 'opacity-0'}`}
            width="560"
            height="380"
            src={article.image_url}
          />
          {loaded === false && <ImageSkeleton />}
        </a>

      </ErrorBoundary>


    </li>
  )
};