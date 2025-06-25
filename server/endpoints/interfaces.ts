import { User } from "@supabase/supabase-js";

export interface ChangePasswordBody {
    email: string,
    newPassword: string
};

export interface ChangePasswordSuccess {
    message: 'success';
    data: User | null;
};

export interface ChangePasswordError {
    status: string;
    data: null;
};

export interface SignUpRequestBody {
    email: string,
    password: string
};

export interface NewUser {
    message: string,
    data: User | null
};

export interface FeedbackBody {
    email?: string | null,
    message: string
};

export interface FeedbackResponse {
    result: string
};

export interface Investigation {
    idea: string;
    premises: string | null;
    initial_perspective: string | null;
    biases: string | null;
    ending_perspective: string | null;
    new_concepts: any;
    changed_opinion: any;
    takeaway: string | null;
    had_merit: boolean | null;
    user_id: string;
    sources: string[] | null;
    wikipedia_extracts: any;
};

export type InvestigationBody = {
    investigation: Investigation
};

export interface ArticleSaveBody {
    articleExists: boolean
};

export interface ArticleSaveResponse {
    saved: boolean,
    data: any
}

export interface SavedArticle {
    title: string,
    provider: string,
    authors: string[],
    url: string,
    image_url: string,
    date: string,
    fallbackDate: string | null,
    summary: any,
    text: string,
    id: string,
    factual_reporting?: string | null,
    bias?: string | null,
    country?: string | null
};

export interface ArticleBody {
    articleExists: boolean,
    dataToSave: SavedArticle
};

export interface GetLinkBody {
    email: string
};

export interface GetLinkResponse {
    message: string,
    data: any
};

export interface LoginBody {
    email: string,
    password: string
};