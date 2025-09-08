import { useDispatch, useSelector } from "react-redux";
import { getQuery } from "@/ReduxToolKit/Reducers/Investigate/UserPOV";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import { RetrieveArticles, resetArticles, incrementPageBy } from "@/ReduxToolKit/Reducers/Investigate/SearchResults";
import { displaySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";
import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage";
import SearchBar from "./SearchBar";

export default function Search({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { pov, read } = investigateState
  const { query, searching } = pov
  const { getContent } = read
  const dispatch = useDispatch<AppDispatch>();
  const empty: boolean = (query === null) || (query === '');

  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(getQuery(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(incrementPageBy(0));
    dispatch(resetArticles());
    dispatch(RetrieveArticles(encodeURIComponent(query)));
  };

  useEffect(() => {
    if (query === null) return;

    if (getContent) {
      dispatch(displaySearch(false))
    };
  }, [searching, getContent, query]);

  return (
    <div className="block box-border min-w-full max-w-full mx-auto xs:px-0 md:px-2 2xl:h-full no-scrollbar">
      <div
        className="text-center w-full md:mx-auto">
        <div
          className="inline-flex flex-wrap items-center w-full">
          <div
            className="w-full">
            <ErrorBoundary
              fallback={<ErrMessage message="issue on search component" />}
            >
              <div
                className="relative lg:mb-2 xs:p-1 mx-auto flex justify-center items-center">

                <SearchBar
                  empty={empty}
                  getSearchInput={getSearchInput}
                  handleSubmit={handleSubmit}
                />
              </div>
            </ErrorBoundary>

          </div>
        </div>
      </div>
    </div>
  )
};


