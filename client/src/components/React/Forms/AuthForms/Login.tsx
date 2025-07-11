import { useEffect, useState } from "react"
import { requiredInput, emailValidation } from "@/helpers/validation"
import { useNavigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { supabaseSignIn } from "@/services/SupabaseData"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication"
import OAuthLogins from "../InputFields/OauthLogins"
import { loginStatus } from "../../Notifications/AuthNotifications/AuthStatus"
import AuthNotification from "../../Notifications/AuthNotifications/AuthNotification"
import { populateArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { populateResearch } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations"
import LoginForm from "./LoginForm"

export default function Login() {
    const [userEmail, setUserEmail] = useState<string>(null)
    const [userPassword, setUserPassword] = useState<string>(null)
    const [validEmail, setValidEmail] = useState<boolean>(null)
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)
    const [loggingIn, setLoggingIn] = useState<boolean>(false)
    const [successfull, setSuccessful] = useState<boolean>(null)
    const navigate = useNavigate()
    const dispatch = useAppdispatch();

    const redirectUser = (): void => {
        navigate('/');
    };

    const submitAuth = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        setLoggingIn(true)
    };

    useEffect(() => {
        if (userEmail) emailValidation(userEmail, setValidEmail);
        if (userEmail && userPassword) requiredInput(userEmail, userPassword, setAcceptedInput);
    }, [userEmail, userPassword]);


    useEffect(() => {

        const executeSignin = async () => {
            const signin = await supabaseSignIn(userEmail, userPassword);
            if (signin.message === 'success' && signin.session) {
                const { sess, userContent } = signin.session;
                dispatch(fetchUserCredentials(sess));
                dispatch(populateArticles(userContent.userArticles));
                dispatch(populateResearch(userContent.userResearch));
                setSuccessful(true);
            } else {
                setSuccessful(false)
            }
        };

        if (loggingIn) executeSignin();

    }, [loggingIn]);


    return (
        <section className={`lg:p-8 overflow-hidden bg-black animate-fade-in`}>
            <AnimatePresence>
                {loggingIn && <AuthNotification complete={successfull} setterFunction={setLoggingIn} status={loginStatus} redirect={redirectUser} />}
            </AnimatePresence>
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Log in.
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">log in to manage your saved content.</p>
                </div>
                <div className="w-full gap-24 mx-auto grid grid-cols-1 mt-12 lg:grid-cols-2 items-center">

                    <LoginForm submitAuth={submitAuth} successfull={successfull} setUserEmail={setUserEmail} setUserPassword={setUserPassword} validEmail={validEmail} acceptedInput={acceptedInput} />
                    <OAuthLogins />
                </div>
            </div>
        </section>
    )
};