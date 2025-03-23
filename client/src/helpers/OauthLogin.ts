import { supabase } from "@/SupaBase/supaBaseClient";


export const googleAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    })

    if (data) {
        console.log(data)
    } else if (error) {
        console.log(error)
    }

}


export const signInWithTwitter = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'twitter',
    })

    if (data) {
        console.log(data)
    } else if (error) {
        console.log(error)
    }
}
