import { Virtuoso } from "react-virtuoso";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import ArticleSaved from "../components/ArticleSaved";
import { SkeletonMap } from "../skeletons/SkeletonMap";
import { useVirtuoso } from "@/Hooks/useVirtuoso";
import { fetchSavedArticles, readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useCallback, useEffect, useState } from "react";
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { saveArticle } from "@/services/SupabaseData";
import { AnimatePresence } from "framer-motion";
import AuthNotification from "@/components/React/Session/notifications/AuthNotification";
import { deleteArticleStatus } from "@/components/React/Session/notifications/AuthStatus";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";
import ErrMessage from "@/components/React/Shared/ErrorBoundaries/messages/ErrMessage";

export default function ArticlesScroller() {
    const userArticles: SavedArticle[] | null = useSelector((state: RootState) => state.userdata.userArticles);
    const { visible, fullyLoaded, loadMore } = useVirtuoso(userArticles);
    const [deleting, setDeleting] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean | null>(null);
    const [articleToDelete, setArticleToDelete] = useState<string | number | null>(null)
    const dispatch = useDispatch<AppDispatch>();

    const cleanup = () => {
        setDeleted(null);
    };

    const handleArticleSelection = useCallback((article: SavedArticle) => () => {
        dispatch(readSavedArticle(article));
        dispatch(presentThisArticle());
    }, [dispatch]);

    const deleteHandler = useCallback(
        async (article: SavedArticle): Promise<void> => {
            setDeleting(true);
            const results = await saveArticle(article, true);

            if (results === 'Deleted') {
                setDeleted(true);
            } else {
                setDeleted(false);
            };
        }, []);

    useEffect(() => {
        if (deleted === null) return;

        const timer = setTimeout(() => {
            if (deleted === true) {
                setArticleToDelete(null);
            };
        }, 1500);

        return () => {
            clearTimeout(timer);
            dispatch(fetchSavedArticles());
        };
    }, [deleted]);


    return (
        <div
            className="relative w-full h-svh overflow-x-hidden px-4"
        >
            <ErrorBoundary fallback={<ErrMessage message="Session Expired :/" />}>
                <AnimatePresence>
                    {deleting && <AuthNotification complete={deleted} status={deleteArticleStatus} setterFunction={setDeleting} redirect={cleanup} />}
                </AnimatePresence>
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
                            deleteHandler={deleteHandler}
                        />
                    }}

                />

            </ErrorBoundary>

        </div>
    )
};


