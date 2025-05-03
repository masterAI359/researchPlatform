import { RootState } from "@/ReduxToolKit/store";
import SearchBlueSky from "../ProcessButtons/SearchBlueSky";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

export default function BlueSkySuggestion () {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { display } = investigateState;
    const { showBlueSkySearch } = display;

    const suggestion = (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { type: 'tween', duration: 0.2, delay: 1.5 }}}
        exit={{ opacity: 0 }}
        className="w-full md:w-fit h-auto flex flex-col gap-2 items-center justify-center absolute top-6 md:top-auto md:bottom-16 md:right-4 lg:right-6 xl:right-8 2xl:right-16 group"
        >
          {!showBlueSkySearch &&  <div className="w-auto h-fit opacity-0 md:group-hover:opacity-100 transition-all duration-200 ease-in-out">
                <p className="text-base text-zinc-400 font-light">
                    Need some inspiration?
                </p>
            </div>}
            <div className="relative w-auto">
            <SearchBlueSky />

            </div>
        </motion.div>
    )

    return createPortal(suggestion, document.body)
}