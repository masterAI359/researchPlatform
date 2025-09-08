import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useIsMobile } from "@/Hooks/useIsMobile";
import { lazy, Suspense, useLayoutEffect } from "react";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import { ScrollUp } from "../../../../helpers/ScrollToTop";
import Display from "../../features/dashboard/Content/containers/Display";
import { presentDashboard } from "@/ReduxToolKit/Reducers/UserContent/ProfileNavigationSlice";
import FooterBarLoader from "../../features/dashboard/ProfileNavigation/skeletons/FooterBarSkeleton";
import SidebarLoader from "../../features/dashboard/ProfileNavigation/skeletons/SidebarSkeleton";
import { AnimatePresence } from "framer-motion";
import SignOutModal from "../../Session/forms/AuthForms/SignOutModal";
import { NavigateFunction, useNavigate } from "react-router-dom";
const MobileProfileNav = lazy(() => import('../../features/dashboard/ProfileNavigation/mobile/ProfileMenu'));
const SideBar = lazy(() => import('../../features/dashboard/ProfileNavigation/SideBar/Sidebar'));


export default function Dashboard(): JSX.Element {
    const isMobile = useIsMobile();
    const { signingOut, activeSession } = useSelector((state: RootState) => state.auth, shallowEqual);
    const navigate: NavigateFunction = useNavigate();
    const { displayThisArticle, displayThisInvestigation } = useSelector(
        (s: RootState) => ({
            displayThisArticle: s.profileNav.displayThisArticle,
            displayThisInvestigation: s.profileNav.displayThisInvestigation,
        }),
        shallowEqual
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        ScrollUp();

        if (!activeSession) {
            navigate('/');
        };
    }, []);

    useLayoutEffect(() => {
        dispatch(presentDashboard());
    }, []);


    return (
        <article
            className={
                `w-full h-full grid relative grid-cols-1 scroll-smooth 
            animate-fade-in transition-all duration-300 
            ease-in-out md:grid-cols-[auto,1fr] md:pt-8
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

            {isMobile && !displayThisArticle && !displayThisInvestigation &&
                <Suspense fallback={<FooterBarLoader />}>
                    <MobileProfileNav />
                </Suspense>
            }

            <Display />
        </article>
    )
};