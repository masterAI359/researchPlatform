import { SupabaseClient } from "@supabase/supabase-js";
import { Investigation } from "../endpoints/interfaces";
import { SavedArticleRes, UserContent, SavedArticle } from "../types/types";


const mapped = (articles: SavedArticle[]): Map<string, SavedArticle> => {

    const hash: Map<string, SavedArticle> = new Map(articles.map((article: SavedArticle) => [article.id, article]));

    return hash;
};


async function UserArticles(supabase: SupabaseClient, id: string): Promise<SavedArticleRes | null> {

    try {
        const { data, error } = await supabase
            .from('articles')
            .select("*")
            .eq('user_id', id)

        if (error) {
            console.error(error.message);
            return null;
        } else {
            const articleMap = mapped(data);
            return {
                articles: data,
                articleMap: articleMap
            };
        };

    } catch (error) {
        if (error instanceof Error) {
            const err_message = `Unexpected server error: ${error.message}`
            console.error(err_message);
            return null;
        } else {
            console.error(error)
            return null;
        };
    };

};

async function UserInvestigations(supabase: SupabaseClient, id: string): Promise<Investigation[] | null> {

    try {
        const { data, error } = await supabase
            .from('investigations')
            .select()
            .eq('user_id', id)

        if (error) {
            console.error(error.message);
            return null;

        } else {
            return data;
        };

    } catch (error) {
        const error_message = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';
        console.error(error_message);
        return null
    };
}


export async function getUserContent(supabase: SupabaseClient, id: string): Promise<UserContent> {

    try {
        const [articles, investigations] = await Promise.all([
            UserArticles(supabase, id),
            UserInvestigations(supabase, id)
        ]);

        const results: UserContent = { userArticles: articles, userResearch: investigations };
        console.log(results);
        return results;

    } catch (error) {
        const error_message = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';
        console.error(error_message);
        throw error_message;
    };
};