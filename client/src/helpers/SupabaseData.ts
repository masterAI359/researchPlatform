import { supabase, session } from "@/SupaBase/supaBaseClient";
import { SavedArticle } from "@/env";
import { error } from "astro/dist/core/logger/core";

export const checkArticle = async (
    setArticleExists: Function,
    article_url: string,
    id: string) => {
    console.log({ ActionTriggered: "checking for article in database" })
    try {
        const { data, error } = await supabase
            .from('articles')
            .select('article_url')
            .eq('user_id', id)
            .eq('article_url', article_url)

        if (data !== null && data.length > 0) {
            setArticleExists(true)
        } else if (error) {
            console.log(error)
        } else if (!session) {

        } else {
            setArticleExists(false)
        }
    } catch (error) {
        console.log(error)
    }
}

export const saveArticle = async (dataToSave: SavedArticle, setShowNotification: Function, setArticleExists: Function, articleExists: boolean) => {

    const { text, url, id, image_url, summary, title, authors, date, provider, fallbackDate } = dataToSave

    if (articleExists) {
        try {
            const response = await supabase
                .from('articles')
                .delete()
                .eq('user_id', id)
                .eq('article_url', url)

            if (response) {
                setShowNotification(true)
                setArticleExists(false)
            } else {
                console.log("Issue deleting data")
            }

        } catch (err) {
            console.log(err)
        }
    } else if (!articleExists) {
        try {
            const { data, error } = await supabase.from('articles')
                .insert([
                    {
                        title: title,
                        image_url: image_url,
                        provider: provider,
                        full_text: text,
                        authors: authors,
                        date_published: date ? date : fallbackDate,
                        article_url: url,
                        summary: summary,
                        user_id: id
                    }
                ])
                .select()
            if (error) {
                console.log(error)

            } else if (data.length > 0) {
                setShowNotification(true)
                setArticleExists(true)
                console.log(data)
            } else {
            }
        } catch (err) {
            console.log(err)
        }
    }


}

