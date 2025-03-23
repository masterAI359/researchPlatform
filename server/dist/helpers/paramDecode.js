export default function decodeQueryParam(received) {
    const recievedObjects = received.map((item) => {
        const url = item.url;
        const decoded = decodeURIComponent(url.replace(/\+/g, ""));
        return decoded;
    });
    return recievedObjects;
}
//# sourceMappingURL=paramDecode.js.map