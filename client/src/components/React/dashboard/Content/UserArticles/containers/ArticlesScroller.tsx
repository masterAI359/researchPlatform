import { Virtuoso } from "react-virtuoso";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import ArticleSaved from "../components/ArticleSaved";
import { SkeletonMap } from "../skeletons/SkeletonMap";
import { useVirtuoso } from "@/Hooks/useVirtuoso";
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useCallback, useState } from "react";
import { presentThisArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { saveArticle } from "@/services/supabase/SupabaseData";
import { AnimatePresence } from "framer-motion";
import AuthNotification from "@/components/React/Session/notifications/AuthNotification";
import { deleteArticleStatus } from "@/components/React/Session/notifications/AuthStatus";
import Title from "../components/Title";
import ArticleThumbnail from "../components/ArticleThumbnail";
import { articleScrollerStyles } from "../scrollerStyles/articleScrollStyles";
import { useSkeletons } from "@/Hooks/useSkeletons";

export default function ArticlesScroller() {
    const userArticles: SavedArticle[] | null = useSelector((state: RootState) => state.userdata.userArticles);
    const { visible, fullyLoaded, loadMore } = useVirtuoso(userArticles, 12);
    const { fastScroll, clockScrollSpeed } = useSkeletons(180);
    const [deleting, setDeleting] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean | null>(null);
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

            try {
                const results = await saveArticle(article, true);
                results === "Deleted"
                    ? setDeleted(true)
                    : setDeleted(false);
            } catch (err) {
                console.error(err);
            };
        }, []);

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
                itemContent={(index, article) => {
                    return <ArticleSaved key={article.id}>
                        <Title article={article} handleArticleSelection={handleArticleSelection} />
                        <ArticleThumbnail fastScroll={fastScroll} article={article} deleteHandler={deleteHandler} />
                    </ArticleSaved>
                }}
                style={articleScrollerStyles}
                className="no-scrollbar 2xl:gap-y-12"
                data={visible}
                endReached={loadMore}
                increaseViewportBy={50}
                isScrolling={clockScrollSpeed}
                context={{ fullyLoaded }}

            />
        </div>
    );
};