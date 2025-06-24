import { User } from "@supabase/supabase-js";

export interface SupabaseUser {
    id: string;
    aud: string;
    role: string;
    email: string;
    created_at: string;
    confirmed_at: string | null;
    last_sign_in_at: string | null;
    app_metadata: {
        provider: string;
        providers: string[];
    };
    user_metadata: Record<string, any>;
    identities: Array<{
        id: string;
        user_id: string;
        identity_data: {
            email: string;
            sub: string;
        };
        provider: string;
        last_sign_in_at: string | null;
        created_at: string;
        updated_at: string;
    }>;
    phone: string;
    email_confirmed_at: string | null;
    is_anonymous: boolean;
};

export interface ChangePasswordSuccess {
    message: 'success';
    data: User | null;
};

export interface ChangePasswordError {
    status: string;
    data: null;
};