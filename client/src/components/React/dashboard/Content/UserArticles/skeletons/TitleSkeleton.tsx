



export default function TitleSkeleton() {
    return (

        <div
            className="relative flex flex-col justify-center items-center 
        h-full sm:h-40 lg:h-52 w-full sm:w-60 md:w-72 lg:w-96 
        xl:w-112 group transition-opacity duration-200 ease-in-out"
        >
            <div className="h-6 md:h-10 mt-6 w-full  bg-[#26272B] rounded animate-pulse" />
            <div className="h-6 md:h-10 mt-6 w-full  bg-[#26272B] rounded animate-pulse" />
            <div className="h-auto flex gap-x-1.5 items-center justify-between w-full">
                <div className="h-4 mt-6 w-1/2 bg-[#26272B] rounded animate-pulse" />
                <div className="h-4 mt-6 w-1/2 bg-[#26272B] rounded animate-pulse" />
            </div>
            <div className="h-auto flex gap-x-1.5 items-center justify-between w-full">
                <div className="h-4 mt-6 w-1/2 bg-[#26272B] rounded animate-pulse" />
                <div className="h-4 mt-6 w-1/2 bg-[#26272B] rounded animate-pulse" />
            </div>
        </div>

    );
};
