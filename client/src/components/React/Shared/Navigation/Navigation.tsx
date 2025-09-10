import MobileMenu from "@/components/React/Shared/Navigation/Mobile/MobileMenu";
import DeskTopMenu from "./Desktop/containers/DeskTopMenu";
import useMediaQuery from "@/hooks/useMediaQuery";
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
