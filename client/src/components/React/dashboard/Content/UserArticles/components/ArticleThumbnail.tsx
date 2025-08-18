import Trash from "@/components/React/Shared/IconComponents/Trash";
import React from "react"

function ArticleThumbnail({ article, deleteHandler }): JSX.Element {

    return (
        <div className="sm:h-full h-40 w-full sm:w-full md:w-11/12 xl:w-auto
        rounded-t-3xl sm:rounded-r-3xl sm:rounded-t-none
        object-cover  relative overflow-hidden">
            <img
                className="w-full aspect-[3/2] h-full object-cover opacity-75"
                src={article.image_url}
            />
            <Trash deleteHandler={deleteHandler} article={article} />
        </div>

    )
};

export default React.memo(ArticleThumbnail);