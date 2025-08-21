import { supabase } from "@/services/supabase/supabaseClient";

export const googleAuth = async () => {

    console.log('oauth call')
    supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'https://elenchusapp.io/'
        },
    });
};



