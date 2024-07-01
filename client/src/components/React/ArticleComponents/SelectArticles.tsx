
import { useState } from "react"
import SelectLoader from "../Loaders/SelectLoader"

const show = "w-full mx-auto flex justify-center items-center"

const hide = "hidden"

export default function SelectArticles ({ readyToSelect, selectedForSummary }) {
    const [loadSummaries, setLoadSummaries] = useState<boolean>(false)
    
    const selectedTotal = selectedForSummary.length

    const selectedArticles = `Summarize Articles ${selectedTotal}/3`
    const waiting = "Loading Stories..."

    return (
    <div className= {`transition-all duration-600 ${readyToSelect ? show : hide }`}>
         <div className="bg-rich_black border border-blue-500 text-blue-100 lg:w-72 w-64 flex 
         p-3 rounded-full cursor-pointer mx-auto z-50 fixed bottom-5">
    <span>
        <p>{loadSummaries? waiting : selectedArticles }</p>
    </span>
    <span >
      <button 
      onClick={() => {setLoadSummaries(loadSummaries => !loadSummaries)}}
      >
        {loadSummaries ? <SelectLoader/>
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

