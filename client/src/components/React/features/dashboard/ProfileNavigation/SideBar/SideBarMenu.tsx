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
            className="sticky left-0 top-8 z-30 w-full md:w-44 xl:w-52 h-screen transition-transform sm:translate-x-0 bg-black border-r border-white/10" aria-label="Sidebar">
            <AnimatePresence>
                {showDeleteModal === true && <DeleteUserAccount />}
            </AnimatePresence>

            <div className="h-dvh px-3 absolute left-0 top-0 bg-black">
                <div className="relative top-12 h-auto w-auto">
                    <DisplayOptions />
                    <SessionOptions />

                </div>

            </div>
        </aside>
    );
};

export default React.memo(SideBarMenu);