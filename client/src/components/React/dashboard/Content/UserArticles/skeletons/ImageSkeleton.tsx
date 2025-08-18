import React from "react"

function ImageSkeleton() {
    return <div className="relative aspect-[16/9] object-cover sm:aspect-[2/1] 
    lg:aspect-[3/2] bg-[#26272B] animate-pulse rounded-3xl sm:rounded-l-none sm:rounded-r-3xl
    w-full sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-112
    h-full
     " />
};

export default React.memo(ImageSkeleton)