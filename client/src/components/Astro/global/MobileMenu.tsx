import { motion, Transition, SVGMotionProps } from "framer-motion"
import { useState } from "react"
import MenuButton from "./MenuButton";


//TODO: implement full mobile menu


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav

            className="z-50 fixed top-4 right-4"
        >
            <MenuButton
                isOpen={isOpen}
                color="#ffffff"
                onClick={() => setIsOpen(!isOpen)}
                lineProps={{ strokeLinecap: "round" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />

        </motion.nav>
    )
}