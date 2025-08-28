import { useEffect } from "react";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { ScrollUp } from "../../../../helpers/ScrollToTop";
import InvestigationWorkSpace from "../../features/investigate/Containers/InvestigationWorkSpace";
import SelectLinks from "../../features/investigate/Evidence/searching/components/sourceLinks/components/SelectLinks";
import { displaySelectTooltip } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";

export default function InvestigateContainer() {
  const dispatch = useDispatch<AppDispatch>()
  const investigateState = useSelector((state: RootState) => state.investigation)
  const signingOut = useSelector((state: RootState) => state.auth.signOut)
  const { gettingHelp } = investigateState.help;
  const { showSelectTooltip, showSearch } = investigateState.display;
  const { status } = investigateState.search;
  const hasSearched = showSearch && (status === 'fulfilled');

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
        max-w-full sm:max-w-dvw sm:w-full shrink-0 flex flex-col grow 
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