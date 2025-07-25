import { RootState } from "@/ReduxToolKit/store"
import { useDispatch, useSelector } from "react-redux"
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage"
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"

export function SourcesFromResearch() {
  const sources = useSelector((state: RootState) => state.userWork.sourcesToReview);
  const errorMessage = "No sources were saved during this inquiry"


  return (
    <ol role="list" className="grid gap-12 mt-24 max-w-5xl mx-auto lg:px-16 xl:px-0 md:px-12 px-8">
      <span className="text-blue-400">Sources used</span>
      {
        sources && sources.map((source) => (
          <ArticleFromResearch
            source={source}
          />
        ))
      }
      {sources && sources.length < 1 && <ErrMessage message={errorMessage} />}
    </ol>
  )
}


function ArticleFromResearch({ source }) {
  const dispatch = useDispatch();

  const handleArticleSelection = () => {
    dispatch(readSavedArticle(source));
    dispatch(presentThisArticle());
  }


  return (


    <li key={source.id} className="cursor-pointer">
      <a
        className="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-2 items-center"
        href={source.url}
        title={source.title}>
        <div className="group" onClick={handleArticleSelection}>
          <h3

            className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white/80 md:group-hover:text-white transition-all duration-200 ease-in-out">
            {source.title}
          </h3>
          <p className="text-zinc-400 text-xs mt-6">
            {source.authors ? source.authors[0] : 'Authors not available'} - <span> <time className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200" dateTime={source.pubDate}>{source.date_published}</time></span>
          </p>
          <p className="text-zinc-400 text-xs mt-6">
            Published by - <span className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200">{source.provider} </span>
          </p>
        </div>
        <img
          className="aspect-[16/9] w-4/5 rounded-3xl bg-zinc-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          width="560"
          height="380"
          src={source.image_url}
        />
      </a>
    </li>
  )
}