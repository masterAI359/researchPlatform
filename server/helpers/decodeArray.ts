

export const decodeArray = (array: any) => {

    const decoded = array.map((element: any) => {

        const decodedElement = decodeURIComponent(element.replace(/\+/g, " "));
        return decodedElement
    })

    return JSON.parse(decoded)
}