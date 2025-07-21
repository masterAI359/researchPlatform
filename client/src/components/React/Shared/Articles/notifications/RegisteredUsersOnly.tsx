import { motion } from "framer-motion"
import { useEffect } from "react"


export default function RegisteredUsersOnly({ setRegisteredExclusiveFeature, registeredExclusiveFeature }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setRegisteredExclusiveFeature(false)
        }, 4000)

        console.log("running")

        return () => clearTimeout(timer)
    }, [registeredExclusiveFeature])

    const variants = {
        closed: {
            opacity: 0,
            scale: 0,
        },
        open: {
            opacity: 1,
            scale: 1

        }
    }

    return (
        <motion.div
            key='actionNotified'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute z-50 right-8 bottom-0 bg-white rounded-lg h-auto w-auto flex flex-col items-center
            border border-astro_gray shadow-thick"
        >
            <div className="w-full h-auto p-2">
                <h1 className="text-black text-nowrap text-sm w-full font-light tracking-tight">
                    Register or Login to save articles!
                </h1>
            </div>

        </motion.div>
    )
}