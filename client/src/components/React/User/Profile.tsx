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

export default function Profile() {
    const displaySavedInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations)
    const displaySavedArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const dispatch = useDispatch<AppDispatch>()

    useLayoutEffect(() => {
        if(id) {
            dispatch(fetchSavedArticles(id))
            dispatch(fetchSavedInvestigations(id))
        }
        
    }, [id])

    return (
        <article className={`w-full h-full flex relative justify-center scroll-smooth`}>
            <SideBarMenu />
            <main className="w-full flex relative justify-end xl:justify-center">
                <section className="lg:p-8 w-full lg:w-auto">
                    <div className="mx-auto 2xl:max-w-7xl pb-8 lg:px-16 md:px-12 xs:px-2 xl:px-2 items-center relative w-full">
                        <div className="relative 2xl:max-w-7xl 2xl:min-w-[78rem] lg:flex-col overflow-hidden p-8 lg:flex lg:p-12">
                            <div className="pb-12 flex">
                                <div>
                                    <span className="text-blue-400 2xl:text-lg font-light tracking-tight w-fit relative">Your Library</span>
                                </div>
                            </div>

                            <ProfileMenu />
                        </div>

                        <div className="2xl:max-w-7xl flex flex-col lg:px-0">
                            <AnimatePresence mode="wait">
                                {displaySavedArticles && <SavedArticles />}
                                {displaySavedInvestigations && <SavedResearchLayout />}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </main>
        </article>
    )
}