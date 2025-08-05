import TitleSkeleton from "@/components/React/dashboard/Content/UserArticles/skeletons/TitleSkeleton"
import ImageSkeleton from "./ImageSkeleton"

export default function SavedArticleSkeleton() {

    return (
        <div
            className="animate-fade-in duration-200 ease-in flex flex-col-reverse sm:flex-row gap-y-12  
            h-76 sm:h-36 md:h-40 lg:h-[12.8rem] 2xl:h-60 my-16 w-full sm:w-4/5 md:w-11/12 2xl:w-3/4
            md:gap-y-0 mx-auto
            justify-between max-w-full items-center relative"
        >
            <TitleSkeleton />
            <ImageSkeleton />
        </div>
    )
};