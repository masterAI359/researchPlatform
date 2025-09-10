import { useEffect, useState } from "react";

function useMediaQuery (query: string): boolean {
    const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {

        const media = window.matchMedia(query);
        const listener = () => setIsDesktop(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener)
    }, [query]);
    return isDesktop;
}

export default useMediaQuery;