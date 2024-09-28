import { useState, useEffect } from "react";

interface BiasProps {
    statement: string,
    identifier: string,
    status: string,
    contianerWidth: number
}

//{ identifier, statement, status }

export default function Step2 ({containerWidth}: any) {
    const [bias, setBias] = useState('')
    
    const handleBias = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBias(e.target.value)
                                                      


return (                            
<div className={`sm:max-h-full box-border h-full transition-all delay-500 
  duration-500 mx-auto w-full inline-block`}>
<div className="lg:text-center lg:mx-auto">
  <h2 className="text-3xl tracking-tight mt-6 font-light 
  lg:text-4xl text-white">
  Zero in on it<span className="sm:block sm:px-3 md:block text-zinc-300"
  >What peaked your interest?</span>
  </h2>
</div>
<div className="flex flex-col items-center w-full 
relative lg:rounded-t-[3rem] 
  overflow-hidden">
  <div className="bg-black w-full md:mt-44 md:mb-3 rounded-lg">
        <p className="md:text-lg text-white p-3">
          Something must have motivated you to look into this idea in detail. What drove you to examine this?
        </p>
  </div>
  <div className="text-center relative z-10 w-full">
    <textarea
    onChange = {handleBias} 
    id="take" 
    className="block mx-auto w-full md:h-56 text-md text-gray-900 bg-black 
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


