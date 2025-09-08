import React from "react"

function ImageSkeleton() {
    return <div className="relative aspect-[16/9] object-cover 
    sm:aspect-[2/1] lg:aspect-[3/2] bg-[#26272B] 
    animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] 
    rounded-t-3xl sm:rounded-l-none sm:rounded-r-3xl 
    sm:rounded-tl-none w-full h-full"
    >
    </div>
};

export default React.memo(ImageSkeleton)