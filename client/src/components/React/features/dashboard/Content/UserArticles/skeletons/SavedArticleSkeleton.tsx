import TitleSkeleton from "@/components/React/features/dashboard/Content/UserArticles/skeletons/TitleSkeleton";
import ImageSkeleton from "./ImageSkeleton";

export default function SavedArticleSkeleton(): JSX.Element {

    return (
        <div
            className="cursor-pointer shrink-0
      relative rounded-3xl py-2 flex items-center justify-center
     h-76 sm:h-40 
      lg:h-[12.8rem] 2xl:h-60 w-full md:w-11/12 
      2xl:w-full mx-auto group opacity-90"
        >
            <div
                className="bg-white/5
        flex flex-col-reverse justify-center
            sm:flex-row max-h-full rounded-3xl
            overflow-hidden
            h-76 sm:h-40 
            lg:h-[12.8rem] 2xl:h-[15.5rem] w-full
            relative items-stretch
            sm:justify-items-between 
            md:items-start"
            >
                <TitleSkeleton />
                <ImageSkeleton />
            </div>
        </div>

    );
};

