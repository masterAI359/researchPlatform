import { motion } from "framer-motion";
import { variants } from "@/motion/variants";
import { useEffect, useState } from "react";


export default function DonutSkeleton() {
    const message: string = 'loading...';
    const [typed, setTyped] = useState<string>("");
    const [currIndex, setCurrIndex] = useState<number>(0);

    useEffect(() => {

        const typeNextChar = (): void => {
            setTyped(prev => prev + message[currIndex]);
            setCurrIndex(prev => prev + 1);
        };

        const interval = setInterval(() => {
            if (currIndex < message.length) {
                typeNextChar();
            } else {
                setTyped("");
                setCurrIndex(0);
            };
        }, 300);

        return () => {
            clearInterval(interval);
        };

    }, [currIndex]);


    return (
        <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2, ease: "easeInOut" }}
            className="relative"
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-pulse">
                <div className="absolute inset-0 rounded-full border-[80px] border-zinc-700/50 border-t-zinc-800 border-l-zinc-800" />
            </div>
            <div className="absolute -bottom-8 left-1/2 w-32 h-6 -translate-x-1/2 mt-4">
                <p className="text-zinc-400 font-light tracking-tight text-sm text-center">
                    {typed}
                </p>
            </div>

        </motion.div>
    )
}