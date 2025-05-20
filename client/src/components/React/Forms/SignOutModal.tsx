import { createPortal } from "react-dom";
import { showSignOut, clearAuthSlice } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence, delay } from "framer-motion";
import { supabase } from "@/SupaBase/supaBaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pending from "./AuthNotifications/Pending";
import Success from "./AuthNotifications/Success";
import Failed from "./AuthNotifications/Failed";


const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { type: 'tween', delay: 0.3, duration: 0.2 }}
}



export default function SignOutModal({ }) {
    const [signingOut, setSigningOut] = useState<boolean>(null)
    const [success, setSuccess] = useState<boolean>(null)
    const dispatch = useDispatch()






    const signOutUser = async () => {

        setSigningOut(true)

        try {
            const { error } = await supabase.auth.signOut()

            if (error) {
                setSuccess(false)
                console.log(error.message)
            } else {
                setSuccess(true)
            }

        } catch (error) {
            setSuccess(false)
        }
    }

    useEffect(() => {
        console.log('rendering')

        console.log({ "Success": success, "Signing Out": signingOut })
    }, [success, signingOut])


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
                {signingOut && <SigningOut signingOut={signingOut} setSigningOut={setSigningOut} success={success} />}
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
                        onClick={signOutUser} type="button"
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

}


function SigningOut({ setSigningOut, signingOut, success }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const variants = {
        show: {
            y: 0,
            opacity: 1
        },
        hide: {
            y: -100,
            opacity: 0
        }
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            setSigningOut(false)
            dispatch(showSignOut(false))
            navigate('/')
            dispatch(clearAuthSlice())
        }, 3000)

        return () => clearTimeout(timer)

    }, [signingOut, setSigningOut, success])

    const SigningOut = (<motion.div
        variants={variants}
        initial='hide'
        animate='show'
        exit='hide'
        transition={{ type: 'tween', duration: 0.2 }}
        className="absolute top-12 right-16 lg:top-24 lg:right-36 h-10 w-60 p-2 bg-mirage rounded-xl px-2"
    >
        <div className="flex w-full h-full items-center justify-between">
            <div className="w-auto h-fit">
                <p className="text-white font-light">
                    {success === null && 'Signing out'}
                    {success === false && 'Signout failed'}
                    {success === true && 'Signed out'}
                </p>
            </div>
            <div className="w-auto h-fit relative">
                <AnimatePresence mode="wait">
                    {success === null && <Pending />}
                    {success === true && <Success />}
                    {success === false && <Failed />}
                </AnimatePresence>
            </div>
        </div>
    </motion.div>)

    return (createPortal(SigningOut, document.body))
}


