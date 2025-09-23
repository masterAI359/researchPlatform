import TitleSkeleton from "@/components/React/features/dashboard/Content/UserArticles/skeletons/TitleSkeleton";
import ImageSkeleton from "./ImageSkeleton";

export default function SavedArticleSkeleton() {

    return (
        <div
            className="cursor-pointer
      relative rounded-3xl 
    overflow-hidden h-76 sm:h-40 
      lg:h-[12.8rem] 2xl:h-60 my-8 w-full md:w-11/12 
      2xl:w-full mx-auto group opacity-90"
        >
            <div
                className="bg-white/5
        flex flex-col-reverse justify-center
            sm:flex-row max-h-full rounded-3xl
            
            h-76 sm:h-40 
            lg:h-[12.8rem] 2xl:h-60 w-full
            relative items-stretch
            sm:justify-items-end 
            md:items-start"
            >
                <TitleSkeleton />
                <ImageSkeleton />
            </div>
        </div>

    );
};

