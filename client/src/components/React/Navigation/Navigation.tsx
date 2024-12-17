import { useEffect, useLayoutEffect, useState } from "react"
import MobileMenu from "./MobileMenu"
import DeskTopContent from "./DeskTopContent"

export default function Navigation({ width }) {
	const [mobileView, setMobileView] = useState(false)



	if (width > 700) {
		return <DeskTopContent />
	} else {
		return <MobileMenu />
	}

}
