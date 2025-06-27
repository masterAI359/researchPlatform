export const decodeArray = (array) => {
    const decoded = array.map((element) => {
        const decodedElement = decodeURIComponent(element.replace(/\+/g, " "));
        return decodedElement;
    });
    return JSON.parse(decoded);
};
//# sourceMappingURL=decodeArray.js.map