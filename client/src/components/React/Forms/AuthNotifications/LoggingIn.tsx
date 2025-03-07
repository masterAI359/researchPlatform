import { motion, AnimatePresence } from "framer-motion";
import Loader from "../../Loaders/Loader";
import LoggedInSuccessfully from "./LoggedInSuccessfully";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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
    const navigate = useNavigate()

    const timer = () => {
        setTimeout(() => {
            setLoggingIn(false)
            navigate('/Profile')
        }, 1500)
    }

    useEffect(() => {

        if (successful) {
            timer()
        }

    }, [successful])


    return (
        <motion.div
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute top-24 right-36 h-10 w-60 p-2 bg-mirage rounded-xl px-2"
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
                        {successful === null && <PendingLogin />}
                        {successful === true && <LoggedInSuccessfully />}
                        {successful === false && <FailedToLogin />}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}


const notificationVariants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}

function PendingLogin() {

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
        </motion.div>)
}


function FailedToLogin() {

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



