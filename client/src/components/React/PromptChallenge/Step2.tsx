import { useState, useEffect } from "react";
import HelpButton from "../Buttons/help";

interface BiasProps {
  statement: string,
  identifier: string,
  status: string,
  contianerWidth: number
}

//{ identifier, statement, status }

export default function Step2({ containerWidth }: any) {
  const [bias, setBias] = useState('')

  const handleBias = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBias(e.target.value)



  return (
    <div className={`h-full box-border transition-all delay-500
  duration-500 mx-auto w-full inline-block`}>
      <div className="flex flex-col items-center w-full 
relative
  overflow-hidden">

        <div className="w-full box-border border-b h-fit border-white/10 flex flex-row justify-center items-baseline pb-5 mb-5">
          <div className="self-center w-full grow justify-self-center">
            <h1 className="text-2xl tracking-tight font-light text-white p-4 self-end">
              Explore our biases<br></br>
              <span className="text-zinc-400">what influences your conclusions?</span>
            </h1>
          </div>
          <div className="w-fit justify-self-end self-end h-full">
            <HelpButton />
          </div>


        </div>
        <div className="text-center relative w-full">
          <textarea
            onChange={handleBias}
            id="take"
            className="block mx-auto w-11/12 md:h-52 lg:mb-24 text-md text-gray-900 bg-white/10 
    rounded-lg border-none focus:ring-blue-500 resize-none text-wrap
  focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 
  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Describe why you want to know more about this topic">
          </textarea>
        </div>
      </div>
    </div>
  )
}


