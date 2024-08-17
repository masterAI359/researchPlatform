import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to file path
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);

// Resolve the correct path to .env
const envPath = path.resolve(__dirname, '../../../../.env');
console.log('Resolved path to .env file:', envPath);

// Load .env file from the project root
dotenv.config({ path: envPath });

// Log the TLDR_KEY
console.log({ 'TLDR Key': process.env.TLDR_KEY });
