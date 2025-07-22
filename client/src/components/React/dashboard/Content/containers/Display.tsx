import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Metrics from "./Metrics";
const SavedArticles = lazy(() => import('../UserArticles/containers/SavedArticles'));
const SavedResearchLayout = lazy(() => import('../SavedInvestigations/containers/SavedResearchLayout'));
import AccManagement from "../../ProfileNavigation/AccountManagement/AccManagement";
import ResearchReview from "../SavedInvestigations/containers/ResearchReview";
import ArticleReview from "../UserArticles/containers/ArticleReview";
import ComponentLoader from "../../../Shared/Loaders/ComponentLoader";

export default function Display() {
    const displaySavedInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations)
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const displayAccountManagement = useSelector((state: RootState) => state.profileNav.displayAccountManagement)
    const displayDashboard = useSelector((state: RootState) => state.profileNav.displayDashboard);
    const displayThisInvestigation = useSelector((state: RootState) => state.profileNav.displayThisInvestigation);
    const displayThisArticle = useSelector((state: RootState) => state.profileNav.displayThisArticle);


    return (
        <main className="w-full relative h-auto min-h-screen px-4 md:px-6 lg:px-0">

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
                {displayThisInvestigation && <ResearchReview key='research_review' />}
                {displayThisArticle && <ArticleReview key='article_review' />}
            </AnimatePresence>

        </main>
    );
};