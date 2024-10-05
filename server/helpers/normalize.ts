const summaryRequests = (query: object[]) => {

    const request: {[key: string]: Function } = {};

    for (let i = 0; i < query.length; i++) {

        let num = i + 1


        request[`request${num}`] = function getSummaryContent () {

            const { url, title, provider, logo } = query[i];

            const options = {
                method: 'GET',
                headers: 'placeholder',
            }
            
            const response = fetch(url, {

                method: 'POST',
				headers: {
					'x-rapidapi-key': TLDRKey,
					'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					url: url,
					num_sentences: 5,
					is_detailed: true,                                   
				})
            })

            .then(response => {
                if(!response.ok) {
                console.error({'There was an issue fetching the summary for': url})
                return null
            }
            return response.json()
        })
        }

        return request[`request${num}`];
    }
}



