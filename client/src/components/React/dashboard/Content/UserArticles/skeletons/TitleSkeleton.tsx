import React from "react";

function TitleSkeleton() {



    return (

        <div
            className="relative flex flex-col justify-center items-center bg-white/5 
        h-32 sm:h-40 lg:h-52 w-full sm:w-60 md:w-[16rem] lg:w-96 p-5 md:p-5 lg:p-8 xl:p-7 2xl:p-6
        xl:w-112 group transition-opacity duration-200 ease-in-out"
        >

            <div className="h-4 lg:h-10 mt-4 lg:mt-6 w-full bg-[length:200%_100%] bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] rounded animate-shimmer"
            />
            <div className="h-4 lg:h-10 mt-4 lg:mt-6 w-full bg-[length:200%_100%] bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] rounded animate-shimmer"
            />
            <div className="h-auto flex gap-x-1.5 items-center justify-between w-full">
                <div className="h-2 mt-4 lg:mt-6  w-1/2 bg-[length:200%_100%] bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] rounded animate-shimmer" />
                <div className="h-2 mt-4 lg:mt-6  w-1/2 bg-[length:200%_100%] bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] rounded animate-shimmer" />
            </div>
            <div className="h-auto flex gap-x-1.5 items-center justify-between w-full">
                <div className="h-2 mt-4 lg:mt-6 w-1/2 bg-[length:200%_100%] bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] rounded animate-shimmer" />
                <div className="h-2 mt-4 lg:mt-6 w-1/2 bg-[length:200%_100%] bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] rounded animate-shimmer" />
            </div>
        </div>

    );
};

export default React.memo(TitleSkeleton);