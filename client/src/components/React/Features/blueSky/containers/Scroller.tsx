import { motion, AnimatePresence } from "framer-motion";
import { BSPost } from "../components/BSPost";


export default function Scroller({ posts, context, setClicked }) {

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
                    <BSPost context={context} key={post.record.text + index.toString()} post={post} setClicked={setClicked} />
                ))}
            </motion.div>
        </AnimatePresence>
    )
}