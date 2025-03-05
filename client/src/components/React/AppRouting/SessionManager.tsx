import { useEffect } from "react";
import { supabase } from "@/SupaBase/supaBaseClient";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication";

export default function SessionManager() {
    const appDispatch = useAppdispatch()

    const restoreSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Restored session:', session);
    };

    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'INITIAL_SESSION') {
                restoreSession()
                appDispatch(fetchUserCredentials())
            } else if (event === 'SIGNED_IN') {
                appDispatch(fetchUserCredentials())

            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {

            } else if (event === 'TOKEN_REFRESHED') {
                restoreSession()
                appDispatch(fetchUserCredentials())
            } else if (event === 'USER_UPDATED') {

            }
        })

        return () => {
            data.subscription.unsubscribe()

        }



    }, [])



    return null

}