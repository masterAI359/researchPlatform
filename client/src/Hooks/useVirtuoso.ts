import { useState, useCallback } from "react";

export function useVirtuoso(items: any[]) {

    const [rendered, setRendered] = useState<number>(8);
    const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);
    const visible: SavedArticle[] = items.slice(0, rendered);


    const loadMore = useCallback(() => {

        if ((rendered >= items.length) || (fullyLoaded === true)) return;

        const diff = items.length - rendered;
        const next = Math.min(6, diff);

        return setTimeout(() => {

            if (next !== 6) {
                setFullyLoaded(true);
            }
            setRendered(rendered => rendered + next);
        }, 400);
    }, [setRendered, setFullyLoaded, rendered, fullyLoaded]);


    return { fullyLoaded, visible, loadMore };

};