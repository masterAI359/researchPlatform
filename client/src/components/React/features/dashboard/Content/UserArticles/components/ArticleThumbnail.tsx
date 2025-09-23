import Trash from "@/components/React/Shared/IconComponents/Trash";
import React from "react"
import ImageSkeleton from "../skeletons/ImageSkeleton";

interface SavedThumbnail {
    article: SavedArticle,
    deleteHandler: (article: SavedArticle) => Promise<void>,
    articleDeleted: boolean,
    fastScroll: boolean
};

type FetchPriority = 'high' | 'low' | 'auto';

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    fetchpriority?: FetchPriority; // lowercase HTML attr
};

function ArticleThumbnail({ article, deleteHandler, fastScroll, articleDeleted }: SavedThumbnail): React.ReactNode {


    const imgProps: ImgProps = {
        src: article.image_url,
        alt: article.title,
        loading: 'lazy',
        decoding: 'async',
        fetchpriority: 'auto',
        className: 'w-full h-full object-cover rounded-t-3xl sm:rounded-r-3xl sm:rounded-t-none opacity-70 group-hover:opacity-100 transition-opacity duration-200 ease-in-out',
        onError: (e) => {
            const img = e.currentTarget;
            img.onerror = null;
            img.src = '/images/logos/fallback.jpg';
        },
    };

    return (
        <div className="h-full w-full animate-fade-in opacity-80 group-hover:opacity-95 transition-opacity duration-200 ease-in-out
        max-h-[9.6rem] sm:max-h-full md:max-w-60 lg:max-w-72 xl:max-w-112
        rounded-t-3xl sm:rounded-r-3xl sm:rounded-t-none
        object-cover relative overflow-hidden">
            {fastScroll && <ImageSkeleton />}
            {!fastScroll && <Thumbnail imgProps={imgProps} />}
            <Trash deleteHandler={deleteHandler} article={article} articleDeleted={articleDeleted} />
        </div>

    )
};

export default React.memo(ArticleThumbnail);



function Thumbnail({ imgProps }) {


    return (
        <img {...imgProps} />
    )
}