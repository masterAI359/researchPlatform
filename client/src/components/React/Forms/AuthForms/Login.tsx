import { useEffect, useState } from "react"
import { requiredInput, emailValidation } from "@/helpers/validation"
import { useNavigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Password from "../InputFields/Password"
import { supabaseSignIn } from "@/services/SupabaseData"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { fetchUserCredentials } from "@/ReduxToolKit/Reducers/Athentication/Authentication"
import Email from "../InputFields/Email"
import OAuthLogins from "../InputFields/OauthLogins"
import AuthFooterLinks from "../InputFields/AuthFooterLinks"
import { loginStatus } from "../../Notifications/AuthNotifications/AuthStatus"
import AuthNotification from "../../Notifications/AuthNotifications/AuthNotification"

export default function Login() {
    const [userEmail, setUserEmail] = useState<string>(null)
    const [userPassword, setUserPassword] = useState<string>(null)
    const [validEmail, setValidEmail] = useState<boolean>(null)
    const [acceptedInput, setAcceptedInput] = useState<boolean>(null)
    const [loggingIn, setLoggingIn] = useState<boolean>(false)
    const [successfull, setSuccessful] = useState<boolean>(null)
    const navigate = useNavigate()
    const dispatch = useAppdispatch();

    const redirectUser = () => {
        navigate('/Profile')
    };

    const submitAuth = async (e: any) => {
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
                setSuccessful(true)
                const session = signin.session;
                dispatch(fetchUserCredentials(session));
            } else {
                setSuccessful(false)
            }
        };

        if (loggingIn) {
            executeSignin();
        };

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

                    <form autoComplete="off">
                        {successfull === false && <p className="text-zinc-400 font-light lg:text-2xl -translate-y-6">The email or password you entered is incorrect. Please try again.</p>}
                        <Email setUserEmail={setUserEmail} validEmail={validEmail} />
                        <div className="space-y-6">

                            <Password setUserPassword={setUserPassword} acceptedInput={acceptedInput} />
                            <div className="col-span-full">
                                <button onClick={(e) => { submitAuth(e) }} type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                                bg-white hover:bg-black text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white
                                 w-full inline-flex items-center justify-center ring-1 ring-transparent">
                                    Submit
                                </button>
                            </div>
                            <AuthFooterLinks />
                        </div>
                    </form>
                    <OAuthLogins />
                </div>
            </div>
        </section>
    )
};