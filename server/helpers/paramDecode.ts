

export default function decodeQueryParam(received: any) {

    const recievedObjects = received.map((item: any) => {

        const url = item.url
        const decoded = decodeURIComponent(url.replace(/\+/g, ""))
        return decoded
    })

    return recievedObjects
}