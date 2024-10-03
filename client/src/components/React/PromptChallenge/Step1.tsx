import { useState, useEffect } from "react"
import Perspective from "./Perspective"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default function Step1 ({ dispatch, status, origin, setOrigin, containerWidth }: any) {
    const [isExpressed, setIsExpressed] = useState('')
    

    const handleStatement = (e: React.ChangeEvent<HTMLTextAreaElement>) => {setIsExpressed(e.target.value)}

return (
<div className="inline-block h-full box-border w-full self-baseline">

<div className="flex-col w-full">
  <div className="bg-black w-full md:mb-3 rounded-lg">
        <p className="md:text-lg text-white p-3">Have you come across a post on social media, a statement made by somebody else, or otherwise a public perception that invoked some sort of skepticism in you?</p>
  </div>
  <div className="flex flex-row w-full sm:mt-3 relative">
  <div className="h-full mx-auto top-0 bottom-0 right-0 left-0">
    <Perspective 
     setOrigin = {setOrigin}
     origin = {origin}/>
  </div>
  <div className="text-center z-10 w-2/3 grow pl-3">
        <textarea 
        value={isExpressed}
        onChange={handleStatement}
        id="take" 
        className="p-2.5 w-full md:h-52 text-md text-gray-900 bg-black 
        rounded-lg border-none focus:ring-white resize-none text-wrap
        focus:border-white dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-white/80 dark:focus:border-white" 
        placeholder="Write it down here, let's examine it"/>
  </div>
</div>

      </div>
    </div>
    )
}

//${interactive ? 'pointer-events-auto opacity-100' : 'pointer-events-none'  }




//<div className="flex basis-1/6 pt-16 pb-10 justify-end sticky">
//<button 
//type = "submit" 
//className="text-white min-w-20 min-h-12 p-2 transition-all 
//duration-200 bg-black/50 hover:bg-black flex items-center group
//rounded-2xl" 
//onClick={() => dispatch({ type: "assertion",
//payload:{userInput: isExpressed, origin: origin }})}>
//  <span className="mx-auto">
//    <svg 
//    className="text-white group-hover:text-white" 
//    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" 
//    width="20px" height="20px">
//      <path 
//      d="M 34.484375 11.984375 A 1.50015 1.50015 0 0 0 33.439453
//      14.560547 L 40.878906 22 L 3.5 22 A 1.50015 1.50015 0 1 0 
//      3.5 25 L 40.878906 25 L 33.439453 32.439453 A 1.50015 1.50015 
//      0 1 0 35.560547 34.560547 L 45.560547 24.560547 A 1.50015 
//      1.50015 0 0 0 45.560547 22.439453 L 35.560547 12.439453 A 
//      1.50015 1.50015 0 0 0 34.484375 11.984375 z" 
//      fill="currentColor" />
//    </svg>
//  </span>
//</button>
//</div>