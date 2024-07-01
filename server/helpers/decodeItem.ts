import he from 'he'; //ran --save-dev @types/he... may need to change this to regular dependency instead of dev dependancy

export default function decodeItem (item: any) {
    if (item == undefined || item == null) {
        return item;
    }
    if (Array.isArray(item)) {
        const decodedItem: any = item.map((element: any) => {
        return decodeItem(element);
            
        })
        return decodedItem;
    } else if(typeof item === "object") {  //Object.entries breaks down the 'item' object into an array of key value pairs.
                                        //   should look like [[name, 'title of article as value], [..so on and so forth]]
        const decodedItem = Object.entries(item).reduce((acc: any, [key, value]) => {
    
            acc[key] = decodeItem(value); // think of this as 'for each key-value pair from Object.entries, we assign
            return acc                    // the decoded 'value' property that will be decoded from our base case to the key from the current key-value pair
        } , {})
        return decodedItem;
    } else if (typeof item === "string") {
        const decodedItem = he.decode(item);
        return decodedItem;
    }
}