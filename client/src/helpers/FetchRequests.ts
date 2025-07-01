

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