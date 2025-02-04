import { useEffect, useLayoutEffect, useState } from "react"
import MobileMenu from "./Mobile/MobileMenu"
import DeskTopContent from "./Desktop/DeskTopContent"

export default function Navigation() {
	const [mobileView, setMobileView] = useState(false)


	return (
		<>
			<DeskTopContent />
			<MobileMenu />
		</>
	)

}
