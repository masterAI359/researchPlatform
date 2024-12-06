import { motion } from "framer-motion";


export default function MiddlePath({ currentStep }) {

    return (
        <div className="z-1 mx-auto w-72 flex justify-between">

            <div className="flex h-36 flex-col justify-center h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="h-18 w-1 bg-button_gray" />
                <motion.div
                    animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="h-18 w-1" />
            </div>
            <div className="flex h-36 flex-col justify-center h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="h-18 w-1 bg-button_gray" />
                <motion.div animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="h-18 w-1" />
            </div>

        </div>
    )
}


