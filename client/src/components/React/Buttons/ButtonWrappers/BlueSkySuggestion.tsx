import { RootState } from "@/ReduxToolKit/store";
import SearchBlueSky from "../ProcessButtons/SearchBlueSky";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function BlueSkySuggestion () {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { display } = investigateState;
    const { showBlueSkySearch } = display;

    return (
        <motion.div 
        className="w-auto h-auto flex flex-col gap-2 lg:gap-6 items-center justify-center lg:flex-row sticky  bottom-12 lg:bottom-16 lg:left-16"
        >
          {!showBlueSkySearch &&  <div className="w-auto h-fit">
                <p className="text-base text-zinc-400 font-light">
                    Need some inspiration?
                </p>
            </div>}
            <SearchBlueSky />
        </motion.div>
    )
}