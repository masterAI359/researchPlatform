import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath })
import { TLDR_KEY } from '../src/Config.js';
import { SUPABASE_KEY, SUPABASE_URL } from '../src/Config.js';
import { Request, Response } from 'express'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: true
    }
})


interface SourceProviders {
    sourceName: string
};


export const getMediaBiases = async (req: Request, res: Response) => {
    const received = req.query.q as string;
    const url = 'https://media-bias-fact-check-ratings-api2.p.rapidapi.com/fetch-data';
    const options = {
	method: 'GET',
	headers: {
        
		'x-rapidapi-host': 'media-bias-fact-check-ratings-api2.p.rapidapi.com',
        'x-rapidapi-key': TLDR_KEY,
	}
};


    try {

        const response = await fetch(url, options)

    } catch(err) {
        console.log(err)
    }
}