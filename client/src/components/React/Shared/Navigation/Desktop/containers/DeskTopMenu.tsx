import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import React from "react"
import DesktopNavOptions from "./DesktopNavOptions"

function DeskTopMenu() {
    const signingOut = useSelector((state: RootState) => state.auth.signOut)

    return (
        <div className={`fixed top-0 w-full inset-x-0 z-40 md:block xs:hidden sm:hidden transition-all duration-200 ease-in-out delay-200
        ${signingOut ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}
        `}>
            <div className="md:w-dvw mx-auto">
                <div className="w-full shadow-black mt-0 py-1 mx-auto border-b
			 border-white/10 shadow-thick backdrop-blur-xl backdrop-filter
			 md:items-center h-fit">
                    <DesktopNavOptions />
                </div>
            </div>
        </div>
    );
};


export default React.memo(DeskTopMenu);