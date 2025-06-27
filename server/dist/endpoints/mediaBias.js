import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });
import { SUPABASE_KEY, SUPABASE_URL } from '../src/Config.js';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: true
    }
});
export const getMediaBiases = async (provider) => {
    try {
        const { data, error } = await supabase
            .from('sources')
            .select()
            .ilike('name', provider)
            .single();
        if (data) {
            const { country, bias, factual_reporting, name } = data;
            return { country, bias, factual_reporting, name };
        }
        if (error)
            console.log(error.message);
    }
    catch (error) {
        throw new Error('Error fetching the data from DB');
    }
    ;
};
//# sourceMappingURL=mediaBias.js.map