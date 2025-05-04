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
        className="w-fit md:w-fit h-auto flex flex-col gap-2 items-center justify-start md:justify-center absolute md:sticky top-2 left-2 md:top-auto md:bottom-40 md:right-4 lg:right-6 xl:right-8 2xl:left-24 group"
        >
         <div className="absolute p-1 bg-white z-50 opacity-0 transition-all duration-200 ease-in-out 
            md:group-hover:opacity-100 bottom-14
            rounded-md items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
            after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent">
                <p className="text-black text-sm">
                    {showBlueSkySearch ? 'close Bluesky search' : 'tackle an idea from Bluesky'}
                </p>
            </div>

            
            <div className="relative w-auto">
            <SearchBlueSky />

            </div>
        </motion.div>
    )

    return createPortal(suggestion, document.body)
}