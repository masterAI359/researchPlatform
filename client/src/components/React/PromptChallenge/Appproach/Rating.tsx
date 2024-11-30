import { motion, AnimatePresence } from "framer-motion"

export default function Rating({ knowledge }) {

    return (
        <div
            className="xl:w-36 xl:h-22 xs:w-auto xs:h-auto hover:scale-110 transition-all duration-300 ease-in-out bg-white/10 rounded-xl cursor-pointer text-white text-md font-light tracking-tight">
            <p className="p-2 xs:text-[0.4rem]">{knowledge}</p>
        </div>
    )
}