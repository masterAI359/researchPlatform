import { createPortal } from "react-dom";
import { showSignOut, clearAuthSlice } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/SupaBase/supaBaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loaders/Loader";
import SuccessCheckMark from "./AuthNotifications/SuccessCheckMark";

const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
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
            } else {
                setSuccess(true)
            }

        } catch (error) {
            setSuccess(false)
        }
    }

    useEffect(() => {

        console.log({ "Success": success, "Signing Out": signingOut })
    }, [success, signingOut])


    const modal = (
        <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-1/2 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
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
                    {success === null && <LoggingOutLoader />}
                    {success === true && <SuccessCheckMark />}
                    {success === false && <FailedSignOut />}
                </AnimatePresence>
            </div>
        </div>
    </motion.div>)

    return (createPortal(SigningOut, document.body))
}


//TODO: Add notification for the user so that they know they've signed out of elenchus


const notificationVariants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}

function LoggingOutLoader() {



    return (
        <motion.div
            key='pending'
            variants={notificationVariants}
            initial='show'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
        >
            <Loader />
        </motion.div>
    )
}




function FailedSignOut() {


    return (
        <motion.div
            key='failed'
            variants={notificationVariants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
            className="relative top-0 right-0 bottom-0 h-10 w-10 flex items-center justify-center">
            <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="#f24343" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM17.52734,16l6.08789,8.94336l-6.16211,9.05664h2.54492l4.80273,-7.09766h0.19922l4.7168,7.09766h2.69336l-6.09961,-8.95508l6.23633,-9.04492h-2.55664l-4.81445,7.16016h-0.20117l-4.74023,-7.16016z" /></g></g></svg>
        </motion.div>
    )
}