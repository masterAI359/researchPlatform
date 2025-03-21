import { createClient } from '@supabase/supabase-js'
import express, { query, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js'

const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath })
const supabaseURL = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY


export const deleteUser = async (req: Request, res: Response) => {

    const user = req.query.q as string;
    const endpoint = supabaseURL

    try {


    } catch (error) {

    }
}
