import { Virtuoso } from "react-virtuoso";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import ArticleSaved from "../components/ArticleSaved";
import { SkeletonMap } from "../skeletons/SkeletonMap";
import { useVirtuoso } from "@/Hooks/useVirtuoso";
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useCallback } from "react";
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";

export default function ArticlesScroller() {
    const userArticles: SavedArticle[] | null = useSelector((state: RootState) => state.userdata.userArticles);
    const { visible, fullyLoaded, loadMore } = useVirtuoso(userArticles);
    const dispatch = useDispatch<AppDispatch>();

    console.log('scroller rendering');

    const handleArticleSelection = useCallback((article: SavedArticle) =>
        () => {

            dispatch(readSavedArticle(article));
            dispatch(presentThisArticle());
        }, [dispatch]);

    return (
        <div
            className="relative w-full h-svh overflow-x-hidden px-4"
        >
            <Virtuoso
                style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'end' }}
                className="no-scrollbar 2xl:gap-y-12"
                data={visible}
                endReached={loadMore}
                increaseViewportBy={50}
                context={{ fullyLoaded }}
                components={{ Footer: SkeletonMap }}
                itemContent={(index, article) => {

                    return <ArticleSaved
                        key={article.id}
                        article={article}
                        handleArticleSelection={handleArticleSelection}
                    />
                }}

            />

        </div>
    )
};


