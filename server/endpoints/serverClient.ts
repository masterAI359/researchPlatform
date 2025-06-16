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


export const createSupabaseFromRequest = (req: Request) => {
    const accessToken = req.cookies['sb-access-token'];

    return createClient(SUPABASE_URL, SUPABASE_KEY, {
        global: {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
        auth: {
            persistSession: true,
        },
    });
};


export const getUserAndSupabase = async (req: Request, res: Response) => {
    const supabase = createSupabaseFromRequest(req);
    const { data: { user }, error } = await supabase.auth.getUser();

    if (!user || error) {
        res.status(401).json({ error: 'Unauthorized' });
        return null;
    }

    return { supabase, user };
};


export const getCurrentUser = async (req: Request, res: Response) => {
    console.log('fetching user credentials');
    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { user } = session;

    return res.status(200).json({ user });
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


export const signUserOut = async (req: Request, res: Response) => {

    try {
        res.clearCookie('sb-access-token');
        res.clearCookie('sb-refresh-token');
        res.status(200).json({ message: 'Signed out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to sign out' });
    }

};


export const resetUserPassword = async (req: Request, res: Response) => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://elenchusapp.io/reset-password',
        });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ message: 'Reset email sent.', data: data });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Unexpected server error.', data: null });
    }
};



export const getUserArticles = async (req: Request, res: Response) => {
    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { supabase, user } = session;


    console.log('🍪 Incoming cookies in getUserArticles:', req.cookies);

    try {
        const { data, error } = await supabase
            .from('articles')
            .select()
            .eq('user_id', user.id)

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

    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { supabase, user } = session;

    try {

        const { data, error } = await supabase
            .from('investigations')
            .select()
            .eq('user_id', user.id)

        if (data) {
            res.send(data);
        };

        if (error) {
            console.log(error.message);
        };


    } catch (error) {
        console.log(error)
    }
}


const saveArticleForUser = async (req: Request, res: Response) => {
    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { supabase, user } = session;

    const { dataToSave } = req.body;
    const { text, url, image_url, summary, title, authors, date, provider, fallbackDate, factual_reporting, bias, country } = dataToSave;

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
                        user_id: user.id,
                        bias: bias,
                        factual_reporting: factual_reporting,
                        country: country,
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


const deleteArticleForUser = async (req: Request, res: Response) => {

    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { supabase, user } = session;

    const { dataToSave } = req.body;
    const { url } = dataToSave;

    try {
        const response = await supabase
            .from('articles')
            .delete()
            .eq('user_id', user.id)
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
            result = await deleteArticleForUser(req, res);
        } else {
            console.log('saving')
            result = await saveArticleForUser(req, res);
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



export const saveResearch = async (req: Request, res: Response) => {
    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { supabase, user } = session;

    const { investigation } = req.body;

    try {
        const { data, error } = await supabase
            .from('investigations')
            .upsert([
                {
                    idea: investigation.idea,
                    initial_perspective: investigation.initial_perspective,
                    premises: investigation.premises,
                    ending_perspective: investigation.ending_perspective,
                    changed_opinion: investigation.changed_opinion,
                    new_concepts: investigation.new_concepts,
                    takeaway: investigation.takeaway,
                    had_merit: investigation.had_merit,
                    user_id: user.id,
                    sources: investigation.sources,
                    wikipedia_extracts: investigation.wikipedia_extracts
                }
            ])
            .select();

        if (data) {
            const response = { message: "Saved research data", data: data };
            res.send(response);

        } else if (error) {
            const response = { message: error.message, data: null };
            res.send(response);
        };

    } catch (error) {
        console.error("Unexpected error saving research: ", error);
        return res.status(500).json({ message: "Internal Server Error", data: null });
    };
};


type NewUser = {
    message: string,
    data: any
}

export const createNewUser = async (req: Request, res: Response): Promise<any> => {



    const { email, password } = req.body;

    try {

        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const isProduction = process.env.NODE_ENV === 'production';
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (data.session) {
            const { access_token, refresh_token } = data.session;

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
        }

        if (error) {
            console.error({ 'Signup error encountered': error.message });
            return res.status(400).json({ message: error.message, data: null });
        };

        const message: NewUser = { message: 'User created', data: data.user }

        return res.status(200).send(message);

    } catch (error) {
        if (error) {
            console.error(error);
            const message: NewUser = { message: 'User created', data: null }

            return res.status(400).json(message)
        }
    };
};





