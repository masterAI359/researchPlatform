import { Calculations, SavedArticle, Bias } from "@/env";


export const numBiasSources = (articles: SavedArticle[], leaningOne: Bias, leaningTwo?: Bias): number | null => {

    let count: number = 0;

    if (Array.isArray(articles)) {

        for (let i = 0; i < articles.length; i++) {

            let bias: string | null = articles[i].bias;

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



export const calcPercentageChanged = (investigations: any) => {
    let counter: number = 0;
    let total: number = investigations.length;
    for (let i = 0; i < investigations.length; i++) {
        let initial: string = investigations[i].initial_perspective;
        let end: string = investigations[i].ending_perspective;

        if ((initial && end) && initial !== end) {
            counter++;
        }
    };

    let percentage: number = Math.floor((counter / total) * 100);
    return percentage ?? 0;
};


export const calcValidated = (investigations: any) => {

    let counter: number = 0;
    let total: number = investigations.length;
    for (let i = 0; i < investigations.length; i++) {
        let initial: string = investigations[i].initial_perspective;
        let end: string = investigations[i].ending_perspective;

        if ((initial && end) && initial === end) {
            counter++;
        }
    };

    let percentage: number = Math.floor((counter / total) * 100);
    return percentage ?? 0;
}



export const calcNeutral = (investigations: any) => {

    let counter: number = 0;
    let total: number = investigations.length;
    for (let i = 0; i < investigations.length; i++) {

        let neutral: boolean = investigations[i].ending_perspective === 'Neutral';

        if (neutral) {
            counter++;
        }
    };

    let percentage: number = Math.floor((counter / total) * 100);
    return percentage ?? 0;
};



export const calcNeedMore = (investigations: any) => {

    let counter: number = 0;
    let total: number = investigations.length;
    for (let i = 0; i < investigations.length; i++) {
        let initial: string = investigations[i].initial_perspective;
        let end: string = investigations[i].ending_perspective;

        if (!initial && !end) {
            counter++;
        }
    };

    let percentage: number = Math.floor((counter / total) * 100);
    return percentage ?? 0;
};


export const calculatePercentages = (investigations: any) => {

    const changePercent = calcPercentageChanged(investigations);
    const validatedPercent = calcValidated(investigations);
    const neutralPercent = calcNeutral(investigations);
    const needMorePercent = calcNeedMore(investigations);
    const calculations: Calculations = { change: changePercent, valid: validatedPercent, neutral: neutralPercent, needMore: needMorePercent };
    return calculations;

};



export const getSourceIntegrity = (userArticles: SavedArticle[], dispatch: any, getReportingRatings: any) => {

    interface IntegrityRatings {
        veryHigh: number;
        high: number;
        mostlyFactual: number;
        mixed: number;
        low: number;
        veryLow: number;
        conspiracy: number;
        unknown: number;
    };

    let integrityRatings: IntegrityRatings = {
        veryHigh: 0,
        high: 0,
        mostlyFactual: 0,
        mixed: 0,
        low: 0,
        veryLow: 0,
        conspiracy: 0,
        unknown: 0
    };


    for (const article of userArticles) {

        switch (article.factual_reporting) {
            case 'Very High':
                integrityRatings.veryHigh++;
                break;
            case 'High':
                integrityRatings.high++;
                break;
            case 'Mostly Factual':
                integrityRatings.mostlyFactual++;
                break;
            case 'Mixed':
                integrityRatings.mixed++;
                break;
            case 'Low':
                integrityRatings.low++;
                break;
            case 'Very Low':
                integrityRatings.veryLow++;
                break;
            case 'Conspiracy-Pseudoscience':
                integrityRatings.conspiracy++;
                break;

            default:
                integrityRatings.unknown++;
        };
    };

    dispatch(getReportingRatings(integrityRatings));
    return integrityRatings;
};