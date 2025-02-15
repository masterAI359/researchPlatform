
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