import { AnimatePresence, motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { resetResults } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
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
  const selectedArticles = `Summarize Articles ${selectedTotal}/3`

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
      <motion.div
        className="w-full h-fit relative">
        <motion.div onClick={handleSummaries}
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 140 }}
          transition={{ type: "spring", bounce: 0.45, duration: 0.25 }}
          className="bg-black fixed xl:left-60 xl:bottom-12 xs:bottom-0 xs:w-52 border border-gray_border shadow-black 
      text-white font-light tracking-tight lg:w-fit flex gap-x-2 py-2 px-2 rounded-full cursor-pointer
       mx-auto z-50 justify-between content-center group">
          <div className="h-full my-auto">
            <p className="text-sm">{selectedArticles}</p>
          </div>
          <div >
            <button

            >
              <div className="flex items-center rounded-full bg-transparent transition-all ease-in-out duration-200 text-white w-12 h-8
        group-hover:bg-white group-hover:text-rich_black
        top-2.5 right-2.5 text-lg"><div className="w-full">&rarr;</div> </div>

            </button>
          </div>
        </motion.div>
      </motion.div>

    </AnimatePresence>

  )
}

