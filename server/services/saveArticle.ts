import { SavedArticle } from "../endpoints/interfaces";
import { SupabaseClient } from "@supabase/supabase-js";

export const saveArticleForUser = async (
    supabase: SupabaseClient,
    id: string,
    dataToSave: SavedArticle
): Promise<string | null> => {

    const { text, url, image_url, summary, title, authors, date, provider, fallbackDate, factual_reporting, bias, country } = dataToSave;
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
                        article_url: url,
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
            return db_error;

        } else if (data) {
            console.log(data)
            const message: string = "Saved";
            return message;
        };

        return null;

    } catch (error) {
        console.log(error);
        const error_message = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';
        return error_message;
    };
};