import { motion } from "framer-motion";


export default function MiddlePath({ currentStep }) {

    return (
        <div className="z-1 mx-auto xs:w-36 md:w-72 2xl:h-36 flex justify-between">

            <div className="flex h-36 flex-col justify-center h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="xs:h-10 grow w-1" />
                <motion.div
                    animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="xs:h-10 grow w-1" />
            </div>
            <div className="flex h-36 flex-col justify-center h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="xs:h-10 md:h-18 w-1 bg-button_gray" />
                <motion.div animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="xs:h-10 md:h-18 w-1" />
            </div>

        </div>
    )
}


