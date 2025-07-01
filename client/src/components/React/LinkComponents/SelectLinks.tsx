import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { displayGetArticlesModal, displaySelectionWarning, displaySelectTooltip } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { AppDispatch } from "@/ReduxToolKit/store"
import SelectionRequired from "../Notifications/SelectionRequired"
import { useEffect, useState } from "react"
import GuideSelectingArticles from "../Tooltips/GuideSelectingArticles"
import { useTooltipFlags } from "@/Hooks/useTooltipFlags"


export default function SelectLinks() {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { showSelectTooltip } = investigateState.display
  const { getArticle } = investigateState
  const { showSelectWarning, showGetArticlesModal } = investigateState.display
  const { chosenArticles } = getArticle
  const { getFlags, setFlag } = useTooltipFlags();
  const dispatch = useDispatch<AppDispatch>()

  const selectedTotal = chosenArticles.length
  const selectedArticles = `${selectedTotal}/3`


  const handleSummaries = () => {

    if (chosenArticles.length > 0) {
      dispatch(displayGetArticlesModal(true))
    } else {
      dispatch(displaySelectionWarning(true))
    }
  };


  useEffect(() => {

    const flags = getFlags();

    if (flags.selectingTooltip === false) {
      dispatch(displaySelectTooltip(true));
      setFlag('selectingTooltip', true);
    };

  }, [getFlags, setFlag, dispatch]);


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", bounce: 0.45, duration: 0.25 }}
      className={`${showGetArticlesModal ? 'pointer-events-none' : 'pointer-events-auto'} bg-black fixed bottom-0 right-0 left-0 border-t border-white/30
      text-white font-light tracking-tight flex gap-x-8 2xl:gap-x-16 py-4 px-4 md:px-16 cursor-pointer
       mx-auto z-40 justify-center 2xl:justify-end content-center`}>
      {showSelectWarning && <SelectionRequired />}
      {showSelectTooltip && !showSelectWarning && <GuideSelectingArticles />}
      <div className="h-full my-auto">
        <p className="text-xs 2xl:text-xl">Choose articles <span className={`text-blue-400 font-bold tracking-tight 2xl:mx-2 ${selectedTotal === 3 ? 'animate-pulse' : null}`}>{selectedArticles}
        </span></p>
      </div>
      <div >
        <button
          className="group"
        >
          <div
            onClick={handleSummaries}
            className="flex items-center justify-center border border-white/20 bg-black flex-nowrap rounded-3xl transition-all ease-in-out duration-200 text-black px-5 py-2 w-full h-auto
        group-hover:bg-white group-hover:text-white
        top-2.5 text-base"><div className="w-full">
              <p className="text-white text-xs md:text-lg group-hover:text-black text-nowrap transition-all duration-200 ease-in-out">
                Retrieve these articles &rarr;
              </p>

            </div> </div>

        </button>
      </div>
    </motion.div>
  )
}

