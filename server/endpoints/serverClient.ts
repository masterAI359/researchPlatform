import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath })
import { SUPABASE_KEY, SUPABASE_URL } from '../src/Config.js';
import { Request, Response } from 'express'
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import {
    ArticleBody, ArticleSaveResponse, ChangePasswordBody, ChangePasswordError,
    ChangePasswordSuccess, CurrentUser, FeedbackBody, FeedbackResponse, GetLinkBody, GetLinkResponse,
    InvestigationBody, LoginBody, NewUser, SavedArticle, SignUpRequestBody, SupabaseSession
} from './interfaces.js';
import { SupabaseLoginResponse, UserContent } from '../types/types.js'
import { Database } from './databaseInterfaces.js';
import { saveArticleForUser } from '../services/saveArticle.js';
import { deleteArticleForUser } from '../services/deleteArticle.js';
import { getUserContent } from '../services/getUserContent.js';

export const createSupabaseFromRequest = (req: Request): SupabaseClient<Database> => {
    const accessToken = req.cookies['sb-access-token'];

    return createClient<Database>(SUPABASE_URL!, SUPABASE_KEY!, {
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


export const getUserAndSupabase = async (req: Request, res: Response): Promise<SupabaseSession | null> => {
    const supabase = createSupabaseFromRequest(req);
    const { data: { user }, error } = await supabase.auth.getUser();

    if (!user || error) {
        res.status(401).json({ error: 'Unauthorized' });
        return null;
    }
    return { supabase, user };
};


export const getCurrentUser = async (req: Request, res: Response<CurrentUser>): Promise<void> => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const session = await getUserAndSupabase(req, res);
    if (!session) return;
    const { user } = session;
    const { id } = user;
    const content: UserContent = await getUserContent(supabase, id);
    const userData = { sess: session, userContent: content };
    res.status(200).json({ user: user, data: userData.userContent });
    return;
};


export const supabaseLogin = async (req: Request, res: Response): Promise<void> => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { email, password } = req.body as LoginBody;

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
            const sessionData = response.data.session;
            const { id } = sessionData.user;
            const content = await getUserContent(supabase, id);
            const userData: SupabaseLoginResponse = { sess: sessionData, userContent: content };
            console.log(userData.userContent.userArticles?.articleMap);
            res.status(200).send(userData);
            return;
        } else {
            res.status(400).json({ db_error: 'unable to login in to supabase' });
            return;
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
        return;
    };
};


export const signUserOut = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie('sb-access-token');
        res.clearCookie('sb-refresh-token');
        res.status(200).json({ message: 'Signed out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to sign out' });
    };
};


export const resetUserPassword = async (req: Request, res: Response): Promise<void> => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    const { email } = req.body as GetLinkBody;

    if (!email) {
        res.status(400).json({ error: 'Email is required.' });
        return;
    };

    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://elenchusapp.io/reset-password',
        });

        if (error) {
            const db_error: GetLinkResponse = { message: error.message, data: null }
            res.status(400).json(db_error);
            return;
        }

        const message: GetLinkResponse = { message: 'Reset email sent.', data: data }
        res.status(200).json(message);
        return;

    } catch (err) {
        console.error(err);
        const error_message: string = err instanceof Error
            ? `Unknown server error: ${err.message}`
            : 'Unknown server error, check server logs for more info';
        const server_error: GetLinkResponse = { message: error_message, data: null };
        res.status(500).json(server_error);
        return;
    };
};



export const getUserArticles = async (req: Request, res: Response): Promise<void> => {
    const session = await getUserAndSupabase(req, res);
    if (!session) return;
    const { supabase, user } = session;

    try {
        const { data, error } = await supabase
            .from('articles')
            .select()
            .eq('user_id', user.id)

        if (error) {
            console.error(error.message);
            throw new Error(`Unexpected error encountered: ${error.message}`);
        } else {
            res.status(200).send(data)
        }

    } catch (error) {
        console.error(error);
        const error_message = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';
        res.status(500).json({ error: error_message });
        return;
    };
};



export const getUserResearch = async (req: Request, res: Response): Promise<void> => {
    const session = await getUserAndSupabase(req, res);
    if (!session) return;
    const { supabase, user } = session;

    try {
        const { data, error } = await supabase
            .from('investigations')
            .select()
            .eq('user_id', user.id)

        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;

        } else {
            res.status(200).send(data);
            return;

        };

    } catch (error) {
        console.error(error);
        const error_message = error instanceof Error
            ? `Unknown server error: ${error.message}`
            : 'Unknown server error, check server logs for more info';
        res.status(500).json({ error: error_message });
        return;
    };
};


