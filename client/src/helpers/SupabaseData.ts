import { supabase } from "@/SupaBase/supaBaseClient";
import { SavedArticle } from "@/env";



export const checkArticle = async (
    setArticleExists: (articleExists: boolean) => void,
    article_url: string,
    userArticles: SavedArticle[],

): Promise<void> => {
    const exists = userArticles.some((article: any) => article_url === article.article_url);

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

    if (!id) {
        setRegisteredExclusiveFeature(true)
        return
    }

    try {

        const response = await fetch('/articleOperation', {
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

        const response = await fetch('/sendFeedback', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: authorEmail,
                message: message
            }),
        });

        if (!response.ok) {
            setFeedbackSubmitted(false);
            throw new Error(`Couldn't reach the endpoint for feedback: ${response.statusText}`);
        };

        const result = await response.json();

        if (result) {
            setFeedbackSubmitted(true);
        };

    } catch (error) {
        setFeedbackSubmitted(false)
        console.log(error)
    };
};


export const pwReset = async (email: string, newPassword: string): Promise<any> => {

    type ResetData = {
        message: string,
        data: any
    };

    try {
        const response = await fetch('/passwordReset', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                newPassword: newPassword
            }),
        });

        if (!response.ok) {
            throw new Error(`Unable to reach endpoint: ${response.statusText}`);
        };

        const results: ResetData = await response.json();
        return results;

    } catch (error) { console.error(error) };
};



export const checkForActiveSession = async (): Promise<boolean> => {
    const { data: { session } } = await supabase.auth.getSession();
    return session ? true : false;
}
