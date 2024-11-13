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
    <div className="w-fit h-auto flex justify-center items-center">
      <div className="bg-black border border-blue-500 shadow-black text-white font-light tracking-tight lg:w-72 w-64 flex 
         p-3 rounded-full cursor-pointer mx-auto z-50 justify-between group group-hover:bg-white transition-all duration-200 ease-in-out">
        <span className="h-full my-auto">
          <p className="text-lg">{loadingSummaries ? waiting : selectedArticles}</p>
        </span>
        <span >
          <button
            onClick={handleSummaries}
          >
            {loadingSummaries ? <SelectLoader />
              : <div className="flex items-center rounded-full bg-white/10 transition-all ease-in-out duration-200 text-rich_black w-16 h-10
        hover:bg-white hover:text-rich_black
        top-2.5 right-2.5 text-lg"><div className="w-full">&rarr;</div> </div>
            }
          </button>
        </span>
      </div>
    </div>
  )
}

