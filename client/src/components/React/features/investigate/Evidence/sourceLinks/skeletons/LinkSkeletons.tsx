import LinkPlaceholder from "../loaders/LinkPlaceholder";
import { motion } from "framer-motion";
import { variants } from "@/motion/variants";

export default function LinkSkeletons({ }) {


    return (

        <motion.div
            key={'linkloaders'}
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="relative top-0 max-w-4xl xl:max-w-6xl 
                    2xl:w-full mx-auto justify-items-center
                    grid grid-cols-2 sm:grid-cols-3 grid-flow-row 
                    2xl:gap-y-10 2xl:gap-x-0 gap-2">

            {Array(6).fill(0).map((_, i) => <LinkPlaceholder key={i} />)}

        </motion.div>

    )
}