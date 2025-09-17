import type { SetStateAction } from "react"
import type { WikiDisambigCandidate } from "@/services/wiki/wiki"

interface NavCandidateButtons {
    setPage: React.Dispatch<SetStateAction<number>>,
    candidates: WikiDisambigCandidate[],
    page: number
};

export default function NavCandidates({ setPage, candidates, page }: NavCandidateButtons): JSX.Element | null {


    const handleBack = () => {
        const val = (page - 1) % candidates.length;
        setPage(val);
    };

    const handleNext = (): void => {
        const val = (page + 1) % candidates.length;
        setPage(val);
    };

    return (
        <div className="flex items-center justify-center gap-x-4 w-full h-auto p-2">
            <button
                onClick={handleBack}
                className="w-20 h-8 p-1.5 rounded-full bg-white flex items-center justify-center
                 text-black  md:hover:bg-white/10 md:hover:text-white transition-all duration-200 ease-in-out"
            >
                back
            </button>
            <button
                onClick={handleNext}
                className="w-20 h-8 p-1.5 rounded-full bg-white flex items-center justify-center
                 text-black  md:hover:bg-white/10 md:hover:text-white transition-all duration-200 ease-in-out"
            >
                next
            </button>
        </div>
    )
};