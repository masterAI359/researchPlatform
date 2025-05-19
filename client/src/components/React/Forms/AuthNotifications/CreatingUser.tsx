import { motion, AnimatePresence } from "framer-motion";
import Loader from "../../Loaders/Loader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "./Success";
import Failed from "./Failed";
import Pending from "./Pending";


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
            className="fixed top-24 right-36 h-10 w-60 p-2 bg-mirage border border-zinc-700 rounded-xl px-2"
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
                        {createdUser === null && <Pending />}
                        {createdUser === true && <Success />}
                        {createdUser === false && <Failed/>}
                    </AnimatePresence>}
                </div>
            </div>
        </motion.div>
    )
}











