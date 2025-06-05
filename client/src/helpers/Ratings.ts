export const numBiasSources = (articles: SavedArticle[], leaningOne: string, leaningTwo?: string) => {

    let count: number = 0;

    for (let i = 0; i < articles.length; i++) {

        let bias: string | null = articles[i].bias;

        if (bias === leaningOne) {
            count++
        } else if (leaningTwo && bias === leaningTwo) {
            count++
        } else {
            continue
        };
    }
    return count;
};



