import { motion } from "framer-motion"
import { useEffect } from "react"
import { NotificationState, NotifySaved } from "@/env";
import { scaleUpDown } from "@/motion/variants";

export default function NotifySavedArticle({ message, setNotification, setShowNotification }: NotifySaved) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setNotification((prev: NotificationState) => ({
                ...prev,
                message: null,
            }));
            setShowNotification(false);

        }, 2000)

        return () => clearTimeout(timer)
    }, []);


    return (

        <motion.div
            key='actionNotified'
            variants={scaleUpDown}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute z-50 xl:right-8 bottom-0 right-8 bg-white rounded-lg h-auto w-auto flex flex-col items-center
                border border-astro_gray shadow-thick"
        >
            <div className="w-full h-auto p-2">
                <h1 className="text-black text-nowrap text-sm w-full font-light tracking-tight">
                    {message}
                </h1>
            </div>

        </motion.div>
    )
}