
export function InvestigationSkeleton() {


    return (
        <div className={`
        md:flex w-full justify-center h-auto animate-pulse relative`}>
            {/* Timestamp Skeleton */}
            <div className="relative pl-7 md:w-2/3 md:pl-0 text-sm font-light tracking-tight md:pr-6 text-white md:text-right">
                <div className="h-4 w-32 absolute  bottom-1.5 sm:-bottom-1.5 right-32 sm:right-8 bg-neutral-700 rounded" />
            </div>

            {/* Right-hand content block */}
            <div className="relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16 md:pb-24">
                {/* Vertical timeline line */}
                <div className="absolute bottom-0 left-0 w-px bg-blue-400 -top-3 md:top-2.5" />
                {/* Dot */}
                <div className="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-black/10 bg-blue-400 md:top-[0.4375rem]" />

                <div className="items-center w-fit">
                    <div className="w-full flex flex-col gap-2">
                        {/* Thumbnail box */}
                        <div className="w-[200px] h-[160px] rounded-2xl bg-neutral-800" />

                        {/* Topic label */}
                        <div className="w-16 h-4 bg-neutral-700 rounded mt-6" />

                        {/* Idea lines */}
                        <div className="w-64 h-4 bg-neutral-700 rounded" />
                        <div className="w-52 h-4 bg-neutral-700 rounded" />

                        {/* Button placeholder */}
                        <div className="mt-4 w-24 h-9 rounded-full bg-neutral-700" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function InvestigationSkeletons({ context }) {

    const { fullyLoaded } = context

    return (
        <div
            id='skeleton-loaders'
            className="relative h-auto w-auto flex 
                flex-col items-end justify-center"
        >
            {!fullyLoaded &&
                Array.from({ length: 1 }, (_, i) => (<InvestigationSkeleton key={i} />))
            }
        </div>
    );
};

