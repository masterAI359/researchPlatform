import { useEffect, useState } from "react"
import SelectLoader from "../Loaders/SelectLoader"
import { SelectedArticles } from "@/env"


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
    <div className="w-full h-auto mx-auto flex justify-center items-center">
      <div className="bg-rich_black border shadow-black border-blue-500 text-blue-100 lg:w-72 w-64 flex 
         p-3 rounded-full cursor-pointer mx-auto z-50 justify-between">
        <span>
          <p>{loadingSummaries ? waiting : selectedArticles}</p>
        </span>
        <span >
          <button
            onClick={handleSummaries}
          >
            {loadingSummaries ? <SelectLoader />
              : <div className="rounded-full bg-white text-rich_black w-7 h-7
        hover:bg-blue-300 hover:text-rich_black
        top-2.5 right-2.5 text-lg"> &rarr;</div>
            }
          </button>
        </span>
      </div>
    </div>
  )
}

