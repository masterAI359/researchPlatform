import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage";
import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import type { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { TermList } from "./TermList";

export interface TermsTypes {
  wikipedia_extracts: Extracts[],
  excess: boolean | null
}

export function Terms(): JSX.Element | null {
  const research = useSelector((state: RootState) => state.userWork.investigationToReview);
  const { wikipedia_extracts } = research;
  const excess: boolean | null = wikipedia_extracts ? wikipedia_extracts.length > 4 : null;
  const errorMessage = "No extracts were saved while reading articles";


  return (
    <section className="w-full xl:w-4/5 mx-auto">
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
};