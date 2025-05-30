import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect, useLayoutEffect } from "react";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { fetchSavedInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";
import { AnimatePresence } from "framer-motion";
import ProfileMenu from "./ProfileNavigation/ProfileMenu";
import SideBarMenu from "./ProfileNavigation/SideBar/SideBarMenu";
import SavedArticles from "./DisplayContent/UserArticles/SavedArticles";
import SavedResearchLayout from "./DisplayContent/SavedInvestigations.tsx/SavedResearchLayout";
import DesktopAccMngmt from "./ProfileNavigation/AccountManagement/DesktopAccMngmt";
import { ScrollUp } from "../AppRouting/ScrollToTop";
import Dashboard from "./Dashboard";
import { presentDashboard, presentResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";

export default function Profile() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);
    const displaySavedInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations)
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const displayAccountManagement = useSelector((state: RootState) => state.profileNav.displayAccountManagement)
    const displayDashboard = useSelector((state: RootState) => state.profileNav.displayDashboard);
    const id = useSelector((state: RootState) => state.auth.user_id)
    const articles = useSelector((state: RootState) => state.userdata.userArticles);
    const dispatch = useDispatch<AppDispatch>()

    // const getAllSidesRatings = () => {}

    console.log(presentDashboard, presentResearch);

    useLayoutEffect(() => {
        if (id) {
            dispatch(fetchSavedArticles(id))
            dispatch(fetchSavedInvestigations(id))
        }



        ScrollUp();

    }, []);

    useEffect(() => { }, [displayDashboard, displaySavedArticles, displaySavedInvestigations, displayAccountManagement]);

    return (
        <article className={`w-full h-full flex relative md:justify-between justify-center scroll-smooth 
        animate-fade-in transition-all duration-300 ease-in-out
        ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <SideBarMenu />
            <ProfileMenu />
            <main className="w-full flex border relative h-auto xl:py-32 lg:py-24">
                <AnimatePresence>
                    {displayDashboard && <Dashboard />}
                    {displaySavedArticles && <SavedArticles />}
                    {displaySavedInvestigations && <SavedResearchLayout />}
                    {displayAccountManagement && <DesktopAccMngmt />}
                </AnimatePresence>
            </main>
        </article>
    )
}