import { getID } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useEffect } from "react";
import { supabase, session } from "@/SupaBase/supaBaseClient";
import { useDispatch, useSelector } from "react-redux";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import { RootState } from "@/ReduxToolKit/store";

export default function SessionManager() {
    const id = useSelector((state: RootState) => state.auth.user_id)
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)
    const appDispatch = useAppdispatch()
    const dispatch = useDispatch()


    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(data)

            if (event === 'INITIAL_SESSION') {

            } else if (event === 'SIGNED_IN') {
                const { id } = session.user
                dispatch(getID(id))
                appDispatch(fetchSavedArticles(id))

            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {

            } else if (event === 'TOKEN_REFRESHED') {

            } else if (event === 'USER_UPDATED') {

            }
        })

    }, [session, supabase])



    return null

}