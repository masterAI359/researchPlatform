import { supabase } from "@/SupaBase/supaBaseClient";
import { SavedArticle } from "@/env";



export const checkArticle = async (
    setArticleExists: (articleExists: boolean) => void,
    article_url: string,
    userArticles: SavedArticle[],

): Promise<void> => {
    const exists = userArticles.some((article: any) => article_url === article.article_url);

    console.log({ CheckResult: exists });

    if (exists) {
        setArticleExists(true);
    } else {
        setArticleExists(false);
    };
}


export const saveArticle = async (
    dataToSave: SavedArticle,
    setShowNotification: (showNotification: boolean) => void,
    setArticleExists: (articleExists: boolean) => void,
    articleExists: boolean,
    setRegisteredExclusiveFeature: (registeredExlusiveFeature: boolean) => void,
    id: string | number,
): Promise<string> => {


    console.log('called')

    if (!id) {
        setRegisteredExclusiveFeature(true)
        return
    }

    try {

        const response = await fetch('http://localhost:5001/articleOperation', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dataToSave: dataToSave,
                articleExists: articleExists
            }),
        })

        if (!response.ok) {
            throw new Error('could not fetch endpoint');
        };

        const result = await response.json();

        if (result) {
            console.log(result.message)
            if (result.message === "Saved") {
                setArticleExists(true)
                setShowNotification(true)
            } else if (result.message === "Deleted") {
                setArticleExists(false)
                setShowNotification(true)
            }
            return result.message;
        }



    } catch (error) {
        console.log(error)
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
