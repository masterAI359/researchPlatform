import { motion, AnimatePresence } from "framer-motion";
import Loader from "../../Loaders/Loader";
import AccountCreated from "./AccountCreated";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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

export default function CreatingUser({ createdUser, setCreating, creating }) {
    const [redirecting, setRedirecting] = useState<boolean>(false)
    const navigate = useNavigate()


    useEffect(() => {

        const timer = setTimeout(() => {
            setCreating(false)
            if (createdUser) {
                navigate('/Profile')
            }

        }, 1000)


        return () => clearTimeout(timer)

    }, [createdUser])


    return (
        <motion.div
            key='accountCreationNotification'
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute top-24 right-36 h-10 w-60 p-2 bg-mirage border border-zinc-700 rounded-xl px-2"
        >
            <div key='title' className="flex w-full h-full items-center justify-between">
                <div key='titleContainer' className="w-auto h-fit">
                    <p className="text-white font-light text-sm">
                        {createdUser === null && 'Creating Account'}
                        {createdUser === true && 'Account Created'}
                        {createdUser === false && 'Account creation failed'}
                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    {<AnimatePresence mode="wait">
                        {createdUser === null && <PendingCreation />}
                        {createdUser === true && <AccountCreated />}
                        {createdUser === false && <FailedToCreate />}
                    </AnimatePresence>}
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

function PendingCreation() {

    return (
        <motion.div
            key='pendingCreation'
            variants={notificationVariants}
            initial='show'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
        >
            <Loader key='loadSpin' />
        </motion.div>)
}


function FailedToCreate() {

    return (
        <motion.div
            key='failedCreation'
            variants={notificationVariants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
            className="relative top-0 right-0 bottom-0 h-10 w-10 flex items-center justify-center">
            <svg key='redXCreation' className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="#f24343" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM17.52734,16l6.08789,8.94336l-6.16211,9.05664h2.54492l4.80273,-7.09766h0.19922l4.7168,7.09766h2.69336l-6.09961,-8.95508l6.23633,-9.04492h-2.55664l-4.81445,7.16016h-0.20117l-4.74023,-7.16016z" /></g></g></svg>
        </motion.div>
    )
}



