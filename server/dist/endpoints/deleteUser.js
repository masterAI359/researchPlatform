import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { supabase } from '../src/app.js';
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });
export const deleteUser = async (req, res) => {
    console.log('endpoint hit');
    const user = req.query.q;
    console.log(user);
    const decodedUser = decodeURIComponent(user);
    console.log(decodedUser);
    try {
        console.log('deleting');
        const { data, error } = await supabase.auth.admin.deleteUser(decodedUser);
        if (data) {
            console.log({ 'Data Recieved': data });
        }
        else if (error) {
            console.log(error.message);
        }
        return res.send({ response: data });
    }
    catch (error) {
        console.log({ 'Encountered Error': error });
        return res.status(500).json({ message: error });
    }
};
//# sourceMappingURL=deleteUser.js.map