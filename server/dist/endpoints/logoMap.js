import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const logosPath = `../../../client/public/images/logos`;
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
function fillLogoMap(logosPath) {
    const logoMap = new Map();
    const svgFiles = fs.readdirSync(logosPath);
    svgFiles.forEach((file) => {
        if (path.extname(file) === '.svg') {
            const publication = path.basename(file, '.svg');
            const svgPath = `../../public/images/logos/${file}`;
            logoMap.set(publication, svgPath);
        }
    });
    return logoMap;
}
const logosDirectory = path.resolve(__dirname, logosPath);
const logoMap = fillLogoMap(logosDirectory);
export { logoMap };
export const getLogoMap = (req, res) => {
    res.send(Object.fromEntries(logoMap));
};
console.log(logoMap);
//# sourceMappingURL=logoMap.js.map