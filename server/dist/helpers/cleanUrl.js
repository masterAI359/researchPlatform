export const cleanURL = (url) => {
    try {
        const u = new URL(url);
        u.search = ""; // removes query params
        return u.toString();
    }
    catch {
        return url;
    }
};
//# sourceMappingURL=cleanUrl.js.map