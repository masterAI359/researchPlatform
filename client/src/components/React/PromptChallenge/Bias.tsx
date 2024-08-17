import { useState, useEffect } from "react";

interface BiasProps {
    dispatch: any,
    statement: string,
    identifier: string,
    status: string
}

export default function Bias ({ identifier, statement, dispatch, status }: BiasProps) {
    const [bias, setBias] = useState('')
    
    const handleBias = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBias(e.target.value)
                                                      
    const interactive = status === "assertion"
    console.log(interactive)

    useEffect(() => {
      console.log("Current State:", status);
      console.log(interactive)
  }, [status]);

    return (                            
          <div className={`opacity-0 w-11/12 h-full transition-all delay-500 duration-500 mx-auto ${interactive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`lg:text-center max-w-xl lg:mx-auto`}>
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
              what's motivating you to learn more?<br></br>
              <span>(Optional) Feel free to introspect and list your
                 own biases that may be at play here</span>
              </label>
              <textarea
              onChange = {handleBias} 
              id="take" 
              className="block p-2.5 w-full h-1/2 text-sm text-gray-900 bg-black 
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
            
              
    );
}


