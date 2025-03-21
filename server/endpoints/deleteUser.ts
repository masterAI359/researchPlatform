import { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { supabase } from '../src/app.js'

const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath })


export const deleteUser = async (req: Request, res: Response) => {

    const user = req.query.q as string;

    try {
        const { data, error } = await supabase.auth.admin.deleteUser(
            user
        )

        if (data) {
            console.log(data)
            res.send('Account deleted successfully')
        } else if (error) {
            console.log(error.message)
            res.send('There was an issue deleting your account')
        }

    } catch (error) {
        console.log(error)

    }
}
