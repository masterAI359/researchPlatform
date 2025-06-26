

const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}

export async function fetchArticles(query: string): Promise<any> {

    try {
        const response = await fetch(`/search/articles?q=${query}`,
            options
        )
        if (!response.ok) {
            throw new Error("There was a network response issue!")
        }
        const jsonResponse = await response.json();
        if (jsonResponse) {
            return jsonResponse
        }
    } catch (err) {
        if (err) {
            return err
        }
    }
};


export const encodeArray = (array: any) => {

    const encodedArray = encodeURIComponent(JSON.stringify(array))
    return encodedArray
}


export const getWikiDetails = async (
    term: string,
    setExplanation: (explanation: any) => void
): Promise<void> => {

    const encodedQuery: string = encodeURIComponent(term);

    const url: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`;

    try {
        const result = await fetch(url, options);
        if (!result.ok) {

            throw new Error('Could not connect to Wikipedia API!');
        }
        const data = await result.json();
        if (data) {
            setExplanation(data);
        } else {
            setExplanation("failed to connect to Wikipedia API :/");
        }

    } catch (err) {
        console.log(err);
    };
};


export const supabaseSignIn = async (
    email: string,
    password: string,
    setLogginIn: (loggingIn: boolean) => void,
    setSuccessful: (successful: boolean) => void,
    dispatch: any,
    fetchUserCredentials: Function

): Promise<boolean> => {

    try {
        setLogginIn(true);

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
            setSuccessful(false)
            const errorText = await response.text();
            console.error('Server responded with:', response.status, errorText);
            setSuccessful(false);
            throw new Error(`Server error: ${response.status}`);
        }
        const sessionData = await response.json();
        if (sessionData) {
            setSuccessful(true);
            dispatch(fetchUserCredentials(sessionData))
            return true;
        };

        if (!sessionData) {
            return false;
        };

    } catch (error) {

        console.log(error);
        return false;
    };
};



export const fetchSignOut = async (setSuccess: (success: boolean) => void): Promise<void> => {

    try {
        const response = await fetch('/signUserOut', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            setSuccess(false)
            throw new Error('Could not reach endpoint for signout');
        }
        const result = await response.json();
        if (result) {
            setSuccess(true);
        };

    } catch (error) {
        setSuccess(false);
        console.error(error);
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
        }


    } catch (error) {
        console.log(error)
        setEmailSent(false)
    }
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
    }
}


export const getFromApify = async (chosen: SelectedArticle[]) => {

    try {
        const response = await fetch('/apifyScraper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                articles: chosen,
            }),
        });

        if (!response.ok) {
            throw new Error(`Coud not reach the endpoint /apifyScraper  ${response.statusText}`);

        }

        const results = await response.json();
        if (results) {
            console.log(results);
            console.log(results[0].content)
        }

    } catch (error) {
        console.log(error);
    };
};