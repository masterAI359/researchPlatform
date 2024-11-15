import { useEffect, useState } from "react"
import SelectLoader from "../Loaders/SelectLoader"
import { SelectedArticles } from "@/env"
import { motion } from "framer-motion"

interface SendForSummary {
  selectedForSummary: SelectedArticles[],
  submittedForSummaries: boolean,
  setSubmittedForSummaries: Function,
  loadingSummaries: boolean,
  hideSelect: Function,
}

export default function SelectArticles({ hideSelect, selectedForSummary, submittedForSummaries, setSubmittedForSummaries, loadingSummaries }: SendForSummary) {
  const selectedTotal = selectedForSummary.length
  const selectedArticles = `Summarize Articles ${selectedTotal}/3`
  const waiting = "Loading Stories..."

  const handleSummaries = () => {

    if (selectedForSummary.length > 0) {
      setSubmittedForSummaries(!submittedForSummaries)
    } else {
      console.log("There's nothing to summarize yet")
    }

    hideSelect()

  }

  return (
    <motion.div onClick={handleSummaries} whileHover={{ scale: 1.1 }} transition={{ type: 'tween', duration: 0.1 }} className="bg-black fixed xl:right-52 xl:top-96 border border-blue-500 shadow-black text-white font-light tracking-tight lg:w-72 w-64 flex 
         p-3 rounded-full cursor-pointer mx-auto z-50 justify-between content-center group group-hover:bg-white transition-all duration-200 ease-in-out">
      <div className="h-full my-auto">
        <p className="text-lg">{loadingSummaries ? waiting : selectedArticles}</p>
      </div>
      <div >
        <button

        >
          {loadingSummaries ? <SelectLoader />
            : <div className="flex items-center rounded-full bg-rich_black transition-all ease-in-out duration-200 text-white w-16 h-10
        group-hover:bg-white group-hover:text-rich_black
        top-2.5 right-2.5 text-lg"><div className="w-full">&rarr;</div> </div>
          }
        </button>
      </div>
    </motion.div>
  )
}

