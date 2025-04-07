import { supabase } from "@/SupaBase/supaBaseClient";


export const googleAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    })

    if (data) {
    } else if (error) {
    }

}



