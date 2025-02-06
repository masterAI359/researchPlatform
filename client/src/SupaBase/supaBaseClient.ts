import { RootState } from "@/ReduxToolKit/store";
import { createClient } from "@supabase/supabase-js";
import { store } from "@/ReduxToolKit/store";
import { getEmail, redirectFromLogin } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
const currentState = store.getState()



const supaBaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string

const supaBaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supaBaseUrl, supaBaseKey, {
  auth: {
    persistSession: true
  }
})

export const { data: { session } } = await supabase.auth.getSession()








