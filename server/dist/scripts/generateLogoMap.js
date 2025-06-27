import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Adjust this path to match your old code
const logosDir = path.resolve(__dirname, '../../public/images/logos');
const outputPath = path.resolve(__dirname, '../endpoints/logoMap.ts');
// Read SVG files from logos directory
const entries = fs.readdirSync(logosDir)
    .filter(file => path.extname(file) === '.svg')
    .map(file => {
    const publication = path.basename(file, '.svg').toLowerCase();
    const relativePath = `/images/logos/${file}`;
    return `  "${publication}": "${relativePath}"`;
});
// Generate the export string
const fileContent = `// 🛑 AUTO-GENERATED FILE — DO NOT EDIT DIRECTLY
export const logoMap: Record<string, string> = {
${entries.join(',\n')}
};
`;
// Write the output to logoMap.ts
fs.writeFileSync(outputPath, fileContent);
console.log('✅ logoMap.ts generated!');
//# sourceMappingURL=generateLogoMap.js.map