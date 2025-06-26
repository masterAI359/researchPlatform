import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath })
import { SUPABASE_KEY, SUPABASE_URL } from '../src/Config.js';
import { Request, Response } from 'express'
import { createClient } from '@supabase/supabase-js';
import { Database } from './databaseInterfaces.js';


const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: true
    }
});


export const deleteUser = async (req: Request, res: Response): Promise<void> => {

    const user = req.query.q as string;
    const decodedUser = decodeURIComponent(user);

    try {
        const { data, error } = await supabase.auth.admin.deleteUser(
            decodedUser
        )
        if (data) {
            res.send({ response: data })
            return;
        } else if (error) {
            res.status(500).json({ message: `Database responded with an error: ${error.message}` });
            return;
        };
    } catch (error) {
        console.error({ 'Encountered Error': error });
        res.status(500).json({ message: error });
        return;
    };
};
