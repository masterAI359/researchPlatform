import { motion } from "framer-motion";
import Path from "./Paths";

const middlePathVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
}

export default function MenuButton({ toggle, isOpen }) {

    return (
        <button className={`fixed left-1 top-1 h-7 w-fit z-50`}
            onClick={toggle}>
            <motion.svg className="z-50 text-white opacity-80"
                width="23px"
                height="23px"
                viewBox="0 0 23 23"
                initial='closed'

            >
                <Path
                    isOpen={isOpen}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <motion.path
                    fill="currentColor"
                    strokeWidth="2"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={middlePathVariants}
                    animate={isOpen ? 'open' : 'closed'}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    isOpen={isOpen}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </motion.svg>
        </button>
    )

};


