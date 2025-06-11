import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./Dashboard";
import SavedArticles from "./DisplayContent/UserArticles/SavedArticles";
import SavedResearchLayout from "./DisplayContent/SavedInvestigations.tsx/SavedResearchLayout";
import DesktopAccMngmt from "./ProfileNavigation/AccountManagement/DesktopAccMngmt";
import ResearchReview from "./ResearchReview";
import ArticleReview from "./ArticleReview";

export default function Display() {
    const displaySavedInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations)
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const displayAccountManagement = useSelector((state: RootState) => state.profileNav.displayAccountManagement)
    const displayDashboard = useSelector((state: RootState) => state.profileNav.displayDashboard);
    const displayThisInvestigation = useSelector((state: RootState) => state.profileNav.displayThisInvestigation);
    const displayThisArticle = useSelector((state: RootState) => state.profileNav.displayThisArticle);


    return (
        <main className="w-full flex relative h-auto md:px-6 lg:px-0">
            <AnimatePresence mode="wait">
                {displayDashboard && <Dashboard />}
                {displaySavedArticles && <SavedArticles />}
                {displaySavedInvestigations && <SavedResearchLayout />}
                {displayAccountManagement && <DesktopAccMngmt />}
                {displayThisInvestigation && <ResearchReview />}
                {displayThisArticle && <ArticleReview />}
            </AnimatePresence>
        </main>
    )

}