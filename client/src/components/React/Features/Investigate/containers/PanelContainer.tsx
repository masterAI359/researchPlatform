import ControlPanel from "../evidence/reading/components/ControlPanel";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import StoryPaginate from "../evidence/reading/buttons/StoryPaginate";

export default function PanelContainer() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { showContent } = investigateState.display
    const { ContentStatus, articles } = investigateState.read

    return (
        <AnimatePresence>
            {showContent &&
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                    className="w-full h-auto relative mx-auto"
                >
                    {showContent &&
                        ContentStatus === 'fulfilled' &&
                        <ControlPanel />
                    }
                    {ContentStatus === 'fulfilled' &&
                        showContent &&
                        Array.isArray(articles) &&
                        (articles.length > 1) &&
                        <StoryPaginate />
                    }
                </motion.div>}
        </AnimatePresence>
    );
};