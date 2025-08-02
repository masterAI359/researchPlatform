import { useCallback, useState } from "react";
import { saveArticle } from "@/services/SupabaseData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { NotificationState } from "@/env";

export function useSaveArticle(article, setShowNotification) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const [notification, setNotification] = useState<NotificationState>({
        articleExists: false,
        message: null,
        anonUser: false,
    });
    const dispatch = useDispatch<AppDispatch>();

    const dataToSave: SavedArticle = {
        title: article.article_title,
        provider: article.source,
        image_url: article.article_image,
        text: article.article_text,
        authors: article.article_authors,
        date: article.date_published ? article.date_published : article.article_pub_date,
        url: article.article_url,
        summary: article.summary,
        fallbackDate: article.article_pub_date,
        id: article.id,
        factual_reporting: article.factual_reporting,
        bias: article.bias,
        country: article.country
    };

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

        const status = await saveArticle(dataToSave, articleAlreadySaved);
        if (status === 'Saved') {
            setNotification((prev) => ({
                ...prev,
                articleExists: true,
                message: 'saved!'
            }));
        } else if (status === 'Deleted') {
            setNotification({
                articleExists: false,
                message: 'removed',
                anonUser: false
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