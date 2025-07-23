import { useEffect, useState, useCallback } from "react";

export function useVirtuoso(items: any[]) {

    const [rendered, setRendered] = useState<number>(6);
    const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);
    const visible: SavedArticle[] = items.slice(0, rendered);


    const loadMore = useCallback(() => {
        if ((rendered >= items.length)) return;

        const diff = items.length - rendered;
        const next = Math.min(6, diff);

        return setTimeout(() => {

            if (next !== 6) {
                setFullyLoaded(true);
            }
            setRendered(rendered => rendered + next);
        }, 1000);
    }, [setRendered, setFullyLoaded, rendered, items.length]);


    useEffect(() => {
        if (fullyLoaded) return;

        const timeout = loadMore();

        return () => clearTimeout(timeout)

    }, [loadMore, fullyLoaded]);


    return { fullyLoaded, visible, loadMore };

};