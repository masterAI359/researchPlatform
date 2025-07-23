



export default function TitleSkeleton() {
    return (

        <div className="relative flex flex-col justify-center items-center 
        h-full w-full md:w-full lg:w-128 xl:w-168 group transition-opacity duration-200 ease-in-out">
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
