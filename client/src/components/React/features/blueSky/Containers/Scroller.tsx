import { motion, AnimatePresence } from "framer-motion";
import { BSPost } from "../Components/Post/BSPost";

export default function Scroller({ posts }) {

    const variants = {
        open: { opacity: 1 },
        closed: { opacity: 0 }
    }

    return (
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial='closed'
                animate='open'
                exit='closed'
                transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
                {posts.map((post: any, index: number) => (
                    <BSPost key={post.record.text + index.toString()} post={post} />
                ))}
            </motion.div>
        </AnimatePresence>
    )
}