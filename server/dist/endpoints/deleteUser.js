var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { supabase } from '../src/app.js';
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });
export const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('endpoint hit');
    const user = req.query.q;
    console.log(user);
    const decodedUser = decodeURIComponent(user);
    console.log(decodedUser);
    try {
        console.log('deleting');
        const { data, error } = yield supabase.auth.admin.deleteUser(decodedUser);
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
});
//# sourceMappingURL=deleteUser.js.map