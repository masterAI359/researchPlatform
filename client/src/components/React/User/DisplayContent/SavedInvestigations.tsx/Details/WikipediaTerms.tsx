import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"

export function Terms () {
  const research = useSelector((state: RootState) => state.userWork.investigationToReview);
    const { wikipedia_extracts } = research;
    const excess: boolean | null = wikipedia_extracts ? wikipedia_extracts.length > 4 : null

    return (
  <section className="lg:p-8">
    <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center w-full">
      <div>
        <span className="text-blue-400">From Wikipedia</span>
        <h2 className="text-3xl tracking-tight mt-6 font-light lg:text-4xl text-white">
          Unfamilar Terms <span className="md:block text-zinc-400">extracted for context</span>
        </h2>
        <p className="mt-4 text-base text-white max-w-md">
            Here are the terms you looked up from within your articles while immersed in research
        </p>
      </div>

      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 pb-6 border-b border-white/10">
          <div className="items-center inline-flex lg:col-start-4 lg:ml-auto lg:px-2 mb-4 order-last space-x-2">
            <button className={`bg-white/5 hover:bg-white/10 focus:bg-transparent 
              rounded-2xl inline-flex items-center text-center p-4 ring-1 ring-white/10 ${excess ? 'text-white' : 'text-zinc-600'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Skip to previous slide page</span>
            </button>
            <button className="bg-white/5 hover:bg-white/10 focus:bg-transparent rounded-2xl inline-flex items-center text-center text-white p-4 ring-1 ring-white/10 group">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${excess ? 'text-white' : 'text-zinc-600'}  md:group-hover:text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Skip to next slide page</span>
            </button>
          </div>
        </div>

        <ul className="flex gap-3 overflow-x-scroll pb-24 pt-12 scrollbar-hide snap-mandatory snap-x w-full">
          {wikipedia_extracts?.map((list, idx) => (
            <li key={idx} className="items-center justify-center w-full flex flex-col shrink-0 snap-start">
              <ul className="grid grid-cols-1 lg:grid-cols-4 gap-3 group h-full">
                {wikipedia_extracts?.map((item, index) => (
                  <li key={index} className="bg-ebony shadow-inset rounded-3xl p-4">
                    <figure>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check text-white"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <p className="font-medium leading-6 text-white mt-6">{item.title}</p>
                        <p className="text-xs 2xl:text-sm font-light mt-2 text-zinc-300">{item.extract}</p>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

}



