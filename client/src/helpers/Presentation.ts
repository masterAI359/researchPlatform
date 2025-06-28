//helper functions to shorten strings, arrays etc

export const limitArray = (arr: any) => {

    let shortenedAuthors = []


    if (arr !== null) {

        for (let i = 0; i < arr.length; i++) {

            if (i < 5) {

                if (arr[i].length < 45) {
                    shortenedAuthors.push(arr[i])
                } else {
                    continue
                }
            } else if (i > 3) {
                break
            }
        }
    } else {
        shortenedAuthors.push("The authors of this article couldn't be determined. Visit the provider for author information")
    }

    return shortenedAuthors
}


export const limitName = (name: string) => {

    let splitName = name.split('')

    let shortenedArray = []

    for (let i = 0; i < splitName.length; i++) {

        if (i <= 12) {
            shortenedArray.push(splitName[i])

        } else {
            break
        }
    }

    let shortString = shortenedArray.join('')
    let emailWithElipses = shortString + '...'
    return emailWithElipses

}


export const formPages = (links: any) => {

    let pageArray = []

    for (let i = 0; i < links.length; i += 9) {

        let end = i + 9

        let subArray = links.slice(i, end)
        pageArray.push(subArray)

    }
    return pageArray
}


export const formatDate = (datePublished: string) => {
    if (datePublished) {
        const splitDate = datePublished.split(" ")
        const addCommas = splitDate.map((str: string, index: number) => {

            if (splitDate.length === index + 2) {
                return str + ','
            } else {
                return str
            }
        })

        const formatted = addCommas.join(" ")


        return formatted
    } else {
        return "Date unavailable, visit source to see date of publication."
    }


};


export const splitPosts = (
    stored: string,
    setFirstHalf: React.Dispatch<React.SetStateAction<any[]>>,
    setSecondHalf: React.Dispatch<React.SetStateAction<any[]>>
) => {

    try {

        const fromLocal = JSON.parse(stored);
        const storedPosts = fromLocal.bsPosts;
        const postsUsed = storedPosts.slice(0, Math.min(16, storedPosts.length));
        const mid = Math.floor(postsUsed.length / 2);

        setFirstHalf(postsUsed.slice(0, mid));
        setSecondHalf(postsUsed.slice(mid));

    } catch (error) {
        console.error(error);
    };


};


export const limitString = (str: string): string => {

    let arr: string[] = [];
    let temp = str.split('');

    let count: number = 0;

    for (let i = 0; i < temp.length; i++) {

        if (count >= 50) {
            break
        } else {
            arr.push(temp[i]);
            count++;
        };
    };

    const shortened = arr.join('');
    const results = shortened + '...';
    return results;
};

