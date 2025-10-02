import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Metrics from "./Metrics";
const SavedArticles = lazy(() => import('../UserArticles/containers/SavedArticles'));
const SavedResearchLayout = lazy(() => import('../SavedInvestigations/containers/SavedResearchLayout'));
import AccManagement from "../../ProfileNavigation/AccountManagement/AccManagement";
import DisplayLoader from "@/components/React/Shared/Loaders/DisplayLoader";
import AppWindowIcon from "@/components/React/Shared/IconComponents/AppWindowIcon";
import { variants } from "@/motion/variants";
import React from "react";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";


function Tabs(): JSX.Element | null {
    const {
        displaySavedInvestigations,
        displaySavedArticles,
        displayAccountManagement,
        displayDashboard,
    } = useSelector((state: RootState) => state.profileNav, shallowEqual);



    return (
        <>
            <ErrorBoundary>
                <AnimatePresence mode="wait">
                    {displayDashboard && <Metrics key='dashboard' />}

                    {displayAccountManagement && <AccManagement key='settings' />}

                    {displaySavedArticles &&
                        <Suspense fallback={<DisplayLoader key='articles-loader'><AppWindowIcon /></DisplayLoader>}>
                            <SavedArticles key='articles' />
                        </Suspense>
                    }
                    {displaySavedInvestigations &&
                        <Suspense
                            fallback={
                                <DisplayLoader key='research-loader'>
                                    <AppWindowIcon />
                                </DisplayLoader>
                            }
                        >
                            <SavedResearchLayout
                                key='investigations'
                            />
                        </Suspense>
                    }

                </AnimatePresence>
            </ErrorBoundary>

        </>

    )
};


export default React.memo(Tabs);