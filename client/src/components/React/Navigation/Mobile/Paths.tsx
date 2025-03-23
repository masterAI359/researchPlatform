import { motion } from "framer-motion";


export default function Path({ variants, isOpen, d }: any) {

    return (
        <motion.path
            fill="transparent"
            strokeWidth="2"
            stroke="#ffffff"
            strokeLinecap="round"
            animate={isOpen ? variants.open : variants.closed}
        />
    );
}