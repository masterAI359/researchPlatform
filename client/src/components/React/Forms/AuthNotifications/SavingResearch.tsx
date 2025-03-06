import Loader from "../../Loaders/Loader";
import { motion } from "framer-motion";



export default function SavingResearch() {

    const variants = {
        show: {
            y: 0,
            opacity: 1
        },
        hide: {
            y: -100,
            opacity: 0
        }
    }

    return (
        <motion.div
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute top-24 right-36 h-10 w-60 py-5 bg-mirage rounded-xl px-2"
        >
            <div className="flex w-full h-full items-center justify-between">
                <div className="w-auto h-fit">
                    <p className="text-white font-light">
                        Saving your work
                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    <Loader />
                </div>
            </div>
        </motion.div>
    )
}