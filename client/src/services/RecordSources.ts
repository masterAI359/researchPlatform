interface RecordedSources {
    recordedString: string,
    urls: string[] | null
};

export function getSourcesToRecord(articles: any, failedNotifications: any): RecordedSources {

    if (!Array.isArray(articles) && !Array.isArray(failedNotifications)) {
        return { recordedString: "[]", urls: [] };
    };

    const scrapedURLs = articles?.map((item: any) => { return item.article_url });
    const failedURLs = failedNotifications?.map((item: any) => { return item.article_url });
    const urls = [...scrapedURLs, ...failedURLs];
    const newSourcesString = JSON.stringify(urls);
    return { recordedString: newSourcesString, urls: urls };
};


export function canUpdateSources(data: RecordedSources, currentString: string) {
    const links = data.urls;
    const recordString = data.recordedString;
    const urlsRecorded: boolean = Array.isArray(links) && (links.length > 0);
    const stringChanged: boolean = recordString !== currentString;
    const canUpdate: boolean = (urlsRecorded) && (stringChanged);

    return canUpdate;
};