import { createPortal } from "react-dom";
import { showSignOut, clearAuthSlice } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { supabase, session } from "@/SupaBase/supaBaseClient";
import { useNavigate } from "react-router-dom";

const variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
}



export default function SignOutModal({ }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const redirectUser = () => {
        console.log('invoked')
        navigate('/')
    }

    const signOutUser = async () => {

        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(error)
        } else {
            dispatch(clearAuthSlice())
            dispatch(showSignOut(false))
            redirectUser()
            console.log(session)
            console.log("Signed Out successfully")
        }

    }

    const modal = (
        <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
         xl:min-w-96 xl:min-h-80 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 
        sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-ebony mt-2 
        shadow-inset text-center">
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-white xl:text-4xl">Sign out</p>
                <p className="mt-4">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400">are you sure?</span>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                <div className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full">
                    <button onClick={signOutUser} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                    <button onClick={() => dispatch(showSignOut(false))} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>
                </div>
            </div>
        </motion.div>

    )

    return (
        createPortal(modal, document.body)
    )

}