import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrolltoTop() {
    const { pathname } = useLocation()

    useEffect(() => {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [pathname])

    return null
}





export default ScrolltoTop



export const ScrollUp = (): void => {

    const scrollBehavior: ScrollToOptions = {
        top: 0,
        left: 0,
        behavior: 'instant' as any
    }

    window.scroll(scrollBehavior)
};