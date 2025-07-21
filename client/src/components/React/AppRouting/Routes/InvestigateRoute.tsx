import { useEffect } from "react";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { ScrollUp } from "../../../../helpers/ScrollToTop";
import InvestigationWorkSpace from "../../Features/investigate/containers/InvestigationWorkSpace";
import SelectArticles from '../../Features/investigate/evidence/sourceLinks/components/SelectLinks';

export default function InvestigateContainer() {
  const dispatch = useDispatch<AppDispatch>()
  const investigateState = useSelector((state: RootState) => state.investigation)
  const signingOut = useSelector((state: RootState) => state.auth.signOut)
  const { help } = investigateState
  const { gettingHelp } = help


  useEffect(() => {

    ScrollUp();

    return () => {
      dispatch({ type: 'clear' })
    }
  }, []);

  return (
    <main
      className={`
        max-w-full sm:max-w-dvw md:w-full shrink-0 flex flex-col grow 
        transition-opacity duration-200 ease-in-out h-full mx-auto justify-center
        items-center relative box-border min-h-svh
        ${signingOut || gettingHelp
          ? 'opacity-80 pointer-events-none'
          : 'opacity-100 pointer-events-auto'}`
      }
    >
      {/* Core workspace for search and article content */}
      <InvestigationWorkSpace />

      {/* Footer bar with selected article logic */}
      <SelectArticles />

    </main>
  );
};