import { animate, motion } from "framer-motion"
import { variants } from "@/motion/variants"

const divProps = {
    variants: variants,
    initial: 'closed',
    animate: 'open',
    exit: 'closed',
    transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
};


export default function HighlightTextTip() {


    return (
        <motion.div
            className="w-full h-auto py-8"
            {...divProps}>



            <div className="flex items-center justify-center">
                <p className="text-lg text-white text-wrap font-light">
                    Select an unfamiliar term by highlighting the text in the article you want explained!
                </p>
            </div>

        </motion.div>
    )
}