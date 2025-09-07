import { useEffect, useState } from "react";
import { supabaseSignIn } from "@/services/supabase/SupabaseData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { populateArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { populateResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication";

export const useSignIn = (
    userEmail: string | null,
    userPassword: string | null): SignInHook => {

    const [loggingIn, setLoggingIn] = useState<boolean>(false);
    const [successful, setSuccessful] = useState<boolean>(null);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        if (successful) return;

        const executeSignin = async () => {
            const signin = await supabaseSignIn(userEmail, userPassword);
            if (signin.message === 'success' && signin.session) {
                const { sess, userContent } = signin.session;
                dispatch(fetchUserCredentials(sess));
                dispatch(populateArticles(userContent.userArticles));
                dispatch(populateResearch(userContent.userResearch));
                setSuccessful(true);
            } else {
                setSuccessful(false);
            }
        };

        if ((loggingIn)) {
            executeSignin()
        }

    }, [loggingIn, successful]);


    return { loggingIn, setLoggingIn, successful }

};