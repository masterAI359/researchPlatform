function cleanup(str: string) {
  const blacklist = new Set([
    "Display", "Inline", "Vertical", "Align", "Block", "Avatar", "Class",
    "Where", "Height", "Auto", "Max", "Width", "Margin", "Table", ".Wp", "Plus", "Co",
    "Layout"
  ]);

  const stringArray = str.split(" ");
  const cleanedAuthors: string[] = [];

  for (const chunk of stringArray) {
    const parts = chunk.split("-");
    if (parts.some((p) => blacklist.has(p))) {
      return "unknown";
    }
    cleanedAuthors.push(parts.join(" "));
  }

  return cleanedAuthors;
};


export default function cleanseAuthorList(arr: string[]) {
  return arr.map((author) => {
    const cleaned = cleanup(author);
    if (Array.isArray(cleaned)) {
      // merge back the cleaned name
      return cleaned.join(" ");
    }
    return cleaned;
  });
};

