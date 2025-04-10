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

export default function Profile() {
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
        
    }, [id])

    return (
        <article className={`w-full h-full flex relative justify-center scroll-smooth animate-fade-in transition-all duration-300 ease-in-out`}>
            <SideBarMenu />
                            <ProfileMenu />
            <main className="w-full flex relative justify-end xl:justify-center">
                <section className="lg:p-8 w-full">
                    <div className="mx-auto w-full pb-8 relative flex justify-end 2xl:px-24">
                        <div className="w-full sm:w-11/12 md:w-2/3 2xl:w-3/4 py-12">
                            <AnimatePresence>
                                {displaySavedArticles && <SavedArticles />}
                                {displaySavedInvestigations && <SavedResearchLayout />}
                                {displayAccountManagement && <DesktopAccMngmt />}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </main>
        </article>
    )
}