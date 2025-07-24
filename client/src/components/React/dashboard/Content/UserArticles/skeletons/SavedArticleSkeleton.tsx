import TitleSkeleton from "@/components/React/dashboard/Content/UserArticles/skeletons/TitleSkeleton"
import ImageSkeleton from "./ImageSkeleton"

export default function SavedArticleSkeleton() {

    return (
        <div
            className="flex flex-col-reverse sm:flex-row gap-y-12 lg:h-88
            2xl:h-96 h-auto sm:p-6 md:p-0
            md:gap-y-0
            justify-between w-full max-w-full items-center relative my-8"
        >
            <TitleSkeleton />
            <ImageSkeleton />
        </div>
    )
};