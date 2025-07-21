import { useSelector, useDispatch } from "react-redux";
import { useIsMobile } from "@/Hooks/useIsMobile";
import { lazy, Suspense } from "react";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import { ScrollUp } from "../../../helpers/ScrollToTop";
import Display from "./ProfilePages/Display";
import { presentDashboard } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import FooterBarLoader from "../Loaders/FooterBarLoader";
import SidebarLoader from "../Loaders/SidebarLoader";
import { AnimatePresence } from "framer-motion";
import SignOutModal from "../Session/Forms/AuthForms/SignOutModal";
const MobileProfileNav = lazy(() => import('./ProfileNavigation/ProfileMenu'));
const SideBar = lazy(() => import('./ProfileNavigation/SideBar/Sidebar'));


export default function Dashboard() {
    const isMobile = useIsMobile();
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
            ease-in-out md:grid-cols-[auto,1fr] py-8
            ${signingOut
                    ? 'opacity-50 pointer-events-none'
                    : 'opacity-100 pointer-events-auto'
                } 
            `}>

            <AnimatePresence>
                {signingOut && <SignOutModal />}
            </AnimatePresence>

            {!isMobile &&
                <Suspense fallback={<SidebarLoader />}>
                    <SideBar />
                </Suspense>
            }

            {isMobile &&
                <Suspense fallback={<FooterBarLoader />}>
                    <MobileProfileNav />
                </Suspense>
            }

            <Display />
        </article>
    )
};