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




