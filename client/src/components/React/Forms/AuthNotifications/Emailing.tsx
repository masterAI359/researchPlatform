import Pending from "../AuthNotifications/Pending"
import Failed from "../AuthNotifications/Failed"
import Success from "../AuthNotifications/Success"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

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


export default function Emailing ({ emailSent, setPending }) {

    useEffect(() => {

        const timer = setTimeout(() => {

            setPending(false)
        }, 2500)

        return () => clearTimeout(timer)

    }, [emailSent])

    return (
           <motion.div
                    variants={variants}
                    animate='show'
                    exit='hide'
                    transition={{ type: 'tween', duration: 0.3 }}
                    className="absolute top-24 right-36 h-10 w-52 py-5 bg-mirage z-30 rounded-xl px-2"
                >
                    <div className="flex w-full h-full items-center justify-between">
                        <div className="w-auto h-fit">
                            <p className="text-white font-light">
                                {emailSent === null && 'Sending Email'}
                                {emailSent === true && 'Reset link sent!'}
                                {emailSent === false && 'Failed to email link'}
        
                            </p>
                        </div>
                        <div className="w-auto h-fit relative">
                            <AnimatePresence mode="wait">
                                {emailSent === null && <Pending />}
                                {emailSent === true && <Success />}
                                {emailSent === false && <Failed />}
                            </AnimatePresence>
        
                        </div>
                    </div>
                </motion.div>
    )
}

