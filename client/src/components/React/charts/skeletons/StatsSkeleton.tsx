
export default function StatsSkeleton() {
    return (
        <section
            className="lg:p-8 animate-fade-in h-full w-full">
            <div className="mx-auto w-full 2xl:max-w-7xl">
                <div className="2xl:max-w-7xl relative isolate overflow-hidden bg-gradientup ring-1 ring-white/10 rounded-4xl px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left space-y-4 animate-pulse">
                        <div className="h-4 w-40 bg-white/20 rounded" />
                        <div className="h-8 w-3/4 bg-white/30 rounded" />
                        <div className="h-8 w-1/2 bg-zinc-400/20 rounded" />

                        <div className="h-4 w-full bg-white/10 rounded mt-6" />
                        <div className="h-4 w-1/2 bg-white/10 rounded" />

                        {/* StatBreakdown placeholder */}
                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="h-20 w-full bg-white/10 rounded-lg" />
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-16 h-80 lg:mt-8 flex items-center justify-center">
                        <div className="h-64 w-64 bg-white/10 rounded-2xl shadow-inner animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}
