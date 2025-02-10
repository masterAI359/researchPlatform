import { supabase, session } from "@/SupaBase/supaBaseClient";

export const checkArticle = async (
    setFillBookMark: Function,
    setArticleExists: Function,
    setRemoveNotification: Function,
    article_url: string,
    id: string) => {
    console.log({ ActionTriggered: "checking for article in database" })
    try {
        const { data, error } = await supabase
            .from('articles')
            .select('article_url')
            .eq('user_id', id)
            .eq('article_url', article_url)

        if (data.length > 0) {
            setFillBookMark(true)
            setArticleExists(true)
        } else if (error) {
            console.log(error)
        } else if (!session) {
            setArticleExists(false)
            console.log("Not found")
        } else {
            setArticleExists(false)
            setRemoveNotification(true)
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeFromSaved = async (
    id: string,
    article_url: string
) => {

    try {
        const response = await supabase
            .from('articles')
            .delete()
            .eq('user_id', id)
            .eq('article_url', article_url)

        if (response) {
            console.log(response)
        } else {
            console.log('failed to delete')
        }
    } catch (error) {
        console.log(error)
    }
}

//const saveArticle = async (
//    e: any,
//    article_title: string,
//    source: string,
//    article_text: string,
//    article_authors: string[],
//    date: string,
//    article_pub_date: string,
//    article_url: string,
//    summary: any,
//    id: string
//) => {
//    try {
//        const { data, error } = await supabase.from('articles')
//            .insert([
//                {
//                    title: article_title,
//                    provider: source,
//                    full_text: article_text,
//                    authors: article_authors,
//                    date_published: date ? date : article_pub_date,
//                    article_url: article_url,
//                    summary: summary,
//                    user_id: id
//                }
//            ])
//            .select()
//        if (error) {
//            console.log(error)
//
//        } else if (data.length > 0) {
//            setFillBookMark(true)
//            setRemoveNotification(false)
//            setArticleExists(true)
//        } else {
//            setFillBookMark(false)
//        }
//    } catch (err) {
//        console.log(err)
//    }
//}