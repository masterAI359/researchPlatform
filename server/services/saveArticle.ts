import { SavedArticle } from "../endpoints/interfaces";
import { SupabaseClient } from "@supabase/supabase-js";

interface SavedResponse {
    message: string,
    id: number | null
};

export const saveArticleForUser = async (
    supabase: SupabaseClient,
    id: string,
    dataToSave: SavedArticle
): Promise<SavedResponse | null> => {

    const { text, article_url, image_url, summary, title, authors, date, provider, fallbackDate, factual_reporting, bias, country } = dataToSave;
    try {
        const { data, error } = await supabase
            .from('articles')
            .upsert(
                [
                    {
                        title: title,
                        image_url: image_url,
                        provider: provider,
                        full_text: text,
                        authors: authors,
                        date_published: date || fallbackDate,
                        article_url: article_url,
                        summary: summary,
                        user_id: id,
                        bias: bias,
                        factual_reporting: factual_reporting,
                        country: country,
                    },
                ],
                {
                    onConflict: 'user_id,article_url',
                }
            )
            .select();

        if (error) {
            console.log(error.message);
            const db_error: string = "couldn't save the provided article to the database";
            return { message: db_error, id: null };

        } else if (data && (Array.isArray(data) && data.length > 0)) {
            const message: string = "Saved";
            const article: any = data[0];
            const article_id: number = article.id;
            console.log(article_id);
            return { message: message, id: article_id };
        };

        return null;

    } catch (error) {
        console.log(error);
        const error_message = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';
        return { message: error_message, id: null };
    };
};