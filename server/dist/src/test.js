import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../../../.env');
console.log('Resolved path to .env file:', envPath);
dotenv.config({ path: envPath });
console.log({ 'TLDR Key': process.env.TLDR_KEY });
//# sourceMappingURL=test.js.map