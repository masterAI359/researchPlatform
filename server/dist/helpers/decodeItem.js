import he from 'he'; //ran --save-dev @types/he... may need to change this to dependency instead of dev dependancy
import sanitizeHtml from 'sanitize-html';
//TODO: implement the string-strip-html library to deal with malformed HTML
export default function decodeItem(item) {
    const malformedTags = (text) => {
        return text.replace(/(?<!<)(\/?h\d|\/?p|\/?div|\/?span|\/?strong|\/?em)/g, '<$1');
    };
    if (item === null || item === undefined) {
        return item;
    }
    if (Array.isArray(item)) {
        const decodedItem = item.map((element) => {
            return decodeItem(element);
        });
        return decodedItem;
    }
    else if (typeof item === "object") {
        return Object.entries(item).reduce((acc, [key, value]) => {
            acc[key] = decodeItem(value);
            return acc;
        }, {});
    }
    else if (typeof item === "string") {
        const decodedItem = he.decode(item);
        const dirty = decodedItem;
        const clean = sanitizeHtml(dirty, {
            allowedTags: [],
            allowedAttributes: {},
        });
        const final = he.decode(clean);
        return final;
    }
    //in case of unexpected types
    return item;
}
//# sourceMappingURL=decodeItem.js.map