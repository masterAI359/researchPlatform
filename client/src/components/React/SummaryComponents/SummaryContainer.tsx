import { AnimatePresence, motion } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { supabase } from "@/SupaBase/supaBaseClient"
import { supabaseContext } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useDispatch } from "react-redux"
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useAppdispatch } from "@/Hooks/appDispatch"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import SummaryLoader from "../Loaders/SummaryLoader"
import Summary from "./SuccessFull/Summary"
import NoContent from "./Failed/NoContent"
import { clearChosenArticles } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles"
import { resetData } from "@/ReduxToolKit/Reducers/Investigate/Reading"

export default function SummaryContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { read } = investigateState
  const { displayArticleContent } = investigateState.display
  const { summaries, failedNotifications, currentStory, reading, ContentStatus } = read
  const id = useSelector((state: RootState) => state.auth.user_id)
  const appDispatch = useAppdispatch()
  const dispatch = useDispatch()

  useEffect(() => {

    return () => {

      dispatch(resetData())
    }
  }, [displayArticleContent])

  return (
    <ErrorBoundary>
      <div
        className="min-h-full 2xl:max-w-7xl xl:max-w-5xl xs:px-2 md:px-8 scroll-smooth
      inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-0 relative"
      >

        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col
                 ">


          <div
            className="w-full h-full mx-auto relative grow shrink-0">
            {ContentStatus === 'pending' && <SummaryLoader />}
            <AnimatePresence mode="wait">
              {ContentStatus === 'fulfilled' && summaries.length > 0 ? summaries?.map((articleData: any, index: number) =>
              (currentStory === index && <Summary
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
