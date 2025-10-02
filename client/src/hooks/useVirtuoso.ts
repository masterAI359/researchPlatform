import { useState, useCallback, useRef, useEffect, useMemo } from "react";

type LoadMore = () => void;

interface VirtuosoHook<T> {
    fullyLoaded: boolean,
    visible: T[],
    loadMore: LoadMore,
    numSkeletons: number | null
};


export function useVirtuoso<T>(items: T[], batchLength?: number): VirtuosoHook<T> {
    const [rendered, setRendered] = useState<number>(8);
    const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pendingTimeoutRef = useRef<boolean>(false);
    const visible = items.slice(0, rendered);
    const nextBatchLength: number = batchLength ?? 4;
    const remainingItems: number = items.length - rendered;
    const next: number = Math.min(nextBatchLength, remainingItems);
    const numSkeletons = useMemo(() => {

        return Math.min(nextBatchLength, remainingItems);
    }, [remainingItems, batchLength]);

    const loadMore: LoadMore = useCallback(() => {
        if (pendingTimeoutRef.current) return;
        if (fullyLoaded) return;
        if (rendered >= items.length) return;

        pendingTimeoutRef.current = true;



        timeRef.current = setTimeout((): void => {
            setRendered((rendered) => {
                const nextRender = rendered + next;
                if (nextRender >= items.length) {
                    setFullyLoaded(true);
                }
                return nextRender
            });

            pendingTimeoutRef.current = false;
            timeRef.current = null;

        }, 200);
    }, [items.length, nextBatchLength, rendered, fullyLoaded]);

    useEffect(() => {
        return () => {
            if (timeRef.current) clearTimeout(timeRef.current);
            pendingTimeoutRef.current = false;
        };
    }, []);

    return { fullyLoaded, visible, loadMore, numSkeletons };
};