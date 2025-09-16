import { useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { useEffect, useRef } from "react";
import { RetrieveArticles, resetArticles } from "@/ReduxToolKit/Reducers/Investigate/SearchResults";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";
import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage";
import SearchBar from "../components/input/SearchBar";
import { clearChosenArticles } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles";
import { normalize } from "@/helpers/Normailize";

export default function Search({ }) {
  const dispatch = useDispatch<AppDispatch>();
  const lastCommitedInput = useRef<string | null>(null);
  const draftRef = useRef<string | null>(null);
  const timerRef = useRef<number | null>(null);


  const recordQuery = (raw: string): boolean => {
    const q = normalize(raw);
    if (q.length <= 2) return;

    if (q !== lastCommitedInput.current) {
      draftRef.current = q;
      return true;
    } else {
      return false;
    }
  };


  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);

    const val: string | null = e.currentTarget.value;

    timerRef.current = window.setTimeout(() => {
      recordQuery(val);
      timerRef.current = null;
    }, 300);
  };



  const flush = (val: string) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
    recordQuery(val);
  };

  const send = () => {
    const q = draftRef.current || lastCommitedInput.current;
    // as an empty string may be the input value, opted for || operator as opposed to nullish coalescing
    if (!q) return;
    dispatch(clearChosenArticles());
    dispatch(resetArticles());
    dispatch(RetrieveArticles(lastCommitedInput.current));
    lastCommitedInput.current = q;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.currentTarget,
      input = form.elements.namedItem('q') as HTMLInputElement | null,
      raw = input
        ? input.value
        : null;

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };

    if (recordQuery(raw)) send();
  };


  useEffect(() => {

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      };
    }
  }, []);

  return (
    <div className="block box-border min-w-full max-w-full mx-auto md:px-2 2xl:h-full no-scrollbar">
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
                className="relative lg:mb-2 mx-auto flex justify-center items-center">

                <SearchBar
                  getSearchInput={getSearchInput}
                  handleSubmit={handleSubmit}
                  flush={flush}
                />
              </div>
            </ErrorBoundary>

          </div>
        </div>
      </div>
    </div>
  )
};


