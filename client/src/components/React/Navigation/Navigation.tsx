import MobileMenu from "./Mobile/MobileMenu"
import DeskTopContent from "./Desktop/DeskTopContent"
import useMediaQuery from "@/Hooks/useMediaQuery"

export default function Navigation() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<>
			{isDesktop && <DeskTopContent />}
			{!isDesktop && <MobileMenu />}
		</>
	)

}
