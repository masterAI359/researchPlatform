import { AnimatePresence } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { recordSources } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import NoContent from "./Failed/NoContent"
import Article from "./SuccessFull/Article"
import ArticleLoader from "../Loaders/ArticleLoader"
import StoryPaginate from "../Buttons/Pagination/StoryPaginate"

export default function ArticleContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { read } = investigateState
  const { displayArticleContent, showContent } = investigateState.display
  const { summaries, failedNotifications, currentStory, ContentStatus } = read
  const dispatch = useDispatch()


  useEffect(() => {

    if (summaries || failedNotifications) {

      const scrapedURLs = summaries?.map((item: any) => {
        return item.article_url
      })

      const failedURLs = failedNotifications?.map((item: any) => {
        return item.article_url
      })

      let urls = scrapedURLs.concat(failedURLs)

      if (urls) {
        dispatch(recordSources(urls))
      }
    }

  }, [displayArticleContent, summaries, failedNotifications])

  return (
    <ErrorBoundary>
      <div
        className="min-h-full 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl md:max-w-3xl xs:px-2 md:px-8 scroll-smooth
      inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-0 relative"
      >
        <div className="hidden lg:block w-full flex flex-row-reverse p-0">
          {ContentStatus === 'fulfilled' && showContent ? <StoryPaginate /> : null}
        </div>

        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col
                 ">


          <div
            className="w-full h-full mx-auto relative grow shrink-0">

            <AnimatePresence>
              {ContentStatus === 'pending' && <ArticleLoader key='contentLoader' />}
              {ContentStatus === 'fulfilled' && summaries.length > 0 ? summaries?.map((articleData: any, index: number) =>
              (currentStory === index && <Article
                key={index}
                index={index}
                articleData={articleData}
              />)
              ) : <NoContent key='noResults' />}
            </AnimatePresence>

          </div>
        </main>
        {ContentStatus === 'fulfilled' && <FailedSummary />}
      </div>
    </ErrorBoundary>



  )
}
