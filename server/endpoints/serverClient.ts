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
import { error } from 'console';
import { data } from 'cheerio/lib/api/attributes.js';


export const createSupabaseFromRequest = (req: Request) => {
    const accessToken = req.cookies['sb-access-token'];
    // console.log('access token from cookie:', req.cookies['sb-access-token']);


    return createClient(SUPABASE_URL, SUPABASE_KEY, {
        global: {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    });
};




export const supabaseLogin = async (req: Request, res: Response) => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { email, password } = req.body;

    try {
        const response = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (response.data.session) {
            const { access_token, refresh_token } = response.data.session;
            const isProduction = process.env.NODE_ENV === 'production';
            res.cookie('sb-access-token', access_token, {
                httpOnly: true,
                secure: isProduction,
                sameSite: 'lax',
                maxAge: 60 * 60 * 1000,
            });

            res.cookie('sb-refresh-token', refresh_token, {
                httpOnly: true,
                secure: isProduction,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            const data = response.data.session;
            console.log(data)
            res.send(data);
        };

    } catch (error) {
        console.log(error);
    }
}



export const getUserArticles = async (req: Request, res: Response) => {
    const supabase = createSupabaseFromRequest(req);
    const { id } = req.body;

    console.log('🍪 Incoming cookies in getUserArticles:', req.cookies);

    try {
        const { data, error } = await supabase
            .from('articles')
            .select()
            .eq('user_id', id)

        if (data) {
            res.send(data)
        };

        if (error) {
            console.log(error.message);
        };


    } catch (error) {
        console.log(error);
    };
};



export const getUserResearch = async (req: Request, res: Response) => {
    const supabase = createSupabaseFromRequest(req);
    const { id } = req.body;

    try {

        const { data, error } = await supabase
            .from('investigations')
            .select()
            .eq('user_id', id)

        if (data) {
            console.log(data);
            res.send(data);
        };

        if (error) {
            console.log(error.message);
        };


    } catch (error) {
        console.log(error)
    }
}


const saveArticleForUser = async (req: Request) => {
    const supabase = createSupabaseFromRequest(req);
    const { dataToSave } = req.body;
    const { text, url, id, image_url, summary, title, authors, date, provider, fallbackDate, factual_reporting, rating, country } = dataToSave;

    try {
        const { data, error } = await supabase
            .from('articles')
            .upsert(
                [
                    {
                        title: title,
                        image_url: image_url,
                        provider: provider,
                        full_text: text,
                        authors: authors,
                        date_published: date || fallbackDate,
                        article_url: url,
                        summary: summary,
                        user_id: id,
                        provider_bias: rating,
                        provider_reporting: factual_reporting,
                        country_origin: country,
                    },
                ],
                {
                    onConflict: 'user_id,article_url',
                }
            )
            .select();


        if (data) {
            console.log(data)
            const message = "Saved";
            return message;
        }

        if (error) {
            console.log(error.message);
        };

    } catch (error) {
        console.log(error)
    };
};


const deleteArticleForUser = async (req: Request) => {

    const supabase = createSupabaseFromRequest(req);
    const { dataToSave } = req.body;
    const { url, id } = dataToSave;

    try {
        const response = await supabase
            .from('articles')
            .delete()
            .eq('user_id', id)
            .eq('article_url', url)
            .select();


        if (response?.error) {
            console.error('Deleting error', response.error.message);
            return null;
        };

        if (response) {
            const message = "Deleted";
            return message;
        };

    } catch (error) {
        console.log(error);
    };

}


export const handleArticleSave = async (req: Request, res: Response) => {

    console.log('hit article save handler!');

    const { articleExists } = req.body;

    try {
        let result;

        if (articleExists) {
            console.log('deleting')
            result = await deleteArticleForUser(req);
        } else {
            console.log('saving')
            result = await saveArticleForUser(req);
        }

        if (result) {
            const responseObject = { Succes: true, message: result };
            console.log(responseObject);
            res.status(200).send(responseObject);
        } else {
            res.status(500).json({ error: `Database operation failed to execute.` });
        }

    } catch (error) {
        console.log(error)
    };
};






