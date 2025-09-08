import SideBarMenu from "./SideBarMenu"
import React from "react"

function SideBar() {
    return (
        <div className="hidden md:block h-full">
            <SideBarMenu />
        </div>
    )
};


export default React.memo(SideBar);