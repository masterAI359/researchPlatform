import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { IconLayoutDashboard } from "@tabler/icons-react";
import { IconCirclePlus } from "@tabler/icons-react";

export default function MenuItem({ id, text, link, isOpen, toggle, icon }) {


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
            <Link to={link}>
                <div className="w-52 text-center bg-ebony/30 shadow-inset rounded-xl h-auto mx-auto p-4 flex items-center justify-start gap-x-4">
                    <div className="w-auto h-auto">
                        <img className="max-w-6 max-h-6" src={icon} />
                    </div>
                    <p className="text-base text-white font-light tracking-tight text-nowrap">
                        {text}
                    </p>
                </div>
            </Link>



        </motion.li>
    )
};



export function DashboardLink({ isOpen, toggle, activeSession }) {

    const linkOptions = activeSession ? '/dashboard' : '/signup'

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
            variants={variants}
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-auto mx-auto z-50"
            onClick={toggle}
        >
            <Link to={linkOptions}>
                <div className="w-52 text-center bg-ebony/30 shadow-inset rounded-xl h-auto mx-auto p-4 flex items-center justify-start gap-x-4">
                    <div className="w-auto h-auto text-white">
                        {activeSession ? <IconLayoutDashboard /> : <IconCirclePlus />}
                    </div>
                    <p className="text-base text-white font-light tracking-tight text-nowrap">
                        {activeSession ? 'Dashboard' : 'Sign up'}
                    </p>
                </div>
            </Link>



        </motion.li>
    )
}