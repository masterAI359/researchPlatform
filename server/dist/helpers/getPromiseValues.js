export const getPromiseValues = (results) => {
    const returnValues = results.map((result) => {
        const resultData = result.value ? result.value : result.reason;
        return resultData;
    });
    const success = returnValues.filter((result) => result !== undefined);
    return success;
};
//# sourceMappingURL=getPromiseValues.js.map