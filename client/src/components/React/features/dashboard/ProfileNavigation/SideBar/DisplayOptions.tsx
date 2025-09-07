import DashboardOption from "./DashboardOption";
import BookmarkIcon from "@/components/React/Shared/IconComponents/BookmarkIcon";
import MetricsIcon from "@/components/React/Shared/IconComponents/MetricsIcon";
import InvestigationsIcon from "@/components/React/Shared/IconComponents/InvestigateIcon";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { presentDashboard, presentResearch, presentArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import React from "react";

function DisplayOptions() {
    const { displaySavedArticles, displayDashboard, displaySavedInvestigations } = useSelector((state: RootState) => state.profileNav, shallowEqual);


    return (
        <ul
            id="dashboard-controls"
            className="space-y-2 font-medium">

            <DashboardOption name="Metrics" activeCondition={displayDashboard} actionCreator={presentDashboard}>
                <MetricsIcon active={displayDashboard} />
            </DashboardOption>

            <DashboardOption name="Investigations" activeCondition={displaySavedInvestigations} actionCreator={presentResearch}>
                <InvestigationsIcon active={displaySavedInvestigations} />
            </DashboardOption>

            <DashboardOption name="Saved Articles" activeCondition={displaySavedArticles} actionCreator={presentArticles}>
                <BookmarkIcon active={displaySavedArticles} />
            </DashboardOption>
        </ul>
    );
};

export default React.memo(DisplayOptions);