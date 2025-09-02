import React from "react";
import TrashTooltip from "../../dashboard/Content/UserArticles/tooltips/TrashTooltip";

interface Trash {
    deleteHandler?: (article: SavedArticle) => Promise<void>,
    article: SavedArticle,
    articleDeleted: boolean
};

function Trash({ article, deleteHandler, articleDeleted }: Trash) {


    return (
        <div className="absolute top-3 right-3 z-10 group">
            <button
                id="trash-article"
                onClick={() => deleteHandler(article)}
                type="button"
                className="rounded-lg p-2 hover:bg-white/20
                transition-all ease-out duration-200
                h-10 w-10 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`${articleDeleted ? 'text-red-700' : ' text-white/80'}
                        transition-all duration-200 ease-in-out`}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
                    <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
                </svg>
            </button>

            {/* Tooltip */}
            <TrashTooltip articleDeleted={articleDeleted} />

        </div>
    );
};


export default React.memo(Trash);