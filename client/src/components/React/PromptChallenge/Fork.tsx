export default function Fork () {


    //TODO: As mentioned on the note commented on InvestigateHero
    // This component should give the user a fork in the road
    // These two options ought to be challenging their own ideas, or a statement they came across

    return (
     <div className="mx-auto absolute 2xl:w-4/5 w-full 2xl:h-full left-1/2 transform -translate-x-1/2">
              <div className="lg:text-center max-w-xl mx-auto">
              <h2 className="2xl:text-3xl text-2xl tracking-tight mt-6 font-light text-center
              lg:text-4xl text-white">
                So you have a perspective<div className="md:block text-zinc-300 whitespace-pre-line"
                >
                  How'd you arrive here?</div>
              </h2>
            </div>

            <div className="flex flex-col items-center gap-y-12 w-full 
            mt-12 py-20 px-10 relative lg:rounded-t-[3rem] 
            overflow-hidden">
              
              <div className="text-center relative z-10 w-full">
               
              <div className="bg-black w-full md:mb-3 rounded-lg">
                <p className="md:text-lg text-white p-3">So you have a perspective, what have you encountered that lead you to this point?</p>
            </div>
              <textarea
              id="take" 
              className="p-2.5 w-full md:h-52 text-md text-gray-900 bg-black 
        rounded-lg border-none focus:ring-white resize-none text-wrap
        focus:border-white dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-white/80 dark:focus:border-white" 
              placeholder="Write your thoughts here..."
              ></textarea>
                    </div>
                    <div>
                   
                    </div>
                   
                  </div>
            </div>
            
        )
}