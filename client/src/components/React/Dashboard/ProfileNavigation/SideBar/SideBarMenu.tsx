import { useDispatch, useSelector } from "react-redux";
import { presentArticles, presentResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { AnimatePresence } from "framer-motion";
import DeleteUserAccount from "@/components/React/Session/modals/DeleteUser";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { presentManagement, presentDashboard } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import DashboardOption from "./DashboardOption";
import BookmarkIcon from "@/components/React/Shared/IconComponents/BookmarkIcon";
import DashboardIcon from "@/components/React/Shared/IconComponents/DashboardIcon";
import SettingsIcon from "@/components/React/Shared/IconComponents/SettingsIcon";
import SignoutIcon from "@/components/React/Shared/IconComponents/SignoutIcon";
import InvestigationsIcon from "@/components/React/Shared/IconComponents/InvestigateIcon";

export default function SideBarMenu({ }) {
    const showDeleteModal = useSelector((state: RootState) => state.profileNav.displayDeleteModal)
    const profileNavigationState = useSelector((state: RootState) => state.profileNav)
    const { displaySavedArticles, displayDashboard, displayAccountManagement, displaySavedInvestigations } = profileNavigationState
    const dispatch = useDispatch<AppDispatch>();


    return (


        <aside id="separator-sidebar"
            className="sticky top-0 z-30 w-full md:w-44 xl:w-52 h-screen transition-transform sm:translate-x-0 bg-black border-r border-white/10 overflow-y-auto" aria-label="Sidebar">
            <AnimatePresence>
                {showDeleteModal === true && <DeleteUserAccount />}
            </AnimatePresence>

            <div className="h-full px-3 py-16 overflow-y-auto bg-black border-r border-white/10">
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

            </div>
        </aside>
    );
};