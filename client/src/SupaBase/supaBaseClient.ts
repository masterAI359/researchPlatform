import { createClient } from "@supabase/supabase-js";


const supaBaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string

const supaBaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string


export const supabase = createClient(supaBaseUrl, supaBaseKey)

export const { data, error } = await supabase
    .from('users')
    .select('user_name')

