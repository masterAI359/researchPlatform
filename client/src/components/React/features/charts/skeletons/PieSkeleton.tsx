import { motion } from "framer-motion";
import { variants } from "@/motion/variants";
import { useEffect, useState } from "react";

export default function PieSkeleton() {
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
            className="relative flex flex-col items-center"
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-pulse">
                {/* Base Circle */}
                <div className="absolute inset-0 rounded-full bg-zinc-800/60" />

                {/* Fake Slice Cuts */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/5 h-[2px] bg-zinc-700 rotate-0 absolute" />
                    <div className="w-3/5 h-[2px] bg-zinc-700 rotate-45 absolute" />
                    <div className="w-3/5 h-[2px] bg-zinc-700 -rotate-45 absolute" />
                    <div className="w-3/5 h-[2px] bg-zinc-700 rotate-90 absolute" />
                </div>

                <div className="absolute -bottom-8 left-1/2 w-32 h-6 -translate-x-1/2 mt-4">
                    <p className="text-zinc-400 font-light tracking-tight text-sm text-center">
                        {typed}
                    </p>
                </div>
            </div>

        </motion.div>
    )
}