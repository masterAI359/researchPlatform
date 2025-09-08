import { Virtuoso } from "react-virtuoso";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import ArticleSaved from "../components/ArticleSaved";
import { SkeletonMap } from "../skeletons/SkeletonMap";
import { useVirtuoso } from "@/Hooks/useVirtuoso";
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent/UserContentReducer"
import { useCallback, useMemo, useState } from "react";
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent/ProfileNavigationSlice";
import { saveArticle } from "@/services/supabase/SupabaseData";
import { AnimatePresence } from "framer-motion";
import AuthNotification from "@/components/React/session/notifications/AuthNotification";
import { deleteArticleStatus } from "@/components/React/session/notifications/AuthStatus";
import Title from "../components/Title";
import ArticleThumbnail from "../components/ArticleThumbnail";
import { articleScrollerStyles } from "../scrollerStyles/articleScrollStyles";
import { useSkeletons } from "@/Hooks/useSkeletons";

export default function ArticlesScroller() {
    const userArticles: SavedArticle[] | null = useSelector((state: RootState) => state.userdata.userArticles);
    const { visible, fullyLoaded, loadMore } = useVirtuoso(userArticles);
    const { fastScroll, clockScrollSpeed } = useSkeletons(180);
    const [deleting, setDeleting] = useState<boolean>(false);
    const [deletedIds, setDeletedIds] = useState<Set<number>>(new Set());
    const [deleted, setDeleted] = useState<boolean | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const cleanup = () => {
        setDeleted(null);
    };

    const handleArticleSelection = useCallback((article: SavedArticle) => () => {
        dispatch(readSavedArticle(article));
        dispatch(presentThisArticle());
    }, [dispatch]);


    const markIds = (id: number, deleted: boolean) => {
        setDeletedIds(prev => {
            const next = new Set(prev);
            deleted ? next.add(id) : next.delete(id);
            return next;
        });
    };


    const deleteHandler = useCallback(
        async (article: SavedArticle): Promise<void> => {
            if (deleting) return;
            setDeleting(true);

            try {
                const results = await saveArticle(article, true);
                if (results.data.message === "Deleted") {
                    setDeleted(true);
                    markIds(article.id, true)
                } else if (results.data.message === "Saved") {
                    setDeleted(false);
                } else {
                    setDeleted(false);
                };

            } catch (err) {
                console.error(err);
            };
        }, [deleting]);

    return (
        <div
            className="relative w-dvw md:w-full h-svh overflow-x-hidden px-2"
        >
            <AnimatePresence>
                {deleting &&
                    <AuthNotification
                        complete={deleted}
                        status={deleteArticleStatus}
                        setterFunction={setDeleting}
                        redirect={cleanup}
                    />}
            </AnimatePresence>

            <Virtuoso
                components={{ Footer: SkeletonMap }}
                computeItemKey={(_, article) => article.id}
                itemContent={(_, article) => {
                    return <ArticleSaved>
                        <Title article={article} handleArticleSelection={handleArticleSelection} />
                        <ArticleThumbnail articleDeleted={deletedIds.has(article.id)} fastScroll={fastScroll} article={article} deleteHandler={deleteHandler} />
                    </ArticleSaved>
                }}
                style={articleScrollerStyles}
                className="no-scrollbar 2xl:gap-y-12"
                data={visible}
                endReached={loadMore}
                increaseViewportBy={200}
                isScrolling={clockScrollSpeed}
                context={{ fullyLoaded }}

            />
        </div>
    );
};