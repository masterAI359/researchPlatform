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

    console.log('endpoint hit')

    const user = req.query.q as string;

    console.log(user)

    const decodedUser = decodeURIComponent(user)

    console.log(decodedUser)

    try {
        console.log('deleting')
        const { data, error } = await supabase.auth.admin.deleteUser(
            decodedUser
        )
        if (data) {
            console.log({ 'Data Recieved': data })
        } else if (error) {
            console.log(error.message)
            res.status(500).json({ message: 'Database responded with an error' })
        }
        return res.send({ response: data })

    } catch (error) {
        console.log({ 'Encountered Error': error })
        return res.status(500).json({ message: error })
    }
}
