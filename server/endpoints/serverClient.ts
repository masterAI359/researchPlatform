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


export const supabaseLogin = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
            const response = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if(response.data) {
                const data = response.data;
                console.log(data)
                res.send(data);
            };

    } catch(error) { 
        console.log(error);
    }
}


export const getMBFC = async (req: Request, res: Response) => {

    //**  NEED TO ADD THIS ENDPOINT TO THE TLDRTHIS ENDPOINT TO FETCH THE RATINGS UPON EACH SUCCESSFUL EXTRACTION OF ARTICLES ** */

    try {


    } catch(error) {
        console.log(error)
    }
}



export const getUserArticles = async (req: Request, res: Response) => {

    const { id } = req.body;

    try {
        const { data, error } = await supabase
        .from('articles')
        .select()
        .eq('user_id', id)

        if(data) {
            console.log(data)
            res.send(data)
        };

        if(error) {
            console.log(error.message);
        };


    } catch (error) {
        console.log(error);
    };
};