export const handleArticleSave = async (req: Request, res: Response): Promise<void> => {

    const { articleExists, dataToSave } = req.body as ArticleBody;
    const session = await getUserAndSupabase(req, res);
    if (!session) return;
    const { supabase, user } = session;
    const user_id: string = user?.id;
    const { id } = dataToSave as SavedArticle;

    try {
        let result: any;

        if (articleExists === true) {
            console.log('deleting')
            result = await deleteArticleForUser(supabase, user_id, id);
        } else {
            console.log('saving')
            result = await saveArticleForUser(supabase, user_id, dataToSave);
        }

        if (result) {
            console.log(result);
            const responseObject: ArticleSaveResponse = { success: true, data: result };
            res.status(200).send(responseObject);
            return;
        } else {
            res.status(400).json({ success: false, message: `Database operation failed to execute.` });
            return;
        }
    } catch (error) {
        console.log(error);

        if (error instanceof Error) {
            res.status(500).json({ success: false, message: `Unknown server error ${error}` });
            return;
        } else {
            res.status(500).json({ success: false, message: 'Unknown server error, check server logs for more info' });
            return;
        };
    };
};



export const saveResearch = async (req: Request, res: Response): Promise<void> => {
    const session = await getUserAndSupabase(req, res);

    if (!session) return;

    const { supabase, user } = session;

    const { investigation } = req.body as InvestigationBody;

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

        if (error) {
            const response = { message: error.message, data: null };
            res.status(400).send(response);
            return;
        } else if (data) {
            const response = { message: "Saved research data", data: data };
            res.status(200).send(response);
            return;
        };

    } catch (error) {
        if (error instanceof Error) {
            console.error(`Unexpected error saving research: ${error}`);
            res.status(500).json({ message: "Internal Server Error", data: null });
            return;
        } else {
            console.error('Unexpected server error', error);
            res.status(500).json({ message: "Internal Server Error", data: null });
            return;
        };
    };
};


export const changePassword = async (req: Request, res: Response<ChangePasswordSuccess | ChangePasswordError>): Promise<void> => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { email, newPassword } = req.body as ChangePasswordBody;
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) throw new Error(error.message);

    const user: User | undefined = data.users.find((user) => user.email === email);

    if (user) {

        try {
            const { data, error } = await supabase.auth.admin.updateUserById(user.id,
                {
                    password: newPassword
                });

            if (data) {
                const updated = data?.user
                res.status(200).send({ message: 'success', data: updated });
                return;
            } else if (error) {
                res.status(400).send({ status: error.message, data: null });
                return;
            };

        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                res.status(400).json({ status: `Unknown server error ${error}`, data: null });
                return;
            } else {
                res.status(400).json({ status: 'Unknown server error', data: null });
                return;
            };
        };
    } else {
        res.status(404).json({ status: 'No user record found in the database for elenchus', data: null });
        return;
    };
};



export const createNewUser = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body as SignUpRequestBody;

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
            const db_error: NewUser = { message: error.message, data: null }
            res.status(400).json(db_error);
            return;
        } else {
            const message: NewUser = { message: 'User created', data: data.user }
            res.status(200).send(message);
            return;
        };

    } catch (error) {
        if (error) {
            if (error instanceof Error) {
                const err_message: NewUser = { message: `Unexpected server error: ${error.message}`, data: null };
                res.status(500).json(err_message);
                return;
            } else {
                console.error(error)
                const err_message: NewUser = { message: `Unexpected server error`, data: null };
                res.status(400).json(err_message);
                return;
            };

        };
    };
};


export const sendFeedback = async (req: Request, res: Response): Promise<void> => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { email, message } = req.body as FeedbackBody;

    try {

        const { data, error } = await supabase
            .from('user_feedback')
            .insert({
                email: email,
                message: message
            })
            .select();

        if (data) {
            const message: FeedbackResponse = { result: 'success sending feedback' };
            res.status(200).send(message);
            return;

        } else if (error) {
            const err_message: FeedbackResponse = { result: error.message };
            res.status(400).send(err_message);
            return;
        };

    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error sending feedback: ${error}`);
            res.status(400).json({ result: `Unknown server error ${error}` });
            return;
        } else {
            console.error(error);
            res.status(400).json({ result: 'Unknown Server error' });
            return;
        };
    };
};



