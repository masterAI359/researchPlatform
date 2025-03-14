import { AnimatePresence } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { recordSources } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import SummaryLoader from "../Loaders/ArticleLoader"
import NoContent from "./Failed/NoContent"
import Article from "./SuccessFull/Article"
import ArticleLink from "../LinkComponents/ArticleLink"
import ArticleLoader from "../Loaders/ArticleLoader"

export default function ArticleContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const resources = useSelector((state: RootState) => state.saveResearch.sources)
  const { read } = investigateState
  const { displayArticleContent } = investigateState.display
  const { summaries, failedNotifications, currentStory, reading, ContentStatus } = read
  const id = useSelector((state: RootState) => state.auth.user_id)
  const appDispatch = useAppdispatch()
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

      console.log(urls)
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

        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col
                 ">


          <div
            className="w-full h-full mx-auto relative grow shrink-0">

            <AnimatePresence mode="wait">
              {ContentStatus === 'pending' && <ArticleLoader key='contentLoader' />}
              {ContentStatus === 'fulfilled' && summaries.length > 0 ? summaries?.map((articleData: any, index: number) =>
              (currentStory === index && <Article
                key={index}
                index={index}
                articleData={articleData}
              />)
              ) : <NoContent />}
            </AnimatePresence>

          </div>
        </main>
        {ContentStatus === 'fulfilled' && <FailedSummary />}
      </div>
    </ErrorBoundary>



  )
}
