import { RootState } from "@/ReduxToolKit/store";
import { createClient } from "@supabase/supabase-js";
import { store } from "@/ReduxToolKit/store";
const currentState = store.getState()

const email = currentState.auth.email
const password = currentState.auth.password

const supaBaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string

const supaBaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supaBaseUrl, supaBaseKey)







