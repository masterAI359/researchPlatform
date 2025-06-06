import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect, useLayoutEffect } from "react";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { fetchSavedInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";
import ProfileMenu from "./ProfileNavigation/ProfileMenu";
import SideBarMenu from "./ProfileNavigation/SideBar/SideBarMenu";
import { ScrollUp } from "../AppRouting/ScrollToTop";
import Display from "./Display";
import { presentDashboard } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";

export default function Profile() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);
    const id = useSelector((state: RootState) => state.auth.user_id)
    const dispatch = useDispatch<AppDispatch>()

    useLayoutEffect(() => {
        if (id) {
            dispatch(fetchSavedArticles(id))
            dispatch(fetchSavedInvestigations(id))
        }

        ScrollUp();

    }, []);


    useEffect(() => {

        // return () => {
        //     dispatch(presentDashboard());
        // };
    }, []);


    return (
        <article className={`w-full h-full flex relative md:justify-between justify-center scroll-smooth 
        animate-fade-in transition-all duration-300 ease-in-out
        ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <SideBarMenu />
            <ProfileMenu />
            <Display />
        </article>
    )
}