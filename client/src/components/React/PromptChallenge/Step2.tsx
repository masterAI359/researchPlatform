import { useState, useEffect } from "react";

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
        <div className="bg-black w-full md:mb-3 rounded-lg">
          <p className="md:text-lg text-white p-3">
            Something must have motivated you to look into this idea in detail. What drove you to examine this?<br></br>
            Did this idea invoke some sort of feeling? Beg the question? Move you to some level of introspection?
          </p>
        </div>
        <div className="text-center relative w-full">
          <textarea
            onChange={handleBias}
            id="take"
            className="block mx-auto w-full md:h-52 text-md text-gray-900 bg-black 
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


