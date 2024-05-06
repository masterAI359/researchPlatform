import { useState } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
//import axios from "@/services/axios-client.tsx";

export default function InputStatement ({ dispatch }: any) {
    const [isExpressed, setIsExpressed] = useState('')
    const [origin, setOrigin] = useState('')
    // useEffect(() => {
    //     // Function to fetch data from the server
    //     const fetchData = async () => {
    //       try {
    //         // Sending a GET request to the specified URL
    //         const response = await axios.get('/users/all')
    //         const data = await response; // Parse JSON response into native JavaScript objects
    //         console.log(data); // Log the data
    //       } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //       }
    //     };
    //
    //     fetchData(); // Call the fetchData function
    //   }, []); //

   
    //interface SyntheticEvent<T> {
    //    target: EventTarget & T;
    //}
    
    const handleStatement = (e: React.ChangeEvent<HTMLInputElement>) => {setIsExpressed(e.target.value)}
    const assignOrigin = (e: React.ChangeEvent<HTMLSelectElement>) => {setOrigin(e.target.value)}
    return (
        <div className="lg:p-8">
  <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
    <div className="relative isolate lg:flex-col overflow-hidden bg-gradientup ring-1 ring-white/10 rounded-4xl
     px-6 p-10 lg:flex lg:p-20 pb-0 lg:pb-0">
      <div className="lg:text-center max-w-xl lg:mx-auto">
        <span className="text-white">We're in the era of hot takes</span>
        <h2 className="text-3xl tracking-tight mt-6 font-light lg:text-4xl text-white">
          Let's take a grounded approach <span className="md:block text-zinc-300">and challenge them instead</span>
        </h2>
      </div>
      

      <div className="flex flex-col items-center gap-y-12 w-full bg-black mt-12 py-20 px-10 relative rounded-t-2xl lg:rounded-t-[3rem] 
      overflow-hidden shadow-thick">
        
        <div className="text-center relative z-10 w-full">
         
        <label htmlFor="take" className="block mb-2 text-sm text-white">
        Examine an idea, statement or public perception that you'd like to learn more about
        </label>
        <input 
        onChange={handleStatement}
        type = "text"
        id="take" 
        className="block p-2.5 w-full text-sm text-gray-900 bg-transparent 
        rounded-lg border border-gray-300 focus:ring-blue-500 
        focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Write your thoughts here..."
        />
              </div>
              <div>
              <select 
              id = "perspective"
              className = "rounded-2xl text-white bg-transparent m-auto hover:border-blue-500"
              onChange={assignOrigin}
              >
                  <option hidden className = "text-white bg-black">Perspective</option>
                <option className = "text-white bg-black" value = {"opinion"}>My Opinion</option>
                <option className = "text-white bg-black" value = {"opposition"}>Opposing Opinion</option>
                <option className = "text-white bg-black" value = {"curious"}>Curious</option>
              </select>
              </div>
              <button type = "submit" className="text-white w-16 p-2 bg-transparent 
              rounded-2xl border border-white hover:border-blue-500 m-auto"
                     onClick={() => dispatch({ type: "declared",
                    payload:{userInput: isExpressed, origin: origin }})}>
                    Next</button>
            </div>
          </div>
        </div>
      </div>
    )
}

