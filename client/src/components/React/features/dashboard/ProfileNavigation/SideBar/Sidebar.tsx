import SideBarMenu from "./SideBarMenu"
import React from "react"

function SideBar() {
    return (
        <div className="relative md:left-0 h-full w-auto bg-black z-30">
            <SideBarMenu />
        </div>
    )
};

export default React.memo(SideBar);