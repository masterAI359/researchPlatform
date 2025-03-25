import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logosDir = path.resolve(__dirname, '../../client/public/images/logos');
const outputPath = path.resolve(__dirname, '../endpoints/logoMap.ts');
const entries = fs.readdirSync(logosDir)
    .filter(file => path.extname(file) === '.svg')
    .map(file => {
    const publication = path.basename(file, '.svg').toLowerCase();
    const relativePath = `/images/logos/${file}`;
    return `  "${publication}": "${relativePath}"`;
});
const fileContent = `// 🛑 AUTO-GENERATED FILE — DO NOT EDIT DIRECTLY
export const logoMap: Record<string, string> = {
${entries.join(',\n')}
};
`;
fs.writeFileSync(outputPath, fileContent);
console.log('✅ logoMap.ts generated!');
//# sourceMappingURL=generateLogoMap.js.map