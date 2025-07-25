

import { motion } from "framer-motion";
import { variants } from "@/motion/variants";

export default function ArticleSkeleton() {
    return (
        <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="animate-pulse space-y-4 h-auto w-full max-w-4xl mx-auto px-4">
            {/* Image */}
            <div className="h-52 w-full rounded-xl bg-neutral-800" />

            {/* Title */}
            <div className="h-6 w-3/4 bg-neutral-700 rounded-md" />
            <div className="h-4 w-1/3 bg-neutral-700 rounded-md" />

            {/* Metadata */}
            <div className="flex gap-2 flex-wrap">
                <div className="h-4 w-24 bg-neutral-700 rounded-full" />
                <div className="h-4 w-16 bg-neutral-700 rounded-full" />
                <div className="h-4 w-32 bg-neutral-700 rounded-full" />
            </div>

            {/* Body paragraphs */}
            <div className="space-y-3 mt-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <div className="h-4 w-full bg-neutral-800 rounded" />
                        <div className="h-4 w-5/6 bg-neutral-800 rounded" />
                        <div className="h-4 w-3/4 bg-neutral-800 rounded" />
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
