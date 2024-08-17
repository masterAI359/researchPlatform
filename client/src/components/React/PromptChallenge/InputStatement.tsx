import { useState, useEffect } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default function InputStatement ({ dispatch, status }: any) {
    const [isExpressed, setIsExpressed] = useState('')
    const [origin, setOrigin] = useState('')

    const interactive = status === 'prompt'

    useEffect(() => {
      console.log("Current State:", status);
  }, [status]);
  
    
    const handleStatement = (e: React.ChangeEvent<HTMLInputElement>) => {setIsExpressed(e.target.value)}
    const assignOrigin = (e: React.ChangeEvent<HTMLSelectElement>) => {setOrigin(e.target.value)}
    return (
      <div className={`mx-auto absolute w-[75rem] 2xl:h-full opacity-0 transition-all duration-500 ${interactive ? 'pointer-events-auto opacity-100' : 'pointer-events-none'  }`}>
      <div className="lg:text-center max-w-xl lg:mx-auto">
        <span className="text-white">We're in a climate of hot takes</span>
        <h2 className="text-3xl tracking-tight mt-6 font-light lg:text-4xl text-white">
          Let's take a grounded approach <span className="md:block text-zinc-300">and challenge them instead</span>
        </h2>
      </div>

      <div className="flex flex-col items-center gap-y-12 w-full mt-12 py-20 px-10 relative lg:rounded-t-[3rem] 
      overflow-hidden">
        
        <div className="text-center relative z-10 w-full">
         
        <label htmlFor="take" className="block mb-2 text-sm text-white">
        Examine an idea, statement or public perception that you'd like to learn more about
        </label>
        <input 
        onChange={handleStatement}
        type = "text"
        id="take" 
        className="block p-2.5 w-full text-sm text-gray-900 bg-black 
        rounded-4xl border-none focus:ring-blue-500 
        focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Write your thoughts here..."
        />
              </div>
              <div>
              <select 
              id = "perspective"
              className = "rounded-4xl text-white bg-transparent m-auto hover:border-blue-500"
              onChange={assignOrigin}
              >
                  <option hidden className = "text-white bg-black">Perspective</option>
                <option className = "text-white bg-black" value = {"opinion"}>My Opinion</option>
                <option className = "text-white bg-black" value = {"opposition"}>Opposing Opinion</option>
                <option className = "text-white bg-black" value = {"agnostic"}>Curious</option>
              </select>
              </div>
              <button type = "submit" className="text-white w-16 p-2 bg-transparent
              rounded-2xl border border-white hover:border-blue-500 m-auto"
                     onClick={() => dispatch({ type: "assertion",
                    payload:{userInput: isExpressed, origin: origin }})}>
                    Next</button>
            </div>

      </div>
    )
}

