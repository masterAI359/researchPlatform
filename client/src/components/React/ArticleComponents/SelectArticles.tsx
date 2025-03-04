import { AnimatePresence, motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { resetResults, resetArticles } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { displayArticleContent, displaySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { AppDispatch } from "@/ReduxToolKit/store"
import { GetArticleContent } from "@/ReduxToolKit/Reducers/Investigate/Reading"


interface SendForSummary {
  hideSelect: Function,
  showSelect: boolean,
}

export default function SelectArticles({ hideSelect }: SendForSummary) {
  const investigateState = useSelector((state: RootState) => state.investigation)

  const { getArticle } = investigateState
  const { chosenArticles } = getArticle
  const articlesToSummarize = encodeURIComponent(JSON.stringify(chosenArticles))
  const dispatch = useDispatch<AppDispatch>()

  const selectedTotal = chosenArticles.length
  const selectedArticles = `${selectedTotal}/3`

  const handleSummaries = () => {

    if (chosenArticles.length > 0) {
      dispatch(resetResults())
      dispatch(displaySearch(false))
      dispatch(GetArticleContent(articlesToSummarize))
      dispatch(displayArticleContent(true))
    } else {
      console.log("There's nothing to summarize yet")
    }

    hideSelect()

  }




  return (
    <AnimatePresence>
      <motion.div onClick={handleSummaries}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", bounce: 0.45, duration: 0.25 }}
        className="bg-black fixed bottom-0 right-0 left-0 border-t border-white/30
      text-white font-light tracking-tight flex gap-x-2 py-4 px-2 cursor-pointer
       mx-auto z-50 justify-center content-center group">
        <div className="h-full my-auto">
          <p className="text-sm 2xl:text-xl">Choose your articles to read <span className={`text-blue-400 font-bold tracking-tight 2xl:mx-2 ${selectedTotal === 3 ? 'animate-pulse' : null}`}>{selectedArticles}
          </span></p>
        </div>
        <div >
          <button

          >
            <div className="flex items-center bg-white rounded-full transition-all ease-in-out duration-200 text-black px-6 py-1.5 w-full h-auto
        group-hover:bg-white/10 group-hover:text-white
        top-2.5 text-lg"><div className="w-full">&rarr;</div> </div>

          </button>
        </div>
      </motion.div>

    </AnimatePresence>

  )
}

