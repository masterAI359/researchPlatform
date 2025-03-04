import { getEmail, getID } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useEffect } from "react";
import { supabase, session } from "@/SupaBase/supaBaseClient";
import { useDispatch, useSelector } from "react-redux";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { fetchSavedArticles, clearUser } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { fetchSavedInvestigations, clearUserInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";
import { RootState } from "@/ReduxToolKit/store";


export default function SessionManager() {
    const authData = useSelector((state: RootState) => state.auth)
    const id = useSelector((state: RootState) => state.auth.user_id)
    const status = useSelector((state: RootState) => state.auth.status)
    const appDispatch = useAppdispatch()
    const dispatch = useDispatch()

    const restoreSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Restored session:', session);
    };




    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {



            if (event === 'INITIAL_SESSION') {
                appDispatch(fetchUserCredentials())
            } else if (event === 'SIGNED_IN') {
                appDispatch(fetchUserCredentials())

            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {

            } else if (event === 'TOKEN_REFRESHED') {

            } else if (event === 'USER_UPDATED') {

            }
        })

        return () => {
            data.subscription.unsubscribe()

        }



    }, [session, supabase])



    return null

}