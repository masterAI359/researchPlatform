import { useCallback, useState } from "react";
import { saveArticle } from "@/services/SupabaseData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { NotificationState } from "@/env";

export function useSaveArticle(dataToSave, setShowNotification) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const [notification, setNotification] = useState<NotificationState>({
        articleExists: false,
        message: null,
        anonUser: false,
    });
    const dispatch = useDispatch<AppDispatch>();

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