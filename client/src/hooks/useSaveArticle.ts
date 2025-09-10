import { useCallback, useMemo, useState } from "react";
import { saveArticle } from "@/services/supabase/SupabaseData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent/UserContentReducer";
import { ArticleToSave } from "@/env";

interface SaveArticleHook {
    handleSaveArticle: () => Promise<void>,
    result: string | null
};

interface SaveHookParams {
    article: ArticleToSave,
    isSaved: boolean | null
}

export function useSaveArticle({ article, isSaved }: SaveHookParams): SaveArticleHook {
    const [result, setResult] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const activeSession = useSelector((state: RootState) => state.auth.activeSession);
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);

    const dbId = useMemo(() => {
        const saved = Array.isArray(userArticles)
            ? userArticles.find(a => a.article_url === article.article_url)
            : undefined;
        return saved?.id ?? null;
    }, [userArticles, article.article_url]);


    const dataToSave: SavedArticle = useMemo(() => {
        return {
            title: article.article_title,
            provider: article.source,
            image_url: article.article_image,
            text: article.article_text,
            authors: article.article_authors,
            date: article.date_published ? article.date_published : article.article_pub_date,
            article_url: article.article_url,
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


    const handleSaveArticle = useCallback(async (): Promise<void> => {
        if (!activeSession) {
            setResult("Login or join to save articles");
            return;
        };

        try {
            const resp = await saveArticle(dataToSave, isSaved);
            const res: unknown = resp?.data.message;
            if (typeof res === 'string') setResult(res);

            dispatch(fetchSavedArticles());

        } catch (error) {
            console.error(error);
        };

    }, [dispatch, dataToSave, isSaved]);

    return { handleSaveArticle, result };
};