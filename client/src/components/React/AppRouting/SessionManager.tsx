import { useEffect } from "react";
import { supabase } from "@/SupaBase/supaBaseClient";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { clearAuthSlice } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useNavigate } from "react-router-dom";

export default function SessionManager() {
    const appDispatch = useAppdispatch()
    const navigate = useNavigate()

    const restoreSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
            appDispatch(fetchUserCredentials())
        }
    };

    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'INITIAL_SESSION') {
                restoreSession()
            } else if (event === 'SIGNED_IN') {
                appDispatch(fetchUserCredentials())
            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {

            } else if (event === 'TOKEN_REFRESHED') {
                restoreSession()
            } else if (event === 'USER_UPDATED') {
                appDispatch(fetchUserCredentials())
            }
        })

        return () => {
            data.subscription.unsubscribe()

        }



    }, [])



    return null

}