import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { presentManagement } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import DashboardOption from "./DashboardOption";
import SignoutIcon from "@/components/React/Shared/IconComponents/SignoutIcon";
import SettingsIcon from "@/components/React/Shared/IconComponents/SettingsIcon";

export default function SessionOptions() {
    const profileNavigationState = useSelector((state: RootState) => state.profileNav)
    const { displayAccountManagement } = profileNavigationState



    return (
        <ul
            className="pt-4 mt-4 space-y-2 font-medium flex flex-col 
                            items-start border-t border-gray-200 dark:border-gray-700"
        >
            <DashboardOption name="Sign Out" actionCreator={showSignOut}>
                <SignoutIcon />
            </DashboardOption>

            <DashboardOption name="Manage Account" activeCondition={displayAccountManagement} actionCreator={presentManagement}>
                <SettingsIcon />
            </DashboardOption>
        </ul>

    )
}