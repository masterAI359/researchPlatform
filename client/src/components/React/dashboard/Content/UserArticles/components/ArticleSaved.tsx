import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"
import Title from "./Title"
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage"

export default function ArticleSaved({ article }) {
  const dispatch = useDispatch()

  const handleArticleSelection = (): void => {
    dispatch(readSavedArticle(article));
    dispatch(presentThisArticle())
  };


  return (
    <div key={article.article_url} className="cursor-pointer relative h-96 sm:h-52 sm:p-6 md:p-0 md:h-60 xl:h-88 my-16 w-full max-w-full">
      <ErrorBoundary fallback={<ErrMessage message="failed to load article :/" />}>
        <a
          className={`
            flex flex-col-reverse justify-center
            sm:grid gap-6 lg:gap-24
            sm:grid-cols-2 items-center relative
            transition-opacity duration-200 ease-in-out
            md:justify-items-end justify-items-center
            
             `}
          href="#"
          title={article.title}>

          <Title article={article} handleArticleSelection={handleArticleSelection} />
          <img
            className={`
             w-full sm:w-5/6 lg:w-4/5 xl:w-4/5 rounded-3xl bg-zinc-100 
            object-cover aspect-[3/2] 
            `}
            src={article.image_url}
          />

        </a>


      </ErrorBoundary>


    </div>
  )
};

