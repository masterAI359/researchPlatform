import { useEffect } from "react";
import { supabase } from "@/SupaBase/supaBaseClient";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { combineSlices } from "@reduxjs/toolkit";

export default function SessionManager() {
    const appDispatch = useAppdispatch()

    const restoreSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
            appDispatch(fetchUserCredentials(session))
        }
    };

    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'INITIAL_SESSION') {
                restoreSession()
            } else if (event === 'SIGNED_IN') {
                appDispatch(fetchUserCredentials(session))
            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {

            } else if (event === 'TOKEN_REFRESHED') {
                restoreSession()
            } else if (event === 'USER_UPDATED') {
                appDispatch(fetchUserCredentials(session))
            }
        })

        return () => {
            data.subscription.unsubscribe()

        }



    }, [])



    return null

}