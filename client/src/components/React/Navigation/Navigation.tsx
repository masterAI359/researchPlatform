import { useEffect, useLayoutEffect, useState } from "react"
import MobileMenu from "./MobileMenu"
import DeskTopContent from "./DeskTopContent"

export default function Navigation() {
	const [mobileView, setMobileView] = useState(false)


	return (
		<>
			<DeskTopContent />
			<MobileMenu />
		</>
	)

}
