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
    const dispatch = useDispatch<AppDispatch>();

    useLayoutEffect(() => {
        if (id) {
            dispatch(fetchSavedArticles())
            dispatch(fetchSavedInvestigations(id))
        }

        ScrollUp();

    }, []);


    useEffect(() => {



        return () => {
            dispatch(presentDashboard());
        };
    }, []);


    return (
        <article className={`w-full h-full grid relative grid-cols-1 scroll-smooth 
        animate-fade-in transition-all duration-300 ease-in-out md:grid-cols-[auto,1fr]
        ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'} 2xl:py-12`}>
            <div className="hidden md:block h-full">
                <SideBarMenu />
            </div>

            <ProfileMenu />
            <Display />
        </article>
    )
}