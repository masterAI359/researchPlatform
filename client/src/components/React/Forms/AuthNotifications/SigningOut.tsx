import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { showSignOut, clearAuthSlice } from "@/ReduxToolKit/Reducers/Athentication/Authentication"
import { hideTop } from "@/motion/variants"
import { createPortal } from "react-dom"
import Pending from "./Pending"
import Success from "./Success"
import Failed from "./Failed"

export default function SigningOut({ setSigningOut, signingOut, success }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        const timer = setTimeout(() => {
            setSigningOut(false)
            dispatch(showSignOut(false))
            navigate('/')
            dispatch(clearAuthSlice())
        }, 3000)

        return () => clearTimeout(timer)

    }, [signingOut])

    const SigningOut = (<motion.div
        variants={hideTop}
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


