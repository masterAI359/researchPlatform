import { useCallback, useEffect, useRef, useState } from "react";

type SwapSkeletons = {
    fastScroll: boolean,
    clockScrollSpeed: (scrolling: boolean) => void
};

export function useSkeletons(delay: number): SwapSkeletons {
    const [fastScroll, setFastScroll] = useState<boolean>(false);
    const timeRef = useRef<number | null>(null); //typing this with number or null in tandem with the window API, as that returns a number for the expected clearTimeout ID type 

    const clearTimer = () => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        };
    };


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


    useEffect(() => {

        return clearTimer;
    }, []);


    return { fastScroll, clockScrollSpeed };
};