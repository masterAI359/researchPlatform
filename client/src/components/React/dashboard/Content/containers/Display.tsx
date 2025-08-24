import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Metrics from "./Metrics";
const SavedArticles = lazy(() => import('../UserArticles/containers/SavedArticles'));
const SavedResearchLayout = lazy(() => import('../SavedInvestigations/containers/SavedResearchLayout'));
import ResearchReview from "../SavedInvestigations/containers/ResearchReview";
import ArticleReview from "../UserArticles/containers/ArticleReview";
import ComponentLoader from "../../../Shared/Loaders/ComponentLoader";
import AccManagement from "../../ProfileNavigation/AccountManagement/AccManagement";
import BackToSavedArticles from "../../ProfileNavigation/buttons/BackToSavedArticles";

export default function Display() {
    const {
        displaySavedInvestigations,
        displaySavedArticles,
        displayAccountManagement,
        displayDashboard,
        displayThisInvestigation,
        displayThisArticle,
    } = useSelector((state: RootState) => state.profileNav, shallowEqual);



    return (
        <main className="w-full relative h-auto min-h-screen px-4 md:px-6 lg:px-0">
            {displayThisArticle && <ArticleReview key='article-review' />}
            {displayDashboard && <Metrics key='dashboard' />}
            {displaySavedArticles &&
                <Suspense fallback={<ComponentLoader />}>
                    <SavedArticles key='articles' />
                </Suspense>
            }
            {displaySavedInvestigations &&
                <Suspense fallback={<ComponentLoader />}>
                    <SavedResearchLayout key='investigations' />
                </Suspense>
            }
            <AnimatePresence mode="wait">
                {displayAccountManagement && <AccManagement key='settings' />}
                {displayThisInvestigation && <ResearchReview key='research-review' />}

            </AnimatePresence>

        </main>
    );
};