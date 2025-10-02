import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Metrics from "./Metrics";
const SavedArticles = lazy(() => import('../UserArticles/containers/SavedArticles'));
const SavedResearchLayout = lazy(() => import('../SavedInvestigations/containers/SavedResearchLayout'));
import AccManagement from "../../ProfileNavigation/AccountManagement/AccManagement";
import DisplayLoader from "@/components/React/Shared/Loaders/DisplayLoader";
import AppWindowIcon from "@/components/React/Shared/IconComponents/AppWindowIcon";
import { variants } from "@/motion/variants";

export default function Display() {
    const {
        displaySavedInvestigations,
        displaySavedArticles,
        displayAccountManagement,
        displayDashboard,
    } = useSelector((state: RootState) => state.profileNav, shallowEqual);



    return (
        <motion.main
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
            className="w-full relative h-full min-h-dvh px-4 md:px-6 lg:px-0 mx-auto flex items-start justify-center
        ">
            {displayDashboard && <Metrics key='dashboard' />}
            {displaySavedArticles &&
                <Suspense fallback={<DisplayLoader><AppWindowIcon /></DisplayLoader>}>
                    <SavedArticles key='articles' />
                </Suspense>
            }
            {displaySavedInvestigations &&
                <Suspense fallback={<DisplayLoader><AppWindowIcon /></DisplayLoader>}>
                    <SavedResearchLayout key='investigations' />
                </Suspense>
            }
            <AnimatePresence mode="wait">
                {displayAccountManagement && <AccManagement key='settings' />}

            </AnimatePresence>

        </motion.main>
    );
};