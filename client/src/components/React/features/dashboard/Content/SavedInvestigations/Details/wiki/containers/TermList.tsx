import type { TermsTypes } from "./WikipediaTerms";
import type { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { useState } from "react";
import PaginateTerms from "../components/buttons/PaginateTerms";
import TermListItem from "../components/extract/items/TermListItem";

export function TermList({ wikipedia_extracts, excess }: TermsTypes) {
    const [page, setPage] = useState<number>(0);



    return (

        <div className="flex flex-col w-full gap-y-4 2xl:gap-y-12">
            <PaginateTerms
                page={page}
                setPage={setPage}
                excess={excess}
            />
            <section id="carousel" className="w-full 2xl:max-w-full 2xl:min-w-168 xl:max-w-5xl lg:max-w-5xl md:max-w-3xl h-fit overflow-x-auto no-scrollbar overflow-y-hidden" >
                <ul className={`flex flex-wrap gap-1 sm:gap-2 lg:gap-3 lg:flex-nowrap group h-full`}>
                    {wikipedia_extracts?.map((extract: Extracts, index: number) => (
                        <TermListItem key={index} extract={extract} index={index} numItems={wikipedia_extracts.length} />
                    ))}
                </ul>
            </section>
        </div>
    )
};