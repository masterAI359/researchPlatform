import { motion } from "framer-motion";


export default function MiddlePath({ currentStep }) {

    return (
        <div className="z-1 mx-auto xs:w-36 md:w-60 md:h-36 2xl:h-28 flex justify-between">

            <div className="flex flex-col justify-center min-h-full">
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
            <div className="flex flex-col justify-center min-h-full">
                <motion.div
                    animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                    className="xs:h-10 w-1 grow" />
                <motion.div animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    style={{ transformOrigin: 'bottom' }}
                    className="xs:h-10 grow w-1" />
            </div>

        </div>
    )
}


