import { useEffect } from "react";
import { supabase } from "@/SupaBase/supaBaseClient";
import { useAppdispatch } from "@/Hooks/appDispatch";
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { getSourcesToReview } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";
import { getFeed } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";

export default function SessionManager() {
    const appDispatch = useAppdispatch()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const sources = useSelector((state: RootState) => state.userWork.sourcesToReview)
    const sourcesToDispatch = sources
    const posts = useSelector((state: RootState) => state.bluesky.posts);

    const restoreSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
            appDispatch(fetchUserCredentials(session))
        }
    };

    useEffect(() => {

        if(sources) {
         localStorage.setItem('cachedSources', JSON.stringify(sourcesToDispatch))
         
        }

        if(!sources) {
            const cachedSources = (JSON.parse(localStorage.getItem('cachedSources')))
            dispatch(getSourcesToReview(cachedSources))
        }

        const { data } = supabase.auth.onAuthStateChange((event, session) => {

            if (event === 'INITIAL_SESSION') {
                restoreSession()
            } else if (event === 'SIGNED_IN') {
                appDispatch(fetchUserCredentials(session))
            } else if (event === 'SIGNED_OUT') {

            } else if (event === 'PASSWORD_RECOVERY') {
              navigate('/updatePassword')
            } else if (event === 'TOKEN_REFRESHED') {
                restoreSession()
            } else if (event === 'USER_UPDATED') {
                appDispatch(fetchUserCredentials(session))
            }
        })
        return () => {
            data.subscription.unsubscribe()

        }

    }, []);
    return null
}