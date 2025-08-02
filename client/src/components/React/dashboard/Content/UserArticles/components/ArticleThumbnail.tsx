import Trash from "@/components/React/Shared/IconComponents/Trash";
import React from "react"

function ArticleThumbnail({ article, deleteHandler }) {

    return (
        <div className="h-auto   w-full sm:w-5/6 lg:w-4/5 xl:w-2/3
        rounded-t-3xl sm:rounded-3xl
        object-cover aspect-[3/2] relative overflow-hidden">
            <img
                className={`
        w-full h-full object-cover rounded-t-3xl sm:rounded-3xl opacity-70
        `}
                src={article.image_url}
            />
            <Trash deleteHandler={deleteHandler} article={article} />
        </div>

    )
};

export default React.memo(ArticleThumbnail);