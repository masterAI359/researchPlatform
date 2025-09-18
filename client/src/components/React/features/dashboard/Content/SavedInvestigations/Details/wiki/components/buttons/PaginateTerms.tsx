import React, { SetStateAction } from "react"


interface TermPaginate {
    page: number,
    setPage: React.Dispatch<SetStateAction<number>>,
    excess: any

}

export default function PaginateTerms({ page, setPage, excess }: TermPaginate): JSX.Element | null {

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
    };

    const handleNextClick = () => {
        const snapPoints = document.querySelectorAll('[data-value="snapPoint"]');
        const max = snapPoints.length - 1;
        if (page + 1 <= max) {
            const nextPage = page + 1;
            scrollToNext(nextPage, snapPoints);
            setPage(nextPage);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 pb-6 border-b border-white/10">
            {excess && <div className="lg:inline-flex items-center inline-flex lg:col-start-4 lg:ml-auto lg:px-2 mb-4 order-last space-x-2">
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
            </div>}
        </div>
    )
}