import TitleSkeleton from "@/components/React/features/dashboard/Content/UserArticles/skeletons/TitleSkeleton";
import ImageSkeleton from "./ImageSkeleton";

export default function SavedArticleSkeleton() {

    return (
        <div
            className="animate-fade-in duration-200 ease-in flex flex-col-reverse sm:flex-row overflow-hidden
            h-auto sm:h-36 md:h-40 lg:h-[12.8rem] 2xl:h-60 my-16 w-full sm:w-4/5 md:w-11/12 2xl:w-3/4
            sm:gap-y-0 mx-auto rounded-3xl sm:grow-0 bg-white/5
            justify-between max-w-full items-stretch relative"
        >
            <TitleSkeleton />
            <ImageSkeleton />
        </div>
    );
};