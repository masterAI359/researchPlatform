import { useState } from "react";

interface SuggestTypes {
    statement: string,
    biases: string,
    identifier: string,
    premise: string,
    dispatch: any
}

export default function SuggestQuery({ statement, biases, identifier, premise, dispatch }: SuggestTypes) {

   
    return (
        <section className="p-8">
        <div className="mx-auto 2xl:max-w-7xl py-24 items-center lg:py-24 relative w-full 
        bg-gradientdown rounded-[3rem]">
          <div className="text-center max-w-xl md:mx-auto">
            <h2 className="text-3xl tracking-tight font-light lg:text-4xl text-white">
               <span className="block text-zinc-400">We never lose by learning</span>
            </h2>
            <p className="mt-5 text-white">
             Feel free to write your own search terms,
             or kick back and leverage the power of AI and use one of 
             our suggested queries, just for you
            </p>
            <div className="inline-flex flex-wrap items-center mt-8 w-full">
        <div className="max-w-[480px] w-full m-auto px-4">
          <div className="relative text-white">
           Placeholder text, we might delete this component altogether
          </div>
          <button type = "submit" className="text-white w-16 p-2 bg-transparent 
              rounded-2xl border border-white hover:border-blue-500 m-auto"
                     onClick={() => dispatch({ type: "search",
                    payload: "searchBox"})}>
                    Next</button>
        </div>
            </div>
          </div>
        </div>
        </section>
        
    );
}


