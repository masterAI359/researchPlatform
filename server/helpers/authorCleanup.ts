function cleanup (str: string) {

    const blacklist = new Set([
      "Display", "Inline", "Vertical", "Align", "Block", "Avatar", "Class",
      "Where", "Height", "Auto", "Max", "Width", "Margin", "Table", ".Wp", "Plus", "Co",
      "Layout"
    ]);
  
    let stringArray = str.split(' ')
    let newStringArray = []
  
    for (let i = 0; i < stringArray.length; i++) {
     
        let element = stringArray[i].split('-')
  
        for(let j = 0; j < element.length; j++) {
  
          if (blacklist.has(element[j])) {
            return null
          } else {
            newStringArray.push(element[j])
          }
        }
    }
    console.log(newStringArray)
    return newStringArray
  
  }


  export default function cleanseAuthorList (arr: string[]) {

    const validFormat = arr.map((author: string) => {

      return cleanup(author)
    })

    return validFormat
  }

