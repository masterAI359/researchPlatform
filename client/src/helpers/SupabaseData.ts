import { supabase } from "@/SupaBase/supaBaseClient";
import { SavedArticle } from "@/env";



export const checkArticle = async (
    setArticleExists: Function,
    article_url: string,
    id: string,
    currentSession: any
) => {
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
        } else if (!currentSession) {

        } else {
            setArticleExists(false)
        }
    } catch (error) {
        console.log(error)
    }
}

export const saveArticle = async (dataToSave: SavedArticle, setShowNotification: Function, setArticleExists: Function, articleExists: boolean, setRegisteredExclusiveFeature: Function) => {

    const { text, url, id, image_url, summary, title, authors, date, provider, fallbackDate } = dataToSave


    if (!id) {
        setRegisteredExclusiveFeature(true)
        return
    }

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



export const saveInvestigation = async (investigationData: any) => {

    console.log("Attempting to insert investigation")

    const { idea, initial_perspective, biases, premises, ending_perspective, changed_opinion, new_concepts, takeaway, user_id } = investigationData

    const { data, error } = await supabase
        .from('investigations')
        .insert([{
            idea: idea,
            initial_perspective: initial_perspective,
            biases: biases,
            premises: premises,
            ending_perspective: ending_perspective,
            changed_opinion: changed_opinion,
            new_concepts: new_concepts,
            takeaway: takeaway,
            user_id: user_id
        }]).select()

    if (error) {
        console.log(error)
    } else if (data) {
        console.log(data)
    }

}


export const getUserInvestigations = async (id: number | string) => {

    const { data, error } = await supabase
        .from('investigations')
        .select()
        .eq('user_id', id)

    if (error) {
        console.log(error)
    } else if (data) {
        console.log(data)
    }

}

