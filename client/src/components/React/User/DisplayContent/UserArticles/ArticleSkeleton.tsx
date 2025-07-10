import TitleSkeleton from "@/components/React/Loaders/TitleSkeleton"
import ImageSkeleton from "./ImageSkeleton"

export default function ArticleSkeleton() {

    return (
        <div
            className="flex flex-col md:flex-row gap-y-12 
            2xl:h-88 h-auto xl:px-12 lg:px-3 md:px-4 px-0
            md:gap-y-0 md:gap-x-16 lg:gap-x-24
            justify-between w-full items-center absolute bottom-0"
        >
            <TitleSkeleton />
            <ImageSkeleton />
        </div>
    )
}