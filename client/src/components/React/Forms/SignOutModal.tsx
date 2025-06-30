import { createPortal } from "react-dom";
import { clearAuthSlice, showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchSignOut } from "@/helpers/FetchRequests";
import AuthNotification from "./AuthNotifications/AuthNotification";
import { signOutStatus } from "./AuthNotifications/AuthStatus";
import { useNavigate } from "react-router-dom";

const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { type: 'tween', delay: 0.3, duration: 0.2 } }
}



export default function SignOutModal({ }) {
    const [signingOut, setSigningOut] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirect = () => {
        dispatch(showSignOut(false));
        dispatch(clearAuthSlice());
        navigate('/');
    };

    useEffect(() => {

        const executeSignOut = async (): Promise<void> => {
            try {

                const data: SignOutResponse = await fetchSignOut();
                if (data.loggedOut === true) {
                    setSuccess(true);
                } else {
                    setSuccess(false)
                }

            } catch (error) {
                console.error(error);
            };

        };

        if (signingOut) {
            executeSignOut();
        };
    }, [signingOut]);


    const modal = (
        <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-1/3 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
         xl:min-w-96 xl:min-h-80 w-80 h-60 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 
        sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-ebony mt-2 
        shadow-inset text-center">
            <AnimatePresence>
                {signingOut !== false && <AuthNotification complete={success} setterFunction={setSigningOut} status={signOutStatus} redirect={redirect} />}
            </AnimatePresence>
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-white xl:text-4xl">Sign out</p>
                <p className="mt-4">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400">are you sure?</span>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                <div className="inline-flex flex-no-wrap gap-x-2 md:gap-x-4 items-center mt-8 w-full">

                    <motion.button whileTap={{ scale: 0.95 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        onClick={() => setSigningOut(true)} type="button"
                        className="text-sm py-2 w-full px-6 md:px-4 border md:focus:ring-2 rounded-full border-transparent 
                    bg-white md:hover:bg-white/10 text-black duration-200 md:focus:ring-offset-2 md:focus:ring-white 
                    md:hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.95 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        onClick={() => dispatch(showSignOut(false))} type="button"
                        className="text-sm py-2 w-full px-6 md:px-4 border md:focus:ring-2 rounded-full border-transparent 
                    bg-white md:hover:bg-white/10 text-black duration-200 md:focus:ring-offset-2 md:focus:ring-white 
                    md:hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </motion.button>
                </div>
            </div>
        </motion.div>

    )

    return (
        createPortal(modal, document.body)
    )

};


