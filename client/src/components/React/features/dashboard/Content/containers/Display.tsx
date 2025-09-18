import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Metrics from "./Metrics";
const SavedArticles = lazy(() => import('../UserArticles/containers/SavedArticles'));
const SavedResearchLayout = lazy(() => import('../SavedInvestigations/containers/SavedResearchLayout'));
import ResearchReview from "../SavedInvestigations/containers/ResearchReview";
import ArticleReview from "../UserArticles/containers/ArticleReview";
import AccManagement from "../../ProfileNavigation/AccountManagement/AccManagement";
import DisplayLoader from "@/components/React/Shared/Loaders/DisplayLoader";
import AppWindowIcon from "@/components/React/Shared/IconComponents/AppWindowIcon";

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
        <main className="w-full relative h-full min-h-screen px-4 md:px-6 lg:px-0 mx-auto ">
            {displayThisArticle && <ArticleReview key='article-review' />}
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
                {displayThisInvestigation && <ResearchReview key='research-review' />}

            </AnimatePresence>

        </main>
    );
};