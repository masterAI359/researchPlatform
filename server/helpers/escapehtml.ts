import striptags from 'striptags';

export default function escapeHTML (object:object) {

    let cleanString:string = ''

    for (const item in object) {

        cleanString = striptags(object[item])
    }

    return cleanString
}

