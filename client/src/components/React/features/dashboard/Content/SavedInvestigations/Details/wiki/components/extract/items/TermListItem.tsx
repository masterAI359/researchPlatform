import type { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review"
import type { WikiDisambigCandidate } from "@/services/wiki/wiki";
import { useState, useMemo } from "react"
import { SavedWikiDescription } from "../descriptions/SavedWikiDescription";
import NavCandidates from "@/components/React/features/WikiExtract/components/disambig/buttons/NavDisambig";

interface TermListItemProps {
    index: number | null,
    extract: Extracts | null,
    numItems: number | null
}

export default function TermListItem({ index, extract, numItems }: TermListItemProps) {
    const [page, setPage] = useState<number>(0);
    const isDisambig = extract.candidates ? true : false;
    const terms = useMemo(() => {
        return extract.candidates ? extract.candidates?.filter((term: WikiDisambigCandidate) => term.extract !== "") : null;
    }, [extract?.candidates]);


    const snapPoint = index % 4 === 0 ? 'snapPoint' : null;

    const widthClass =
        numItems < 2
            ? "lg:w-60"
            : numItems === 2
                ? "lg:w-[calc((100%-0.75rem)/2)]"
                : numItems === 3
                    ? "lg:w-[calc((100%-1.5rem)/3)]"
                    : "lg:w-[calc((100%-3rem)/4)]";

    const { title } = extract;


    return (
        <li key={extract.title + index} data-value={snapPoint} className={`w-full sm:w-[calc((100%-2rem)/2)] ${widthClass} bg-ebony shadow-inset rounded-3xl p-4 grow-0 shrink-0`}>
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
                    <p className="font-medium leading-6 text-white mt-6">{title}</p>
                    <SavedWikiDescription page={page} terms={terms} isDisambig={isDisambig} extract={extract} />

                </div>
            </figure>

            {isDisambig &&
                <NavCandidates setPage={setPage} candidates={terms} page={page} />
            }
        </li>
    )
};