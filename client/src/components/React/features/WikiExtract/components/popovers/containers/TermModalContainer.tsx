import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { variants } from "@/motion/variants";

interface TermModalContainer {
    children: JSX.Element
};

export default function TermModalContainer({ children }: TermModalContainer): JSX.Element | null {

    const container = (
        <motion.section
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
        >
            {children}
        </motion.section>
    );

    return createPortal(container, document.body);
};