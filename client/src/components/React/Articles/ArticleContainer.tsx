import { AnimatePresence, motion } from "framer-motion"
import FailedLoading from "./Failed/FailedLoading"
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
        className="min-h-screen h-full 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl md:max-w-3xl xs:px-2 md:px-8 scroll-smooth
      inset mx-auto border-white/10 xs:mt-10 xl:mt-0 relative"
      >
        <div className="hidden lg:block w-full flex flex-row-reverse p-0">
          <ErrorBoundary>
            {ContentStatus === 'fulfilled' && showContent && summaries !== null ? <StoryPaginate /> : null}

          </ErrorBoundary>
        </div>

        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col
                 ">

          <AnimatePresence>
            <motion.div
              className="w-full min-h-screen mx-auto relative grow shrink-0">

              {ContentStatus === 'pending' && <ArticleLoader key='contentLoader' />}
              {summaries && summaries.length > 0 ? summaries?.map((articleData: any, index: number) =>
              (currentStory === index && <Article
                key={index}
                index={index}
                articleData={articleData}
              />)
              ) : <NoContent key='noResults' />}

            </motion.div>
          </AnimatePresence>

        </main>
        {ContentStatus === 'fulfilled' && <FailedLoading />}
      </div>
    </ErrorBoundary>



  )
}
