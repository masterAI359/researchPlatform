import { useCallback, useRef, useState } from "react";

type SwapSkeletons = {
    fastScroll: boolean,
    clockScrollSpeed: (scrolling: boolean) => void
};

export function useSkeletons(delay: number): SwapSkeletons {
    const [fastScroll, setFastScroll] = useState<boolean>(false);
    const timeRef = useRef<number | null>(null);

    const clockScrollSpeed = useCallback((scrolling: boolean) => {

        if (scrolling) {
            if (timeRef.current) clearTimeout(timeRef.current);
            timeRef.current = null;

            setFastScroll(true);
        } else {

            if (timeRef.current) clearTimeout(timeRef.current);
            timeRef.current = window.setTimeout(() => {

                setFastScroll(false);
                timeRef.current = null;
            }, delay);
        }
    }, [delay]);

    return { fastScroll, clockScrollSpeed };
};