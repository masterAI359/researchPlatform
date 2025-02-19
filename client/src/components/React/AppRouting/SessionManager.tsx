import { getID } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useEffect } from "react";
import { supabase, session } from "@/SupaBase/supaBaseClient";
import { useDispatch, useSelector } from "react-redux";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchSavedArticles, clearUser } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { fetchSavedInvestigations, clearUserInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";
import { RootState } from "@/ReduxToolKit/store";

//TODO: may need to figure out if i can optionally set the state for articles saved status dependant on context upon first render

export default function SessionManager() {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const appDispatch = useAppdispatch()
    const dispatch = useDispatch()


    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'INITIAL_SESSION') {

            } else if (event === 'SIGNED_IN') {
                const { id } = session.user
                dispatch(getID(id))
                appDispatch(fetchSavedArticles(id))
                appDispatch(fetchSavedInvestigations(id))

            } else if (event === 'SIGNED_OUT') {
                dispatch(clearUser())
                dispatch(clearUserInvestigations())

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