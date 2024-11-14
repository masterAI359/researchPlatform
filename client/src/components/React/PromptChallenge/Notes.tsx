import { createPortal } from "react-dom"
import { motion } from "framer-motion"

export default function Notes() {

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="bg-button_gray w-72 h-96 z-50 shadow shadow-black px-2">
            <h1>Testing notes function</h1>
            <textarea className="h-40 w-full mx-auto" ></textarea>
        </motion.div>
    )



}