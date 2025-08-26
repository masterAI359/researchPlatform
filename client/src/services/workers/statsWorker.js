const calcPercentageChanged = (investigations) => {
    let counter = 0;
    let total = investigations.length;
    for (let i = 0; i < investigations.length; i++) {
        let initial = investigations[i].initial_perspective;
        let end = investigations[i].ending_perspective;

        if ((initial && end) && initial !== end) {
            counter++;
        }
    };

    let percentage = Math.floor((counter / total) * 100);
    return percentage ?? 0;
};


const calcValidated = (investigations) => {

    let counter = 0;
    let total = investigations.length;
    for (let i = 0; i < investigations.length; i++) {
        let initial = investigations[i].initial_perspective;
        let end = investigations[i].ending_perspective;

        if ((initial && end) && initial === end) {
            counter++;
        }
    };

    let percentage = Math.floor((counter / total) * 100);
    return percentage ?? 0;
}



const calcNeutral = (investigations) => {

    let counter = 0;
    let total = investigations.length;
    for (let i = 0; i < investigations.length; i++) {

        let neutral = investigations[i].ending_perspective === 'Neutral';

        if (neutral) {
            counter++;
        }
    };

    let percentage = Math.floor((counter / total) * 100);
    return percentage ?? 0;
};



const calcNeedMore = (investigations) => {

    let counter = 0;
    let total = investigations.length;
    for (let i = 0; i < investigations.length; i++) {
        let initial = investigations[i].initial_perspective;
        let end = investigations[i].ending_perspective;

        if (!initial && !end) {
            counter++;
        }
    };

    let percentage = Math.floor((counter / total) * 100);
    return percentage ?? 0;
};


const calculatePercentages = (investigations) => {

    const changePercent = calcPercentageChanged(investigations);
    const validatedPercent = calcValidated(investigations);
    const neutralPercent = calcNeutral(investigations);
    const needMorePercent = calcNeedMore(investigations);
    const calculations = { change: changePercent, valid: validatedPercent, neutral: neutralPercent, needMore: needMorePercent };
    return calculations;
};

//TODO: create worker in metrics.tsx file to offload these calculations from the main thread on first render