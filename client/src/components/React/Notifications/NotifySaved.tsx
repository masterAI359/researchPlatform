import { motion } from "framer-motion"
import { session } from "@/SupaBase/supaBaseClient"


export default function NotifySavedArticle({ fillBookMark, articleExists }) {

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
            <div className="w-full h-auto px-3 py-2">
                <h1 className="text-white text-xs w-full text-nowrap font-light">
                    {session && fillBookMark === true ? 'Article saved'
                        : 'Removed article from your saved collection'}
                </h1>
            </div>

        </motion.div>
    )
}