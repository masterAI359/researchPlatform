import he from 'he'; //ran --save-dev @types/he... may need to change this to dependency instead of dev dependancy
import sanitizeHtml from 'sanitize-html';

export default function decodeItem (item: any) {
    if (item === null || item === undefined) {
        return item;
    }
    if (Array.isArray(item)) {
        const decodedItem: any = item.map((element: any) => {
        return decodeItem(element);
            
        })
        return decodedItem;
    } else if(typeof item === "object") {  
                                        
        return Object.entries(item).reduce((acc: any, [key, value]) => {
            acc[key] = decodeItem(value); 
            return acc             
        } , {}) 
    
    } else if (typeof item === "string") {
        const decodedItem = he.decode(item);
       const dirty = decodedItem 
       console.log(dirty)
       const clean = sanitizeHtml(dirty, {allowedTags: [], allowedAttributes: {} })
       console.log(clean)
        return clean;
    }

    //in case of unexpected types
    return item
}

