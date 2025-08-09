import MobileMenu from "./Mobile/MobileMenu"
import DeskTopMenu from "./Desktop/DeskTopMenu"
import useMediaQuery from "@/Hooks/useMediaQuery"
import React from "react";

function Navigation() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<>
			{isDesktop && <DeskTopMenu />}
			{!isDesktop && <MobileMenu />}
		</>
	)
};


export default React.memo(Navigation);
