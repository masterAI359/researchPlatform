import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom";
import MenuButton from "./MenuButton";
import MobileNavigation from "./MobileNavigation";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at 20px 20px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const mobileContent = (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            exit={'closed'}
            className="flex fixed justify-center w-full z-50"
        >
            <AnimatePresence initial={false} >
                {isOpen && (
                    <motion.div
                        key="overlay"
                        className="bg-black z-50 min-h-svh min-w-full top-0 left-0 bottom-0 fixed"
                        initial='closed'
                        animate='open'
                        exit="closed"
                        variants={sidebar} />
                )
                }
            </AnimatePresence>

            <MenuButton
                toggle={toggleMenu}
                isOpen={isOpen}
            />
            <MobileNavigation isOpen={isOpen} toggle={toggleMenu} />
        </motion.nav>
    )

    return (
        createPortal(mobileContent, document.body)
    )

}