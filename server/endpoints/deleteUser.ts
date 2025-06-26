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
import { DeleteUserBody } from './interfaces.js';


const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: true
    }
});


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body as DeleteUserBody;

    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required." });
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.session) {
        res.status(401).json({ message: 'Invalid Credentials ' });
        return;
    };

    const user_id = data.session.user.id;

    try {
        const { data, error } = await supabase
            .auth
            .admin
            .deleteUser(user_id);

        if (data) {
            res.status(200).send({ message: 'User deleted successfully.' });
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
