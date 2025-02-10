import { motion } from "framer-motion"
import { session } from "@/SupaBase/supaBaseClient"
import { useEffect } from "react"


export default function NotifySavedArticle({ articleExists, setShowNotification }) {




    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(false)
        }, 1000)

        console.log("running")

        return () => clearTimeout(timer)
    }, [articleExists, setShowNotification])

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
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute z-50 xl:right-12 bottom-0 bg-black rounded-lg h-auto w-auto flex flex-col items-center
            border border-astro_gray shadow-thick"
        >
            <div className="w-full h-auto p-4">
                <h1 className="text-white text-sm w-full font-light tracking-tight">
                    {session && articleExists === true ? 'saved'
                        : 'unsaved'}
                </h1>
            </div>

        </motion.div>
    )
}