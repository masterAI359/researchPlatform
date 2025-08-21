//web workers script to call on render of dashboard

function getSourceIntegrity(userArticles) {

    let integrityRatings = {
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


    const arr = Object.values(integrityRatings)

    return arr;
};


self.onmessage = (e) => {

    const sources = e.data;
    const integrityRatings = getSourceIntegrity(sources);
    self.postMessage(integrityRatings);
};



