

const numBiasSources = (articles, leaningOne, leaningTwo) => {

    let count = 0;

    if ((Array.isArray(articles)) && (articles.length > 0)) {

        for (let i = 0; i < articles.length; i++) {

            let bias = articles[i].bias;

            if (bias === leaningOne) {
                count++
            } else if (leaningTwo && bias === leaningTwo) {
                count++
            } else {
                continue
            };
        };
        return count;
    } else {
        return null;
    };
};


self.onmessage = (e) => {
    const userArticles = e.data;

    const counts = {

        Right: numBiasSources(userArticles, "Right", "Right-Center"),
        Left: numBiasSources(userArticles, "Left", "Left-Center"),
        Center: numBiasSources(userArticles, "LeastBiased"),
        Conspiracy: numBiasSources(userArticles, "Conspiracy-Pseudoscience"),
        Questionable: numBiasSources(userArticles, 'Questionable'),
        Satire: numBiasSources(userArticles, "Satire"),
        Scientific: numBiasSources(userArticles, "Pro-Science"),
        Unknown: numBiasSources(userArticles, null)
    };

    const ratings = Object.values(counts);

    self.postMessage({ chartData: ratings });
};