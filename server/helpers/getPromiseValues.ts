export const getPromiseValues = (results: any) => {

    const returnValues = results.map((result: any) => {
        const resultData = result.value ? result.value : result.reason
        return resultData
    });

    const success = returnValues.filter((result: any) => result !== undefined);

    return success;
};