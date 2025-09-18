import Search from "../phase2/search/containers/Search";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import { displaySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";

export default function SearchHero(): JSX.Element {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { read } = investigateState
    const { getContent } = read
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        if (getContent) {
            dispatch(displaySearch(false));
        };
    }, [getContent])

    return (
        <section
            className="w-full max-w-168 sm:w-4/5 xl:w-2/5 sm:min-w-full 
            h-auto mx-auto flex items-center justify-center 2xl:mt-0 border-b
            border-white/10">
            <main
                className="w-80 sm:w-full h-auto mb-2 mt-12 md:mt-16">
                <ErrorBoundary >
                    <Search
                    />
                </ErrorBoundary>

            </main>
        </section>
    );
};