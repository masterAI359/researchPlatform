

const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}

export async function fetchArticles(query: string) {

    try {
        const response = await fetch(`/search/articles?q=${query}`,
            options
        )
        if (!response.ok) {
            throw new Error("There was a network response issue!")
        }
        const jsonResponse = await response.json()
        if (jsonResponse) {
            return jsonResponse
        }
    } catch (err) {
        if (err) {
            return err
        }
    }
}


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
            setExplanation("failed to connect to Wikipedia API :/")
        }

    } catch (err) {
        console.log(err);
    }

}


export const supabaseSignIn = async (email: string, password: string, setLogginIn: (loggingIn: boolean) => void, setSuccessful: (successful: boolean) => void, dispatch: any, fetchUserCredentials: Function) => {

    try {
        setLogginIn(true);

        const response = await fetch('http://localhost:5001/supabaseLogIn', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        if (!response.ok) {
            setSuccessful(false)
            const errorText = await response.text(); // or .json() if you return JSON
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