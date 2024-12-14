import { motion } from "framer-motion"
import { useState } from "react"


export default function MenuItem({ id, text, link, isOpen }) {

    const currentPath = window.location.pathname;
    const isActive = currentPath === link

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <motion.li
            key={id}
            variants={variants}
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-auto mx-auto z-50"
        >
            <div className="w-auto h-auto mx-auto">
                <p className="text-sm font-light tracking-tight">

                    <a className={`${isActive ? 'text-blue-400' : 'text-white'}`} href={link}> {text} </a>
                </p>
            </div>

        </motion.li>
    )
}