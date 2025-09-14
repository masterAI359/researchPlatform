
export default function LinkPlaceholder() {

    return (
        <li
            className={`group cursor-pointer box-border list-none xl:min-h-72 xl:max-h-72 xl:min-w-80 xl:max-w-80
        lg:w-72 lg:h-72 md:h-60 md:w-60 sm:w-52 sm:h-52 h-80 w-80
        relative rounded-xl md:rounded-3xl text-white
        md:opacity-85 transition-all ease-in-out duration-200 overflow-y-hidden overflow-x-hidden
        shadow-material bg-white/15
      `}
        >
            {/* Top background block */}
            <div className="relative w-full m-0 p-0
             xl:max-h-36 xl:min-h-36 md:min-h-28 md:min-w-28 sm:max-h-24 sm:min-h-24 min-h-40 max-h-40 overflow-hidden"
            >
                <div className="absolute inset-0 w-full h-full
                animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] 
                 opacity-40 rounded-t-xl md:rounded-t-3xl" />
                <div className="relative z-10 p-4">
                    <div className="flex flex-col lg:gap-y-6">
                        <div className="h-4 w-3/4 animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)]  rounded" />
                    </div>
                </div>
            </div>

            {/* Bottom text area */}
            <div className="relative w-full mx-auto h-auto box-border pt-2">
                <div className="flex gap-4 items-center relative px-4">
                    <div className="rounded-full lg:h-8 lg:w-8 xs:h-6 xs:w-6 animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] " />
                    <div className="h-4 w-1/2 rounded animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] " />
                </div>
                <div className="h-full group mt-2 lg:mt-6 xl:mt-4 pt-2 opacity-100">
                    <blockquote className="relative px-4">
                        <div className="h-3 w-full rounded animate-shimmer bg-[length:200%_100%] 
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] " />
                    </blockquote>
                </div>
            </div>
        </li>
    )
};