import { useSelector, shallowEqual } from "react-redux";
import { useIsMobile } from "@/hooks/useIsMobile";
import { lazy, Suspense, useMemo } from "react";
import { RootState } from "@/ReduxToolKit/store";
import Display from "../../features/dashboard/Content/containers/Display";
import FooterBarLoader from "../../features/dashboard/ProfileNavigation/skeletons/FooterBarSkeleton";
import SidebarLoader from "../../features/dashboard/ProfileNavigation/skeletons/SidebarSkeleton";
import { AnimatePresence } from "framer-motion";
import SignOutModal from "../../session/forms/AuthForms/SignOutModal";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ViewSavedContent from "../../features/dashboard/Content/containers/ViewSavedContent";
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



    return (
        <article
            className={
                `w-full h-auto grid relative grid-cols-1 
            ease-in-out md:grid-cols-[auto,1fr] md:pt-8
            transition-opacity
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

            {(displayThisArticle || displayThisInvestigation) &&
                <ViewSavedContent />
            }

        </article>
    )
};