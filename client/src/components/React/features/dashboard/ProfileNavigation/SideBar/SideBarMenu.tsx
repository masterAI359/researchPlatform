import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import DeleteUserAccount from "@/components/React/session/modals/DeleteUser";
import { RootState } from "@/ReduxToolKit/store";
import DisplayOptions from "./DisplayOptions";
import SessionOptions from "./SessionOptions";
import React from "react";

function SideBarMenu() {
    const showDeleteModal = useSelector((state: RootState) => state.profileNav.displayDeleteModal)

    return (
        <aside id="separator-sidebar"
            className="sticky top-0 z-30 w-full md:w-44 xl:w-52 h-screen transition-transform sm:translate-x-0 bg-black border-r border-white/10 overflow-y-auto" aria-label="Sidebar">
            <AnimatePresence>
                {showDeleteModal === true && <DeleteUserAccount />}
            </AnimatePresence>

            <div className="h-full px-3 py-16 overflow-y-auto bg-black border-r border-white/10">
                <DisplayOptions />
                <SessionOptions />

            </div>
        </aside>
    );
};

export default React.memo(SideBarMenu);