
//TODO: Add buttons to page through our summary components

export default function Paginate({ setCurrentStory, currentStory }) {

    const previousStory = () => {

        if (currentStory >= 1) {
            setCurrentStory(prev => prev - 1)
        } else {

        }
    }

    const nextStory = () => {

        if (currentStory <= 2) {
            setCurrentStory(prev => prev + 1)
        }
    }


    return (
        <div className="xl:w-60 h-auto p-4 flex items-center justify-center">

            <button
                onClick={previousStory}
                className="xl:w-20 xl:h-16 bg-white/5 hover:bg-white/10 
             mx-auto rounded-3xl flex items-center justify-center xl:p-2
             group transition-all duration-200 ease-in-out">
                <div className="rounded-md xl:h-fit xl:w-16 flex xs:hidden md:block mx-auto bg:black z-1 opacity-0 absolute xl:translate-y-11 xl:-translate-x-20
border border-white/50 md:group-hover:opacity-100 transition-opacity duration-200 ease-in-out">

                    <h1 className="text-white xl:text-xs xl:p-1 text-center font-light tracking-tight justify-self-start text-center w-full">
                        previous article
                    </h1>
                </div>
                <svg className="p-3 text-slate-400 group-hover:text-white transition-all duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                </svg>
            </button>

            <button
                onClick={nextStory}
                className="xl:w-20 xl:h-16 bg-white/5 hover:bg-white/10 rounded-3xl
             mx-auto flex items-center justify-center xl:p-2 group transition-all duration-200 ease-in-out">
                <svg className="text-slate-400 p-3 group-hover:text-white transition-all duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" fill="currentColor" />
                </svg>
            </button>
        </div>
    )
}