import { useEffect } from "react";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { ScrollUp } from "@/helpers/ScrollToTop";
import InvestigationWorkSpace from "@/components/React/features/investigate/Containers/InvestigationWorkSpace";
import SelectLinks from "@/components/React/features/investigate/phase2/results/components/selection/SelectLinks";
import { displaySelectTooltip } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
import { useBodyLock } from "@/hooks/useBodyLock";

export default function InvestigateContainer() {
  const dispatch = useDispatch<AppDispatch>()
  const investigateState = useSelector((state: RootState) => state.investigation)
  const signingOut = useSelector((state: RootState) => state.auth.signOut)
  const { gettingHelp } = investigateState.help;
  const { showSelectTooltip, showSearch } = investigateState.display;
  const { status } = investigateState.search;
  const hasSearched = showSearch && (status === 'fulfilled');
  useBodyLock();

  function removeToolTip(show: boolean, searched: boolean) {
    if (show && searched) {
      dispatch(displaySelectTooltip(false));
    };
  };


  useEffect(() => {

    ScrollUp();

    return () => {
      dispatch({ type: 'clear' })
    }
  }, []);

  return (
    <main
      onClick={() => removeToolTip(showSelectTooltip, hasSearched)}
      className={`
        max-w-dvw sm:w-full shrink-0 flex flex-col grow 
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
      <SelectLinks />

    </main>
  );
};