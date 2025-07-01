import { motion } from "framer-motion"
import Loader from "../../Loaders/Loader"

const notificationVariants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}


export default function Pending() {

    return (
        <motion.div
            key='pending'
            variants={notificationVariants}
            initial='show'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
        >
            <Loader />
        </motion.div>)
}