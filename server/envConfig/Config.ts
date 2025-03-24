// config.ts
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const BING_KEY = process.env.BING_KEY as string;
export const TLDR_KEY = process.env.TLDR_KEY as string;
export const SUPABASE_URL = process.env.SUPABASE_URL as string;
export const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY as string;
export const PORT = process.env.PORT as string || 5001
