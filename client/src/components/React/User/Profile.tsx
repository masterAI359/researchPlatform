import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import ProfileMenu from "./ProfileNavigation/ProfileMenu";
import { ScrollUp } from "../AppRouting/ScrollToTop";
import Display from "./ProfilePages/Display";
import { presentDashboard } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import SideBar from "./ProfileNavigation/SideBar/Sidebar";

export default function Profile() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        ScrollUp();

        return () => {
            dispatch(presentDashboard());
        };
    }, []);


    return (
        <article
            className={
                `w-full h-full grid relative grid-cols-1 scroll-smooth 
            animate-fade-in transition-all duration-300 
            ease-in-out md:grid-cols-[auto,1fr] 2xl:py-12
            ${signingOut
                    ? 'opacity-50 pointer-events-none'
                    : 'opacity-100 pointer-events-auto'
                } 
            `}>
            <SideBar />
            <ProfileMenu />
            <Display />
        </article>
    )
};