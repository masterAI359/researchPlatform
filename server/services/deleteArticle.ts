import { SupabaseClient } from "@supabase/supabase-js";

interface DeleteResponse {
    message: string,
    id: null
};

export const deleteArticleForUser = async (
    supabase: SupabaseClient,
    user_id: string,
    id: string
): Promise<DeleteResponse | null> => {

    try {


        const response = await supabase
            .from('articles')
            .delete()
            .eq('user_id', user_id)
            .eq('id', id)
            .select();

        if (response?.error) {
            console.error('Deleting error', response.error.message);
            return null;
        } else if (response) {
            const message: string = "Deleted";
            console.log(response);
            return { message: message, id: null };
        };

        return null;

    } catch (error) {
        console.log(error);
        const err_message: string = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';

        return { message: err_message, id: null };
    };
};