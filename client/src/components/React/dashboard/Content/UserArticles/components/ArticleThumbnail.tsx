import React from "react"

function ArticleThumbnail({ article }) {

    return (
        <img
            className={`
        w-full sm:w-5/6 lg:w-4/5 xl:w-2/3
        rounded-t-3xl sm:rounded-3xl bg-zinc-100 
        object-cover aspect-[3/2]
        `}
            src={article.image_url}
        />
    )
};

export default React.memo(ArticleThumbnail);