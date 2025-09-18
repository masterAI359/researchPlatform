import type { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review"
import type { WikiDisambigCandidate } from "@/services/wiki/wiki"
import DisambigSaved from "../disambig/DisambigSaved"

interface SavedWikiDescription {
    extract: Extracts,
    isDisambig: boolean,
    terms?: WikiDisambigCandidate[],
    page?: number
}

export function SavedWikiDescription({ extract, isDisambig, page, terms }: SavedWikiDescription) {

    return (
        <div className="h-52 w-full border-b border-white/20 mt-4 overflow-y-hidden relative">
            <div className="absolute inset-0 text-white 2xl:text-sm overflow-y-scroll no-scrollbar lg:text-sm text-xs font-light tracking-tight">
                {isDisambig ? <DisambigSaved page={page} terms={terms} /> : <p className="text-xs 2xl:text-sm font-light mt-2 text-zinc-300 overflow-y-scroll no-scrollbar">
                    {extract.extract}
                </p>}
            </div>
        </div>
    )
};