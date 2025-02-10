import { getEmail, getID, redirectFromLogin } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useEffect } from "react";
import { supabase, session } from "@/SupaBase/supaBaseClient";
import { useDispatch } from "react-redux";

export default function SessionManager() {
    const dispatch = useDispatch()

    useEffect(() => {

        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(data)

            if (event === 'INITIAL_SESSION') {

            } else if (event === 'SIGNED_IN') {
                const { id } = session.user
                dispatch(getID(id))
                console.log({ Dispatching: id, FromEvent: event })

            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {

            } else if (event === 'TOKEN_REFRESHED') {

            } else if (event === 'USER_UPDATED') {

            }
        })


    }, [session, supabase])



    return null

}