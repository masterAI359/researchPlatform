export default function BlueSkySkeleton({ context }) {
    return (
        <div className={`${context === 'investigate' &&
            'mt-12 md:mt-16'
            }
        animate-fade-in duration-300 ease-in-out
        w-full relative flex items-center justify-center`
        }>
            <div className="2xl:max-w-7xl 2xl:w-2/3 lg:w-3/4 w-4/5 rounded-4xl h-full relative
            px-2 sm:px-4 md:px-6 lg:px-12 pb-8 pt-6 bg-white/20 animate-pulse"
            >
                <div className="h-24 xl:h-36 w-full relative">
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white/5 rounded-3xl p-4 flex flex-col space-y-4 min-h-[130px]"
                        >
                            {/* Profile row */}
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-full bg-white/10" />
                                <div className="flex-1 h-4 bg-white/10 rounded w-3/5" />
                            </div>

                            {/* Post lines */}
                            <div className="space-y-2">
                                <div className="h-3 bg-white/10 rounded w-full" />
                                <div className="h-3 bg-white/10 rounded w-11/12" />
                                <div className="h-3 bg-white/10 rounded w-4/5" />
                            </div>

                            {/* Like or action bar */}
                            <div className="w-6 h-6 rounded-full bg-white/10 mt-2" />
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
};
