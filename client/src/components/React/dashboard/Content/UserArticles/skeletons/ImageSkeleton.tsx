import React from "react"

//sm:w-60 md:w-72 lg:w-80 xl:w-96

function ImageSkeleton() {
    return <div className="relative aspect-[16/9] object-cover sm:aspect-[2/1] 
    lg:aspect-[3/2] bg-[#26272B] animate-pulse rounded-t-3xl sm:rounded-l-none sm:rounded-r-3xl sm:rounded-tl-none
    w-full h-full md:max-w-60 lg:max-w-full
     ">
    </div>
};

export default React.memo(ImageSkeleton)