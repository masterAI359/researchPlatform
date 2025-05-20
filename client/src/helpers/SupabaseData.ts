import { supabase } from "@/SupaBase/supaBaseClient";
import { SavedArticle } from "@/env";



export const checkArticle = async (
    setArticleExists: (articleExists: boolean) => void,
    article_url: string,
    id: string,
    currentSession: { user: { id: string} } | null
        
    ): Promise<void> => {


    try {
        const { data, error } = await supabase
            .from('articles')
            .select('article_url')
            .eq('user_id', id)
            .eq('article_url', article_url)

        if (data !== null && data.length > 0) {
            setArticleExists(true)
        } else if (error) {
        } else if (!currentSession) {

        } else {
            setArticleExists(false)
        }
    } catch (error) {
    }
}

export const saveArticle = async (
    dataToSave: SavedArticle,
    setShowNotification: (showNotification: boolean) => void, 
    setArticleExists: (articleExists: boolean) => void, 
    articleExists: boolean, 
    setRegisteredExclusiveFeature: (registeredExlusiveFeature: boolean) => void

): Promise<void> => {

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

            } else if (data.length > 0) {
                setShowNotification(true)
                setArticleExists(true)
            } else {
            }
        } catch (err) {
        }
    }


}




export const saveInvestigation = async (investigationData: any, setSavingInvestigation?: Function, setSaveSuccessful?: Function


): Promise<boolean> => {

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
    
        console.log(error.message)
        return false
    } else if (data) {
        setSaveSuccessful?.(true)
        return true
    }

}


export const getUserInvestigations = async (id: number | string) => {

    const { data, error } = await supabase
        .from('investigations')
        .select()
        .eq('user_id', id)

    if (error) {
    } else if (data) {

    }

}

export const getInvestigationSources = (sources: string[], savedArticles: any) => {

    //might implement two pointer algorithm on this function for performance optimization
    
    function getSaved() {
        let savedSources = []

        for (let i = 0; i < sources.length; i++) {

            let sourceURL = sources[i]

            for (let j = 0; j < savedArticles.length; j++) {

                let articleSaved = savedArticles[j].article_url

                if (sourceURL === articleSaved) {

                    savedSources.push(savedArticles[j])
                }
            }
        }
        return savedSources

    }
    const savedFromResearch = getSaved()
    return savedFromResearch
}


export const deleteUser = async (id: string, setDeleting: Function, setDeletesuccessful: Function) => {


    try {
        setDeleting(true)
        const { data, error } = await supabase.auth.admin.deleteUser(
            id
        )

        if (data) {
            setDeletesuccessful(true)
            return data
        } else if (error) {
            setDeletesuccessful(false)
            return error.message
        }
    } catch (error) {
    }


}


export const submitFeedback = async (authorEmail: string, message: string, setFeedbackSubmitted: Function) => {

    try {

        const { data, error } = await supabase
        .from('user_feedback')
        .insert({
            email: authorEmail,
            message: message
        })

        if(data) console.log(data)
        if(error) console.log(error.message)
        setFeedbackSubmitted(true)

    } catch (error) {
        setFeedbackSubmitted(false)
        console.log(error)
    }
}


export const checkForActiveSession = async (): Promise<boolean> => {
        const { data: { session } } = await supabase.auth.getSession();
          return session ? true : false;
    }
