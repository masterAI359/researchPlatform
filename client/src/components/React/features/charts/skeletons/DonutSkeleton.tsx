import { useEffect, useState } from "react";


interface ChartJsSkeleton {
    children: JSX.Element | null
};

export default function ChartJsSkeleton({ children }: ChartJsSkeleton): JSX.Element | null {

    return (
        <div
            className="relative
            mt-16 lg:p-8 opacity-0 animate-fade-in transition-opacity animation-delay-300ms"
        >
            <ChartSkeletonWrapper>
                {children}
            </ChartSkeletonWrapper>
        </div>
    )
};


interface ChartSkeletonWrapper {
    children: JSX.Element | null
};

export function ChartSkeletonWrapper({ children }): JSX.Element | null {

    return (
        <div className="mx-auto 2xl:max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 xl:pt-0 lg:gap-24 items-center">
                <SourceDiversitySkeleton />
                {children}
            </div>
        </div>
    )
};



export function DonutSkeletonChart(): JSX.Element | null {
    const message: string = 'loading...';
    const [typed, setTyped] = useState<string>("");
    const [currIndex, setCurrIndex] = useState<number>(0);

    useEffect(() => {

        const typeNextChar = (): void => {
            setTyped(prev => prev + message[currIndex]);
            setCurrIndex(prev => prev + 1);
        };

        const interval = setInterval(() => {
            if (currIndex < message.length) {
                typeNextChar();
            } else {
                setTyped("");
                setCurrIndex(0);
            };
        }, 300);

        return () => {
            clearInterval(interval);
        };

    }, [currIndex]);



    return (
        <div className="relative h-96 w-96 animate-pulse">
            {/* Legend skeleton */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 grid grid-cols-3 gap-x-6 gap-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-2">
                        {/* little colored square */}
                        <div className="h-3 w-3 rounded-sm bg-zinc-700/50" />
                        {/* text placeholder */}
                        <div className="h-3 w-16 rounded bg-zinc-700/50" />
                    </div>
                ))}
            </div>

            {/* Donut skeleton */}
            <div className="absolute inset-0 rounded-full border-[80px] border-zinc-700/50 border-t-zinc-800 border-l-zinc-800" />

            {/* Caption skeleton (below chart) */}
            <div className="absolute -bottom-8 left-1/2 w-32 h-6 -translate-x-1/2 mt-4">
                <p className="text-zinc-400 font-light tracking-tight text-sm text-center">
                    {typed}
                </p>
            </div>
        </div>

    )
};



function SourceDiversitySkeleton() {
    return (
        <section
            role="status"
            aria-busy="true"
            className={`rounded-2xl animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] 
                 opacity-40
                  p-6 md:p-8`}
        >
            <div className="space-y-4 md:space-y-5">
                {/* Eyebrow: "Comparative Analysis" */}
                <div className="h-4 md:h-5 w-40 md:w-48 rounded-md bg-white/10" />

                {/* Title: "Source diversity" */}
                <div className="h-10 md:h-14 w-2/3 rounded-md bg-white/10" />

                {/* Subcopy: two lines */}
                <div className="space-y-2">
                    <div className="h-4 md:h-5 w-full md:w-4/5 rounded-md bg-white/10" />
                    <div className="h-4 md:h-5 w-2/3 md:w-1/2 rounded-md bg-white/10" />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 my-2 md:my-3" />

                {/* Bullet list: three rows with icon + label */}
                <ul className="space-y-3 md:space-y-4">
                    {["w-72 md:w-96", "w-80 md:w-[28rem]", "w-72 md:w-[26rem]"].map(
                        (w, i) => (
                            <li key={i} className="flex items-center gap-3 md:gap-4">
                                {/* check icon placeholder */}
                                <span className="inline-block h-4 w-4 md:h-5 md:w-5 rounded-full bg-white/10" />
                                <span className={`block h-4 md:h-5 rounded-md bg-white/10 ${w}`} />
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* For screen readers */}
            <span className="sr-only">Loading source diversity card…</span>
        </section>
    );
}