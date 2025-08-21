

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
    const instruction = e.data.type;
    const userArticles = e.data.input;


    const counts = {
        Left: numBiasSources(userArticles, "Left", "Left-Center"),
        Right: numBiasSources(userArticles, "Right", "Right-Center"),
        Center: numBiasSources(userArticles, "LeastBiased"),
        Conspiracy: numBiasSources(userArticles, "Conspiracy-Pseudoscience"),
        Questionable: numBiasSources(userArticles, 'Questionable'),
        Satire: numBiasSources(userArticles, "Satire"),
        Scientific: numBiasSources(userArticles, "Pro-Science")
    };

    self.postMessage({ chartData: counts });
};