import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { clearWikiSlice, getSelectedText, getWikiExtract, selectingText } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";


const variants = {
  closed: { opacity: 0 },
  open:   { opacity: 1 }
};

export default function TextPopover({ children }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { modalPosition, status, extract } = investigateState.wiki;

    useEffect(() => {

    }, [modalPosition, status])

    if(!modalPosition) return null

 const textpopovercomponent = (
    <motion.div
    style={{ top: modalPosition.y-227, left: modalPosition.x -140, position: 'absolute'}}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      className={`z-50`}
    >
      <div className="bg-white 2xl:h-52 rounded-3xl shadow-material">
        {children}
        <div
          className="
            absolute
            bottom-0.5 right-8
            transform translate-y-full
            w-0 h-0
            border-l-8 border-l-transparent
            border-r-8 border-r-transparent
            border-t-8 border-t-white
          "
        ></div>
       
      </div>
    </motion.div>
  );

  return createPortal(textpopovercomponent, document.body)
}


export function ExtractThis () {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { selectedText } = investigateState.wiki;
    const dispatch = useDispatch<AppDispatch>();

    const retrieveWikiExtract = () => {
      dispatch(getWikiExtract(selectedText));
    }


    const handleDeny = () => {
      dispatch(selectingText(false))
    }

    return (
          <div className="relative h-fit w-fit flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8
       sm:gap-y-4 sm:p-8 lg:flex-row lg:items-center 
        text-center">
             <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-black xl:text-lg font-light tracking-tight">Look this up?</p>
                <p className="mt-2">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400">
                        {selectedText}
                    </span>
                </p>
                <p className="mx-auto text-sm text-white" />
                <div className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full">
                    <button
                    onClick={retrieveWikiExtract}
                    type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-black lg:hover:bg-blue-500 text-white duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                    <button onClick={handleDeny}  type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-black lg:hover:bg-black/60 text-white duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}