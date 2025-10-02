import SideBarMenu from "./SideBarMenu"
import React from "react"

function SideBar() {
    return (
        <div className="opacity-0 animate-fade-in animation-delay-300ms relative md:left-0 w-full md:w-44 xl:w-52 h-full bg-black">
            <SideBarMenu />
        </div>
    )
};

export default React.memo(SideBar);