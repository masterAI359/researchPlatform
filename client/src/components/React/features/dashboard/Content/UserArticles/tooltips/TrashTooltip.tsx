import React from "react";

interface TrashProps {
    articleDeleted: boolean
};

function TrashTooltip({ articleDeleted }: TrashProps) {

    return (
        <div
            aria-label="delete article tooltip"
            className="absolute top-14 left-1/2 -translate-x-1/2 
                            opacity-0 sm:group-hover:opacity-100 
                            transition-opacity duration-200 
                            pointer-events-none z-20">
            <div className="relative bg-white text-black text-xs px-2 py-1 rounded shadow-lg">
                {articleDeleted ? 'Save Article' : 'Delete Article'}
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
            </div>
        </div>
    );
};

export default React.memo(TrashTooltip);