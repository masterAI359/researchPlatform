export const cleanURL = (url: string) => {
    try {
        const u = new URL(url);
        u.search = ""; // removes query params
        return u.toString();
    } catch {
        return url;
    }
};