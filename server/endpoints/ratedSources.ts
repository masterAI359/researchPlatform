import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath })
import { SUPABASE_KEY, SUPABASE_URL } from '../src/Config.js';
import { createClient } from '@supabase/supabase-js';
import { Database } from './databaseInterfaces.js';

export const sourceSet = new Set();

export const ratedSources = async () => {

    const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
        auth: {
            persistSession: true
        }
    });

    try {
        const { data, error } = await supabase.from('sources').select('domain')

        if (data) {
            for (const row of data ?? []) {
                if (row.domain) {
                    sourceSet.add(row.domain.toLowerCase());
                }
            }
        } else if (error) {
            throw new Error(`issue retreving sources from database ${error}`);
        }

        console.log(sourceSet)

    } catch (error) {
        console.error(error);
    }
}