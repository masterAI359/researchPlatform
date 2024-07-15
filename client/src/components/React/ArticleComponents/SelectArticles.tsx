import { useState } from "react"
import SelectLoader from "../Loaders/SelectLoader"

export default function SelectArticles ({ readyToSelect, selectedForSummary, setSubmittedForSummaries, loadingSummaries }) {
    const selectedTotal = selectedForSummary.length
    const selectedArticles = `Summarize Articles ${selectedTotal}/3`
    const waiting = "Loading Stories..."

    return (         
      <div className={`transition-all duration-1000 transform ${readyToSelect ? `translate-y-0` : `translate-y-32`} fixed bottom-5 w-full mx-auto flex justify-center items-center`}>
         <div className="bg-rich_black border shadow-black border-blue-500 text-blue-100 lg:w-72 w-64 flex 
         p-3 rounded-full cursor-pointer mx-auto z-50 fixed bottom-5">
    <span>
        <p>{loadingSummaries? waiting : selectedArticles }</p>
    </span>
    <span >
      <button 
      onClick={() => {setSubmittedForSummaries(true)}}
      >
        {loadingSummaries ? <SelectLoader/>
         : <div className="rounded-full bg-white text-rich_black w-7 h-7 absolute 
        hover:bg-blue-300 hover:text-rich_black
        top-2.5 right-2.5 text-lg"> &rarr;</div> 
         }
      </button>
    </span>
    </div>   
    </div>
 )
}

