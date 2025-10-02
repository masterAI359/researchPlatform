import { useSelector, shallowEqual } from "react-redux";
import { useIsMobile } from "@/hooks/useIsMobile";
import { lazy, Suspense, useMemo } from "react";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import Display from "../../features/dashboard/Content/containers/Display";
import FooterBarLoader from "../../features/dashboard/ProfileNavigation/skeletons/FooterBarSkeleton";
import SidebarLoader from "../../features/dashboard/ProfileNavigation/skeletons/SidebarSkeleton";
import { AnimatePresence } from "framer-motion";
import SignOutModal from "../../session/forms/AuthForms/SignOutModal";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ArticleReview from "../../features/dashboard/Content/UserArticles/containers/ArticleReview";
import ResearchReview from "../../features/dashboard/Content/SavedInvestigations/containers/ResearchReview";
const MobileProfileNav = lazy(() => import('../../features/dashboard/ProfileNavigation/mobile/ProfileMenu'));
const SideBar = lazy(() => import('../../features/dashboard/ProfileNavigation/SideBar/Sidebar'));


export default function Dashboard(): JSX.Element {
    const isMobile = useIsMobile();
    const { signingOut, activeSession } = useSelector((state: RootState) => state.auth, shallowEqual);
    const navigate: NavigateFunction = useNavigate();
    const { displayThisArticle, displayThisInvestigation, displayAccountManagement } = useSelector(
        (s: RootState) => ({
            displayThisArticle: s.profileNav.displayThisArticle,
            displayThisInvestigation: s.profileNav.displayThisInvestigation,
        }),
        shallowEqual
    );
    const showDashContent = useMemo(() => {
        const inDashboard: boolean = !displayThisArticle && !displayThisInvestigation;
        return inDashboard;
    }, [displayThisArticle, displayThisInvestigation]);

    useEffect(() => {

        if (!activeSession) {
            navigate('/');
        };
    }, []);

    return (
        <article
            className={
                `w-full h-auto grid relative grid-cols-1 
                opacity-0 animation-delay-200ms 
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

            <AnimatePresence mode="wait">
                {displayThisInvestigation && <ResearchReview key='research-review' />}
                {displayThisArticle && <ArticleReview key='article-review' />}
                {!displayThisArticle && (!displayThisInvestigation) && <Display key="dashbaord-display" />}

            </AnimatePresence>

        </article>
    )
};