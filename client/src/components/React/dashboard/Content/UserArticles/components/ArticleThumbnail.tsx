import Trash from "@/components/React/Shared/IconComponents/Trash";
import React from "react"

interface SavedThumbnail {
    article: SavedArticle,
    deleteHandler: (article: SavedArticle) => Promise<void>,
    priority: boolean
};

type FetchPriority = 'high' | 'low' | 'auto';

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    fetchpriority?: FetchPriority; // lowercase HTML attr
};

function ArticleThumbnail({ article, deleteHandler, priority }: SavedThumbnail): React.ReactNode {


    const imgProps: ImgProps = {
        src: article.image_url,
        alt: article.title,
        loading: priority ? 'eager' : 'lazy',
        decoding: 'async',
        fetchpriority: priority ? 'high' : 'auto', // lowercase attr
        className: 'w-full h-full object-cover rounded',
        onError: (e) => {
            const img = e.currentTarget;
            img.onerror = null;
            img.src = '/images/logos/fallback.jpg';
        },
    };

    return (
        <div className="h-full w-full animate-fade-in
        rounded-t-3xl sm:rounded-r-3xl sm:rounded-t-none
        object-cover relative overflow-hidden">
            <Thumbnail imgProps={imgProps} />
            <Trash deleteHandler={deleteHandler} article={article} />
        </div>

    )
};

export default React.memo(ArticleThumbnail);



function Thumbnail({ imgProps }) {


    return (
        <img {...imgProps} />
    )
}