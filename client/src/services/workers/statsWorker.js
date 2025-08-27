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
    const calculations = { percentChanged: changePercent, validated: validatedPercent, neutral: neutralPercent, neededMore: needMorePercent };
    return calculations;
};


self.onmessage = (e) => {

    const investigations = e.data;

    const stats = calculatePercentages(investigations);

    self.postMessage({ chartData: stats });
};
