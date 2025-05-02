

export default function NormalizeBlueSkyText (item: string) {

    let normalized: string = item.replace(/\u00A0/g, "");

    return normalized;
};