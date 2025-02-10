//helper functions to shorten strings, arrays etc

export const limitArray = (arr: any) => {

    let shortenedAuthors = []


    if (arr !== null) {

        for (let i = 0; i < arr.length; i++) {

            if (i < 3) {

                if (arr[i].length < 25) {
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