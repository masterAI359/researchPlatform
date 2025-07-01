import { motion } from "framer-motion";
import Lottie from "lottie-react";
import blueCheck from '../../../../lotties/blueCheck.json'


const notificationVariants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}

export default function Success() {

    return (
        <motion.div
            key='success'
            variants={notificationVariants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
            className="relative top-0 right-0 bottom-0 h-10 w-10 flex items-center justify-center">
            <Lottie animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
        </motion.div>
    )
}