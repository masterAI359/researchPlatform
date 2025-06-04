

export const leftBiasSources = (articles: SavedArticle[]) => {

    let count: number = 0;

    for (let i = 0; i < articles.length; i++) {

        let bias: string | null = articles[i].bias;

        if (bias === 'Left-Center') {
            count++
        } else if (bias === 'Left') {
            count++
        } else {
            continue
        };
    }
    return count;
};


export const rightBiasSources = (articles: SavedArticle[]) => {

    let count: number = 0;

    for (let i = 0; i < articles.length; i++) {
        let bias = articles[i].bias;

        if (bias === 'Right-Center') {
            count++;
        } else if (bias === "Right") {
            count++;
        } else {
            continue;
        };
    }

    return count;
};