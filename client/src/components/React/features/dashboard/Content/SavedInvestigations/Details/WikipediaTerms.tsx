import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage";
import { RootState } from "@/ReduxToolKit/store"
import { useState } from "react";
import { useSelector } from "react-redux"


type ExtractItem = {
  associatedArtilce: string,
  extract: string,
  title: string
}

interface TermListItem {
  item: ExtractItem,
  index: number
}

interface TermsTypes {
  wikipedia_extracts: TermListItem[],
  excess: boolean | null
}

export function Terms() {
  const research = useSelector((state: RootState) => state.userWork.investigationToReview);
  const { wikipedia_extracts } = research;
  const excess: boolean | null = wikipedia_extracts ? wikipedia_extracts.length > 4 : null;
  const errorMessage = "No extracts were saved while reading articles";


  return (
    <section className="w-full lg:w-2/3">
      <div className="mx-auto py-12 md:px-12 px-8 items-center w-full">
        <div>
          <span className="text-blue-400">From Wikipedia</span>
          <h2 className="text-3xl tracking-tight mt-6 font-light lg:text-4xl text-white">
            Unfamilar Terms <span className="md:block text-zinc-400">extracted for context</span>
          </h2>
          <p className="mt-4 text-base text-white max-w-md">
            Here are the terms you looked up from within your articles while immersed in research
          </p>
        </div>

        {wikipedia_extracts && <TermList wikipedia_extracts={wikipedia_extracts} excess={excess} />}
        {wikipedia_extracts && wikipedia_extracts.length < 1 && <ErrMessage message={errorMessage} />}
      </div>
    </section>
  );

}



function TermList({ wikipedia_extracts, excess }: TermsTypes) {
  const [page, setPage] = useState<number>(0);

  const scrollToNext = (index: number, snapPoints) => {

    const target = snapPoints[index] as HTMLElement | null;
    if (target && index < snapPoints.length) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: 'nearest' })
    };

  };

  const scrollBack = (index, snapPoints) => {

    const target = snapPoints[index] as HTMLElement | null;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
    }
  };

  const handleBackClick = () => {
    const snapPoints = document.querySelectorAll('[data-value="snapPoint"]');
    if (page - 1 >= 0) {
      const prevPage = page - 1;
      scrollBack(prevPage, snapPoints);
      setPage(prevPage);
    }
  }

  const handleNextClick = () => {
    const snapPoints = document.querySelectorAll('[data-value="snapPoint"]');
    const max = snapPoints.length - 1;
    if (page + 1 <= max) {
      const nextPage = page + 1;
      scrollToNext(nextPage, snapPoints);
      setPage(nextPage);
    }
  }


  return (

    <div className="flex flex-col w-full gap-y-4 2xl:gap-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 pb-6 border-b border-white/10">
        <div className="lg:inline-flex items-center inline-flex lg:col-start-4 lg:ml-auto lg:px-2 mb-4 order-last space-x-2">
          <button onClick={handleBackClick} type="button" className={`bg-white/5 hover:bg-white/10 focus:bg-transparent 
              rounded-2xl inline-flex items-center text-center p-4 ring-1 ring-white/10 ${excess ? 'text-white' : 'text-zinc-600'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Skip to previous slide page</span>
          </button>
          <button onClick={handleNextClick} type="button" className="bg-white/5 hover:bg-white/10 focus:bg-transparent rounded-2xl inline-flex items-center text-center text-white p-4 ring-1 ring-white/10 group">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${excess ? 'text-white' : 'text-zinc-600'}  md:group-hover:text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Skip to next slide page</span>
          </button>
        </div>
      </div>
      <section id="carousel" className="w-full 2xl:max-w-full 2xl:min-w-168 xl:max-w-5xl lg:max-w-5xl md:max-w-3xl h-fit overflow-x-auto no-scrollbar overflow-y-hidden" >
        <ul className={`flex flex-wrap gap-1 sm:gap-2 lg:gap-3 lg:flex-nowrap group h-full`}>
          {wikipedia_extracts?.map((item, index) => (
            <TermListItem key={index} item={item} index={index} numItems={wikipedia_extracts.length} />
          ))}
        </ul>
      </section>
    </div>
  )
}

function TermListItem({ index, item, numItems }) {
  const snapPoint = index % 4 === 0 ? 'snapPoint' : null;

  const widthClass =
    numItems < 2
      ? "lg:w-60"
      : numItems === 2
        ? "lg:w-[calc((100%-0.75rem)/2)]"
        : numItems === 3
          ? "lg:w-[calc((100%-1.5rem)/3)]"
          : "lg:w-[calc((100%-3rem)/4)]";


  return (
    <li key={item.extract + index} data-value={snapPoint} className={`w-full sm:w-[calc((100%-2rem)/2)] ${widthClass} bg-ebony shadow-inset rounded-3xl p-4 grow-0 shrink-0`}>
      <figure>
        <div className="pb-4" >
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
          <div className="h-52 w-full border-b border-white/20 mt-4 overflow-y-hidden relative">
            <div className="absolute inset-0 text-white 2xl:text-sm overflow-y-scroll no-scrollbar lg:text-sm text-xs font-light tracking-tight">
              <p className="text-xs 2xl:text-sm font-light mt-2 text-zinc-300 overflow-y-scroll no-scrollbar">{item.extract}</p>

            </div>
          </div>

        </div>
      </figure>
    </li>
  )
}