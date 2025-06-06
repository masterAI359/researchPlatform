import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./Dashboard";
import SavedArticles from "./DisplayContent/UserArticles/SavedArticles";
import SavedResearchLayout from "./DisplayContent/SavedInvestigations.tsx/SavedResearchLayout";
import DesktopAccMngmt from "./ProfileNavigation/AccountManagement/DesktopAccMngmt";

export default function Display() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);
    const displaySavedInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations)
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const displayAccountManagement = useSelector((state: RootState) => state.profileNav.displayAccountManagement)
    const displayDashboard = useSelector((state: RootState) => state.profileNav.displayDashboard);


    return (
        <main className="w-full flex relative h-auto lg:py-24">
            <AnimatePresence>
                {displayDashboard && <Dashboard />}
                {displaySavedArticles && <SavedArticles />}
                {displaySavedInvestigations && <SavedResearchLayout />}
                {displayAccountManagement && <DesktopAccMngmt />}
            </AnimatePresence>
        </main>
    )

}