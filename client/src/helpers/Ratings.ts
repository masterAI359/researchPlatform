import { Calculations } from "@/env";


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