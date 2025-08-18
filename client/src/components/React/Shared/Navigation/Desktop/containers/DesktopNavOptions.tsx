import React from "react";
import HomeButton from "../components/buttons/HomeButton";
import DesktopRouteLinks from "./DesktopRouteLinks";
import DashboardButton from "../components/buttons/DashboardButton";

function DesktopNavOptions(): JSX.Element {

    return (
        <div className="relative flex items-center w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
            <HomeButton />
            <div className="w-full h-auto flex items-center gap-x-10">
                <DesktopRouteLinks />
                <DashboardButton />
            </div>
        </div>
    )
}

export default React.memo(DesktopNavOptions)