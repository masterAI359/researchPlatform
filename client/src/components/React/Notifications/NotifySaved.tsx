import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { supabase, session } from "@/SupaBase/supaBaseClient"
import { useEdges } from "@xyflow/react"


export default function NotifySavedArticle({ fillBookMark }) {
    const [removeNotification, setRemoveNotification] = useState<boolean>(null)

    useEffect(() => {



    }, [fillBookMark, removeNotification])


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
            className="absolute z-50 xl:left-12 bottom-0 bg-black rounded-lg h-auto w-auto flex flex-col items-center
            border border-astro_gray shadow-thick"
        >
            <div className="w-full h-auto px-3 py-2">
                <h1 className="text-white text-xs w-full text-nowrap font-light">
                    {fillBookMark ? 'Article saved'
                        : 'Removed article from your saved collection'}
                </h1>
            </div>
            {/* <div className="w-full h-auto">
                <p className="text-white text-xs font-light">
                    {fillBookMark ? 'Find your collection under "Saved Articles" in your profile page'
                        : null}
                </p>
            </div> */}
        </motion.div>
    )
}