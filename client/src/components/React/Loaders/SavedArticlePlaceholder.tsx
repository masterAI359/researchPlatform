



export default function ArticleSavedPlaceholder() {
    return (
        <li className="cursor-pointer">
            <div className="grid grid-cols-1 gap-12 lg:gap-24 md:grid-cols-2 items-center">
                <div className="group">
                    {/* Title skeleton */}
                    <div className="h-8 mt-6 w-3/4 rounded bg-[#26272B] animate-pulse" />
                    {/* Author/date skeleton */}
                    <div className="h-4 mt-6 w-1/2 rounded bg-[#26272B] animate-pulse" />
                    {/* Provider skeleton */}
                    <div className="h-4 mt-6 w-1/3 rounded bg-[#26272B] animate-pulse" />
                </div>
                {/* Image skeleton */}
                <div
                    className="aspect-[16/9] w-4/5 rounded-3xl bg-[#26272B] animate-pulse"
                    style={{ width: '560px', height: '380px' }}
                />
            </div>
        </li>
    );
}
