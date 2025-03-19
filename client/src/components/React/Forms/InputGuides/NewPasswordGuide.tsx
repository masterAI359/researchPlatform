import { motion } from "framer-motion"
import { createPortal } from "react-dom"

export default function NewPasswordGuide() {

    const guide = (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2, delay: 0.2 }}
            className="w-fit p-6 mx-auto bg-white/5 p-6 absolute 2xl:top-96 left-20 rounded-xl shadow-md md:mt-6 md:self-start">
            <h2 className="text-lg font-light text-left text-white mb-4">Password Requirements</h2>
            <ul className="list-disc max-w-72 list-inside text-white text-sm w-fit mx-auto">
                <li className="mb-2">At least 8 characters long</li>
                <li className="">Contains at least one special character (e.g., !, @, #, $, etc.)</li>
            </ul>
        </motion.div>
    )

    return (
        createPortal(guide, document.body)
    )

}