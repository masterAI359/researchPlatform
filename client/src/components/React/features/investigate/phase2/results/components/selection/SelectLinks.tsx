import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { displayGetArticlesModal, displaySelectionWarning, displaySelectTooltip } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
import { AppDispatch } from "@/ReduxToolKit/store";
import SelectionRequired from "../../../notifications/SelectionRequired";
import { useEffect } from "react";
import GuideSelectingArticles from "@/components/React/features/investigate/tooltips/GuideSelectingArticles";
import { useTooltipFlags } from "@/hooks/useTooltipFlags";


export default function SelectLinks() {
  const investigateState = useSelector((state: RootState) => state.investigation);
  const { display, search } = investigateState;
  const { articleOptions } = search;
  const { showSelectTooltip } = display;
  const { getArticle } = investigateState;
  const { showSelectWarning, showGetArticlesModal } = investigateState.display;
  const { chosenArticles } = getArticle;
  const { getFlags, setFlag } = useTooltipFlags();
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    const flags = getFlags();

    if (flags.selectingTooltip === false) {
      dispatch(displaySelectTooltip(true));
      setFlag('selectingTooltip', true);
    };

  }, [getFlags, setFlag, dispatch]);


  return (
    <AnimatePresence>
      {Array.isArray(articleOptions) &&
        (articleOptions.length > 0) &&
        (!showGetArticlesModal) &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "tween", duration: 0.2, delay: 0.6 }}
          className={`${showGetArticlesModal ? 'pointer-events-none' : 'pointer-events-auto'}
           bg-ebony fixed bottom-0 right-0 left-0 border-t border-border_gray
        text-white font-light tracking-tight flex 2xl:gap-x-16 py-4 gap-x-4 md:px-16 cursor-pointer
         mx-auto z-40 justify-center 2xl:justify-end content-center`
          }>
          {showSelectWarning &&
            <SelectionRequired />
          }
          {showSelectTooltip &&
            !showSelectWarning &&
            <GuideSelectingArticles
            />
          }
          <OptionsCeiling
            chosenArticles={chosenArticles}
          />
          <RetrieveChosenArticles
            chosenArticles={chosenArticles}
          />
        </motion.div>
      }

    </AnimatePresence>

  )
};


function RetrieveChosenArticles({ chosenArticles }) {
  const dispatch = useDispatch<AppDispatch>()

  const handleSummaries = () => {
    if (chosenArticles.length > 0) {
      dispatch(displayGetArticlesModal(true))
    } else {
      dispatch(displaySelectionWarning(true))
    }
  };


  return (
    <div >
      <button className="group">
        <div
          onClick={handleSummaries}
          className="flex items-center justify-center bg-white
                  flex-nowrap rounded-3xl transition-all ease-in-out duration-200 text-black px-5 py-2 w-full h-auto
              group-hover:bg-mirage group-hover:text-white
              top-2.5 text-base">
          <div className="w-full">
            <p className="text-black text-sm font-normal sm:text-base md:text-lg group-hover:text-white 
                    text-nowrap transition-all duration-200 ease-in-out">
              Retrieve these articles &rarr;
            </p>
          </div>
        </div>

      </button>
    </div>
  );
};



function OptionsCeiling({ chosenArticles }) {

  const selectedTotal = chosenArticles.length
  const selectedArticles = `${selectedTotal}/3`


  return (
    <div className="h-full my-auto">
      <p
        className="text-base md:text-xl 2xl:text-2xl"
      >Choose articles
        <span
          className={`
                text-blue-400 font-bold tracking-tight mx-2 
                ${selectedTotal === 3
              ? 'animate-pulse'
              : null}`
          }
        >
          {selectedArticles}
        </span>
      </p>
    </div>
  );
};