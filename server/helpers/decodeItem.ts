import he from 'he';
import sanitizeHtml from 'sanitize-html';
import { TldrRequest } from '../endpoints/interfaces';


export default function decodeItem(item: any) {

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

    return item
};


export const paramDecode = (item: string) => {
    try {
        const decodedQuery = decodeURIComponent(item.replace(/\+/g, " "));

        return decodedQuery;

    } catch (error) {
        console.error("Malformed URI decoding failed:", error);
        throw new Error("Malformed URI parameter");
    }
};

