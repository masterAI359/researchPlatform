import { RootState } from "@/ReduxToolKit/store";
import { createClient } from "@supabase/supabase-js";
import { store } from "@/ReduxToolKit/store";
import { getEmail, redirectFromLogin } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
const currentState = store.getState()

function retrieveEmail(currentSession: any) {

  const { user } = currentSession

  const { user_metadata } = user;

  const { email } = user_metadata

  const shortened = email

  return shortened
}

const supaBaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string

const supaBaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supaBaseUrl, supaBaseKey, {
  auth: {
    persistSession: true
  }
})

export const { data: { session } } = await supabase.auth.getSession()

const userEmail = () => {

  let sessionEmail: string

  if (session) {
    sessionEmail = retrieveEmail(session)
    store.dispatch(redirectFromLogin(true))
  }

  return sessionEmail
}

let emailString = userEmail()

const { data } = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)

  if (event === 'INITIAL_SESSION') {
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    store.dispatch(getEmail(emailString))

  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})



// call unsubscribe to remove the callback






