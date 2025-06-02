import { supabase } from "@/SupaBase/supaBaseClient";
import { SavedArticle } from "@/env";
import { useSelector } from "react-redux";



export const checkArticle = async (
    setArticleExists: (articleExists: boolean) => void,
    article_url: string,
    userArticles: SavedArticle[]

): Promise<void> => {
    const exists = userArticles.find((article: SavedArticle) => article_url === article.url);
    if (exists) {
        setArticleExists(true);
    } else {
        setArticleExists(false)
    }
}

export const saveArticle = async (
    dataToSave: SavedArticle,
    setShowNotification: (showNotification: boolean) => void,
    setArticleExists: (articleExists: boolean) => void,
    articleExists: boolean,
    setRegisteredExclusiveFeature: (registeredExlusiveFeature: boolean) => void,
    id: string | number,
    userArticles: SavedArticle[]

): Promise<void> => {




    if (!id) {
        setRegisteredExclusiveFeature(true)
        return
    }

    try {

        if (!articleExists) {
            const response = await fetch('http://localhost:5001/handleArticleSave', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dataToSave: dataToSave,
                }),
            })

            if (!response.ok) {
                throw new Error('could not fetch endpoint');
            };

            if (response) {
                setArticleExists(true);
                setShowNotification(true);
            }
        }

        if (articleExists) {

        }
    } catch (error) {
        console.log(error)
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

        if (data) console.log(data)
        if (error) console.log(error.message)
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
