import { motion, AnimatePresence } from "framer-motion"

export default function Rating({ knowledge }) {

    return (
        <motion.div
            className="w-36 h-22 bg-white/10 rounded-xl cursor-pointer text-white text-md font-light tracking-tight"
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
            <p className="p-2">{knowledge}</p>
        </motion.div>
    )
}