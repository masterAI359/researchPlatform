import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { loginStatus } from "@/components/React/Session/notifications/AuthStatus";
import AuthNotification from "../../notifications/AuthNotification";
import ScrolltoTop from "@/helpers/ScrollToTop";
import LoginOperations from "../containers/LoginOperations";
import { useCheckCredentials } from "@/Hooks/useCheckCredentials";
import { useSignIn } from "@/Hooks/useSignIn";


export default function Login(): JSX.Element {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userPassword, setUserPassword] = useState<string | null>(null);
    const { loggingIn, setLoggingIn, successful } = useSignIn(userEmail, userPassword);
    const { acceptedInput, validEmail } = useCheckCredentials(userEmail, userPassword);
    const navigate = useNavigate();

    const redirectUser = (successful: boolean | null): void => {
        if (successful) {
            navigate('/');
        };
    };

    const submitAuth = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        if ((acceptedInput === true) && (userPassword)) {
            setLoggingIn(true)
        }
    };

    return (
        <section
            className="lg:p-8 overflow-hidden bg-black animate-fade-in"
        >
            <ScrolltoTop />
            <AnimatePresence>
                {loggingIn &&
                    <AuthNotification
                        complete={successful}
                        setterFunction={setLoggingIn}
                        status={loginStatus}
                        redirect={redirectUser}
                    />
                }
            </AnimatePresence>
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Log in.
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">log in to manage your saved content.</p>
                </div>
                <LoginOperations
                    submitAuth={submitAuth}
                    successful={successful}
                    setUserEmail={setUserEmail}
                    setUserPassword={setUserPassword}
                    validEmail={validEmail}
                    acceptedInput={acceptedInput}
                />
            </div>
        </section>
    )
};