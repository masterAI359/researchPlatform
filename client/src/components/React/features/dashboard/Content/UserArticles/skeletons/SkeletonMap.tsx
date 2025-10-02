import { useMemo } from "react";
import SavedArticleSkeleton from "../skeletons/SavedArticleSkeleton";
import React from "react";

interface SkeletonMap {
    context: {
        fullyLoaded: boolean,
        numSkeletons: number | null,
    };
};

function SkeletonMap({ context }: SkeletonMap): JSX.Element | null {

    const { fullyLoaded, numSkeletons } = context;
    const footer_height: string | null = useMemo((): string | null => {
        let h: string | null = null;
        if (fullyLoaded) {
            h = '0'
        } else if (numSkeletons < 4) {
            h = 'auto'
        } else {
            h = 'dvh';
        };
        return h;
    }, [numSkeletons, fullyLoaded]);

    return (
        <div
            id='skeleton-loaders'
            className={`relative w-auto flex
             mx-auto flex-col items-center justify-start transition-opacity duration-200 ease-inf
             h-${footer_height}
             ${fullyLoaded ? 'opacity-0' : 'opacity-100'}
             `}
        >
            {!fullyLoaded &&
                Array.from({ length: numSkeletons }, (_, i) => (<SavedArticleSkeleton key={i} />))
            }
        </div>
    );
};


export default React.memo(SkeletonMap)