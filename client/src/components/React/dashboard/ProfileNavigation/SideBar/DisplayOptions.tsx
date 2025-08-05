import DashboardOption from "./DashboardOption";
import BookmarkIcon from "@/components/React/Shared/IconComponents/BookmarkIcon";
import MetricsIcon from "@/components/React/Shared/IconComponents/MetricsIcon";
import InvestigationsIcon from "@/components/React/Shared/IconComponents/InvestigateIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { presentDashboard, presentResearch, presentArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";

export default function DisplayOptions() {
    const profileNavigationState = useSelector((state: RootState) => state.profileNav)
    const { displaySavedArticles, displayDashboard, displaySavedInvestigations } = profileNavigationState

    return (
        <ul className="space-y-2 font-medium">

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