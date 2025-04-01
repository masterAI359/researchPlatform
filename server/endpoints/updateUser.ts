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


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: true
    }
})


export const updateUserPassword = async (req: Request, res: Response) => {

    const userPassword = req.query.q as string;

    console.log(userPassword)

    const decodePassword = decodeURIComponent(userPassword)

    try {

        const { data, error } = await supabase.auth.updateUser({
            password: decodePassword
          })


          if(data) {
            res.send({ message: data })
          } else if(error) {
            res.send({ message: error.message })
          }

    } catch (error) {
        console.error(error)
    }
}