import { SavedArticle, SupabaseUser } from "@/env";



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




export const submitFeedback = async (authorEmail: string, message: string): Promise<boolean> => {

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
            throw new Error(`Couldn't reach the endpoint for feedback: ${response.statusText}`);
        };
        const result = await response.json();

        if (result) {
            return true
        };

    } catch (error) {
        console.error(error);
        return false
    };
};


export const pwReset = async (email: string, newPassword: string): Promise<SupabaseUser | null> => {

    try {
        const response = await fetch('/passwordReset', {
            method: 'POST',
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

        const results: ResetPW = await response.json();
        const user: SupabaseUser = results.data
        return user;

    } catch (error) {
        console.error(error);
        return null;
    };
};


export const deleteAccount = async (email: string, password: string): Promise<boolean> => {
    try {
        const deletion = await fetch(`/deleteUser`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!deletion.ok) {
            throw new Error('Failed to connect to the database')
        }

        const response = await deletion.json()
        if (response.message === 'User deleted successfully.') {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    };
}

