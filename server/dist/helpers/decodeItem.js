import he from 'he'; //ran --save-dev @types/he... may need to change this to dependency instead of dev dependancy
import sanitizeHtml from 'sanitize-html';
//TODO: refresh on iterative methods and reduce prototype
export default function decodeItem(item) {
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
            // console.log(acc[key])
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
    return item;
}
//# sourceMappingURL=decodeItem.js.map