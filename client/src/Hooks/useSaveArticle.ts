import { useCallback, useMemo, useRef, useState } from "react";
import { saveArticle } from "@/services/supabase/SupabaseData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { NotificationState, ArticleToSave } from "@/env";

export function useSaveArticle(article: ArticleToSave, setShowNotification) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const [notification, setNotification] = useState<NotificationState>({
        articleExists: false,
        message: null,
        anonUser: false,
        article_id: null
    });
    const dispatch = useDispatch<AppDispatch>();


    const dbId = useMemo(() => {
        const saved = Array.isArray(userArticles)
            ? userArticles.find(a => a.article_url === article.article_url)
            : undefined;
        return saved?.id ?? null; // DB primary key if present
    }, [userArticles, article.article_url]);



    const dataToSave: SavedArticle = useMemo(() => {
        return {
            title: article.article_title,
            provider: article.source,
            image_url: article.article_image,
            text: article.article_text,
            authors: article.article_authors,
            date: article.date_published ? article.date_published : article.article_pub_date,
            url: article.article_url,
            summary: article.summary,
            fallbackDate: article.article_pub_date,
            id: dbId,
            factual_reporting: article.factual_reporting,
            bias: article.bias,
            country: article.country
        };
    }, [
        article.article_title,
        article.source,
        article.article_image,
        article.article_text,
        article.article_authors,
        article.date_published,
        article.article_pub_date,
        article.article_url,
        article.summary,
        article.factual_reporting,
        article.bias,
        article.country,
        dbId,
    ]);

    const handleSaveArticle = useCallback(async () => {
        if (!Array.isArray(userArticles) || userArticles.length === 0) {
            setNotification((prev) => ({
                ...prev,
                message: "login to save articles!",
                anonUser: true,
            }));
            setShowNotification(true);
            return;
        }

        const articleAlreadySaved = userArticles.some(
            (article) => article.article_url === dataToSave.url
        );

        const resp = await saveArticle(dataToSave, articleAlreadySaved);
        if (resp?.data.message === 'Saved' && (notification.article_id === null)) {
            setNotification((prev) => ({
                ...prev,
                articleExists: true,
                message: 'saved!',
                article_id: resp.data.id
            }));
        } else if (resp.data.message === 'Deleted') {
            setNotification({
                articleExists: false,
                message: 'removed',
                anonUser: false,
                article_id: null
            })

        } else {
            setNotification((prev) => ({
                ...prev,
                message: 'login to save articles!'
            }));

        };
        setShowNotification(true);

        dispatch(fetchSavedArticles());



    }, [dispatch, dataToSave]);


    return { handleSaveArticle, setNotification, notification };
};