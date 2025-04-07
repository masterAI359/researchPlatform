import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Pending from "./Pending";
import Success from "./Success";
import Failed from "./Failed";

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

export default function LoggingIn({ successful, setLoggingIn }) {



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoggingIn(false)
        }, 1500)


        return () => clearTimeout(timer)

    }, [successful])


    return (
        <motion.div
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
                        {successful === null && 'Logging in'}
                        {successful === false && 'Login failed'}
                        {successful === true && 'Logged in successfully!'}
                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    <AnimatePresence mode="wait">
                        {successful === null && <Pending />}
                        {successful === true && <Success />}
                        {successful === false && <Failed/>}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}







