import { useState } from "react";

interface BiasProps {
    dispatch: any,
    statement: string,
    identifier: string,
}

export default function Bias ({ identifier, statement, dispatch }: BiasProps) {
    const [bias, setBias] = useState('')
    
    const handleBias = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBias(e.target.value)

    return (
        <div className="lg:p-8">
        <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 
        px-8 xl:px-36 items-center relative w-full">
          <div className="relative isolate lg:flex-col overflow-hidden 
          bg-gradientup ring-1 ring-white/10 rounded-4xl
           px-6 p-10 lg:flex lg:p-20 pb-0 lg:pb-0">
            <div className="lg:text-center max-w-xl lg:mx-auto">
              <h2 className="text-3xl tracking-tight mt-6 font-light 
              lg:text-4xl text-white">
                Zero in on it<span className="md:block text-zinc-300"
                >What peaked your interest?</span>
              </h2>
            </div>
            <div className="flex flex-col items-center gap-y-12 w-full 
            mt-12 py-20 px-10 relative lg:rounded-t-[3rem] 
            overflow-hidden">
              
              <div className="text-center relative z-10 w-full">
               
              <label htmlFor="take" className="block mb-2 text-sm 
              text-white">
              Describe why you want to know more about this topic, 
              what's motivating you to learn more?
              <span>(Optional) Feel free to introspect and list your
                 own biases that may be at play here</span>
              </label>
              <textarea
              onChange = {handleBias} 
              id="take" 
              className="block p-2.5 w-full text-sm text-gray-900 bg-black 
              rounded-2xl border border-gray-300 focus:ring-blue-500 
              focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Write your thoughts here..."
              ></textarea>
                    </div>
                    <div>
                   
                    </div>
                    <button type = "submit" className="text-white w-16 p-2 bg-transparent 
                    rounded-2xl border border-white hover:border-blue-500 m-auto"
                    onClick={() => dispatch({ type: "acknowledge-bias", payload: bias})}
                         >
                          Next</button>
                  </div>
                </div>
              </div>
            </div>
    );
}


