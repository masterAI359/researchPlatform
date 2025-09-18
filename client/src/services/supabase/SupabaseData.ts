import { SavedArticle, SupabaseUser } from "@/env";




export const supabaseSignIn = async (
    email: string,
    password: string,
): Promise<LoginResponse> => {

    try {

        const response = await fetch('/supabaseLogIn', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        }
        );

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        const sessionData = await response.json();
        if (sessionData) {
            const data: LoginResponse = { message: 'success', session: sessionData }
            return data;
        };

        if (!sessionData) {
            const errorData: LoginResponse = { message: 'failed', session: null };
            return errorData;
        };

    } catch (error) {

        //   console.error(error);
        const error_message: LoginResponse = {
            message: error instanceof Error ? error.message : 'Unknown error',
            session: null
        };
        console.error(error_message)
        return error_message;
    };
};


export const fetchSignOut = async (): Promise<SignOutResponse> => {

    try {
        const response = await fetch('/signUserOut', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Could not reach endpoint for signout');
        }
        const result = await response.json();
        const message = { loggedOut: true, data: result };
        return message;

    } catch (error) {
        console.error(error);
        const error_message = { loggedOut: false, data: null };
        return error_message;
    };
};



export const sendEmailResetLink = async (email: string, setEmailSent: (emailSent: boolean) => void): Promise<void> => {

    try {

        const response = await fetch('/resetUserPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            }),
        });
        if (!response.ok) {
            setEmailSent(false);
            throw new Error('could not connect to password reset endpoint');
        };

        const result = await response.json();

        if (result.message === 'Reset email sent.') {
            setEmailSent(true)
            return;
        };

    } catch (error) {
        console.error(error);
        setEmailSent(false);
        return;
    };
};



export const newUser = async (
    email: string,
    password: string,
    setCreatedUser: any,
    setAcceptedInput: any,
    setValidFirstPassword: any,
    setErrorMessage: any,
    setCanSubmit: any): Promise<any> => {

    try {

        const response = await fetch('/createNewUser', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        }
        );

        if (!response.ok) {
            console.log(response.statusText);
            setErrorMessage(response.statusText);
            setCreatedUser(false)
            throw new Error(`Couldn't reach createNewUser Endpoint: ${response.statusText}`);
        };

        const session = await response.json();

        if (session) {
            console.log(session.data);
            setCreatedUser(true);
            setCanSubmit(null);
            setAcceptedInput(null);
            setValidFirstPassword(null);
            setErrorMessage(null);
            return { user: session.data };
        };

    } catch (error) {
        if (error) {
            console.error(error);
            return null
        }
    };
};


export const saveArticle = async (
    dataToSave: SavedArticle,
    articleExists?: boolean,
): Promise<SaveArticleResponse | null> => {

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
            console.error(response.statusText);
            throw new Error('could not fetch endpoint');
        };

        const result: SaveArticleResponse = await response.json();

        if (result) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    };
};



export const getInvestigationSources = (sources: string[], savedArticles: any) => {
    if (!sources || !Array.isArray(sources)) return;

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

