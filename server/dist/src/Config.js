import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
export const BING_KEY = process.env.BING_KEY;
export const TLDR_KEY = process.env.TLDR_KEY;
export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const PORT = (process.env.PORT || 5001);
//# sourceMappingURL=Config.js.map