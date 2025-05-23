import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useLayoutEffect } from "react";
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

export default function Profile() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);
    const displaySavedInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations)
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const displayAccountManagement = useSelector((state: RootState) => state.profileNav.displayAccountManagement)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const dispatch = useDispatch<AppDispatch>()

    useLayoutEffect(() => {
        if(id) {
            dispatch(fetchSavedArticles(id))
            dispatch(fetchSavedInvestigations(id))
        }

        ScrollUp();
        
    }, [])

    return (
        <article className={`w-full h-full flex relative justify-center scroll-smooth 
        animate-fade-in transition-all duration-300 ease-in-out
        ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <SideBarMenu />
                <ProfileMenu />
            <main className="w-full flex relative justify-end xl:justify-center">
                <section className="lg:p-8 w-full">
                    <div className="mx-auto w-full pb-8 relative flex justify-center 2xl:px-24">
                        <div className="w-full h-auto py-12">
                            <AnimatePresence>
                                
                                {displaySavedArticles && <SavedArticles />}
                                {displaySavedInvestigations && <Dashboard/>}
                                {displayAccountManagement && <DesktopAccMngmt />}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </main>
        </article>
    )
}