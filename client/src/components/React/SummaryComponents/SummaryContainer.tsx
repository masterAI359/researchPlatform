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

export default function SummaryContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { read } = investigateState
  const { summaries, failedNotifications, currentStory, reading, ContentStatus } = read
  const id = useSelector((state: RootState) => state.auth.user_id)
  const appDispatch = useAppdispatch()
  const dispatch = useDispatch()

  useEffect(() => {

    console.log(ContentStatus)
    console.log(summaries)
    console.log(failedNotifications)

    if (reading) {
      dispatch(supabaseContext('reading'))
    }

    const channel = supabase.channel('table-changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'articles' }, payload => {
        console.log('New row inserted:', payload);
        appDispatch(fetchSavedArticles(id))
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel)
    }

  }, [reading])



  return (
    <ErrorBoundary>
      <div
        className="min-h-full 2xl:max-w-7xl xl:max-w-5xl xs:px-2 md:px-8 scroll-smooth
      inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-0"
      >

        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12 
                 ">


          <div
            className="w-full mx-auto relative">
            <AnimatePresence mode="popLayout">
              {ContentStatus === 'pending' && <SummaryLoader />}
              {ContentStatus === 'fulfilled' && summaries?.map((articleData: any, index: number) =>
              (currentStory === index && <Summary
                key={index}
                index={index}
                articleData={articleData}
              />)
              )}
            </AnimatePresence>
          </div>
        </main>
        {ContentStatus === 'fulfilled' && <FailedSummary />}
      </div>
    </ErrorBoundary>



  )
}
