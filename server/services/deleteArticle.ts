import { SupabaseClient } from "@supabase/supabase-js";

export const deleteArticleForUser = async (
    supabase: SupabaseClient,
    id: string,
    url: string
): Promise<string | null> => {

    try {


        const response = await supabase
            .from('articles')
            .delete()
            .eq('user_id', id)
            .eq('article_url', url)
            .select();

        if (response?.error) {
            console.error('Deleting error', response.error.message);
            return null;
        } else if (response) {
            const message: string = "Deleted";
            return message;
        };

        return null;

    } catch (error) {
        console.log(error);
        const err_message: string = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';

        return err_message;
    };
};