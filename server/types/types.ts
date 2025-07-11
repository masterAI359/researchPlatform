import { SupabaseClient, User, Session } from "@supabase/supabase-js";

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

export interface SupabaseSession {
    supabase: SupabaseClient,
    user: User
};

export interface CurrentUser {
    user: User
};

export interface DeleteUserBody {
    email: string,
    password: string
};

export interface ScrapedArticle {
    article_abstract: string | null;
    article_authors: string[];
    article_html: string;
    article_image: string;
    article_pub_date: string;
    article_text: string;
    article_title: string;
    article_url: string;
    bias: string;
    country: string;
    date: string;
    factual_reporting: string;
    logo: string;
    source: string;
    summary: {
        heading: string;
        text: string;
    }[];
};

export interface FailedAttempt {
    title: string;
    summary: {
        denied: string;
        failedArticle: string;
    }[];
    logo: string;
    source: string;
    date: string;
    article_url: string;
};

export interface TldrRequest {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string,
    image: string
};


export interface MappedTldrRequests {
    retrieved: ScrapedArticle[] | null,
    rejected: FailedAttempt[];
};

export interface UserContentResponse {
    message: string,
    data: SavedArticle[] | null
};

export interface UserContent {
    userArticles: SavedArticle[] | null;
    userResearch: Investigation[] | null;
}

export interface SupabaseLoginResponse {
    sess: Session;
    userContent: UserContent;
}