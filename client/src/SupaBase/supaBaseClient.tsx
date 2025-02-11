import { createClient } from "@supabase/supabase-js";



const supaBaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string

const supaBaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supaBaseUrl, supaBaseKey, {
  auth: {
    persistSession: true
  }
})

export const { data: { session } } = await supabase.auth.getSession()













