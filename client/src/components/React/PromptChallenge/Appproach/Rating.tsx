import { motion, AnimatePresence } from "framer-motion"

export default function Rating({ knowledge }) {

    return (
        <div
            className="w-36 h-22 hover:scale-110 transition-all duration-300 ease-in-out bg-white/10 rounded-xl cursor-pointer text-white text-md font-light tracking-tight">
            <p className="p-2">{knowledge}</p>
        </div>
    )
}