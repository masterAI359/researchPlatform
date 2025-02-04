import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom";



export default function MenuItem({ id, text, link, isOpen, toggle }) {

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
            onClick={toggle}
        >
            <div className="w-32 text-center border border-4 border-mirage rounded- h-auto mx-auto py-1.5">
                <p className="text-sm text-white font-light tracking-tight">
                    <Link to={link}>{text}</Link>
                </p>
            </div>

        </motion.li>
    )
}