import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {

        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const handleWindow = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleWindow);

        return () => {
            mediaQuery.removeEventListener('change', handleWindow);
        }

    }, [breakpoint]);

    return isMobile;
};