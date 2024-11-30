import he from 'he'; //ran --save-dev @types/he... may need to change this to dependency instead of dev dependancy
import { strict as assert } from 'assert';
import { stripHtml } from 'string-strip-html';
import sanitizeHtml from 'sanitize-html';


//TODO: implement the string-strip-html library to deal with malformed HTML

export default function decodeItem(item: any) {

    const malformedTags = (text: string) => {

        return text.replace(/(?<!<)(\/?h\d|\/?p|\/?div|\/?span|\/?strong|\/?em)/g, '<$1')
    }


    if (item === null || item === undefined) {
        return item;
    }
    if (Array.isArray(item)) {
        const decodedItem: any = item.map((element: any) => {
            return decodeItem(element);

        })
        return decodedItem;
    } else if (typeof item === "object") {

        return Object.entries(item).reduce((acc: any, [key, value]) => {
            acc[key] = decodeItem(value);
            return acc
        }, {})

    } else if (typeof item === "string") {
        const decodedItem = he.decode(item);
        const dirty = decodedItem
        const clean = sanitizeHtml(dirty, {
            allowedTags: [],
            allowedAttributes: {},
        })
        const final = he.decode(clean)
        return final;
    }

    //in case of unexpected types
    return item
}

