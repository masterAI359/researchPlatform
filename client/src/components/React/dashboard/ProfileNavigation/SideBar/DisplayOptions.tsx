import DashboardOption from "./DashboardOption";
import BookmarkIcon from "@/components/React/Shared/IconComponents/BookmarkIcon";
import DashboardIcon from "@/components/React/Shared/IconComponents/DashboardIcon";
import InvestigationsIcon from "@/components/React/Shared/IconComponents/InvestigateIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { presentDashboard, presentResearch, presentArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";

export default function DisplayOptions() {
    const profileNavigationState = useSelector((state: RootState) => state.profileNav)
    const { displaySavedArticles, displayDashboard, displayAccountManagement, displaySavedInvestigations } = profileNavigationState

    return (
        <ul className="space-y-2 font-medium">

            <DashboardOption name="Dashboard" activeCondition={displayDashboard} actionCreator={presentDashboard}>
                <DashboardIcon />
            </DashboardOption>

            <DashboardOption name="Investigations" activeCondition={displaySavedInvestigations} actionCreator={presentResearch}>
                <InvestigationsIcon />
            </DashboardOption>

            <DashboardOption name="Saved Articles" activeCondition={displaySavedArticles} actionCreator={presentArticles}>
                <BookmarkIcon />
            </DashboardOption>
        </ul>
    );
};