



export default function TitleSkeleton() {
    return (

        <div className="absolute h-80 w-168 left-4 md:left-0 group transition-opacity duration-200 ease-in-out">
            <div className="h-16 md:h-8 mt-6 w-3/4  bg-[#26272B] rounded animate-pulse" />
            <div className="h-4 mt-6 w-1/2 bg-[#26272B] rounded animate-pulse" />
            <div className="h-4 mt-6 w-1/3 bg-[#26272B] rounded animate-pulse" />
        </div>

    );
};
