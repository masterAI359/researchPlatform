import SavedArticleSkeleton from "../skeletons/SavedArticleSkeleton";

interface SkeletonMap {
    context: {
        fullyLoaded: boolean,
        scrolling?: boolean,
    }
};

export function SkeletonMap({ context }: SkeletonMap) {

    const { fullyLoaded } = context

    return (
        <div
            id='skeleton-loaders'
            className="relative h-auto w-auto flex 
             mx-auto flex-col items-end justify-center"
        >
            {!fullyLoaded &&
                Array.from({ length: 4 }, (_, i) => (<SavedArticleSkeleton key={i} />))
            }
        </div>
    );
};