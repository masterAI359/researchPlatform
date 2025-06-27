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
export const deleteUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required." });
        return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session) {
        res.status(401).json({ message: 'Invalid Credentials ' });
        return;
    }
    ;
    const user_id = data.session.user.id;
    try {
        const { data, error } = await supabase
            .auth
            .admin
            .deleteUser(user_id);
        if (data) {
            res.status(200).send({ message: 'User deleted successfully.' });
            return;
        }
        else if (error) {
            res.status(500).json({ message: `Database responded with an error: ${error.message}` });
            return;
        }
        ;
    }
    catch (error) {
        console.error({ 'Encountered Error': error });
        res.status(500).json({ message: error });
        return;
    }
    ;
};
//# sourceMappingURL=deleteUser.js.map