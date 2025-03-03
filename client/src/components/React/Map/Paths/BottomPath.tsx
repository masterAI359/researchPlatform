import { motion } from "framer-motion";

export default function BottomPath({ currentStep }) {

    return (
        <div className="z-1 mx-auto xl:w-60 xl:h-40 lg:w-52 md:w-44 md:h-32 flex flex-col-reverse md:h-48">
            <div className="h-full w-auto flex flex-col justify-center mb-6">
                <motion.div
                    className="xs:h-full w-1 mx-auto grow"
                    animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.6 }}
                    style={{ transformOrigin: 'top' }}
                />
                <motion.div
                    className="xs:h-full grow w-1 mx-auto"
                    animate={{ backgroundColor: currentStep < 4 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.6 }}
                    style={{ transformOrigin: 'top' }}
                />
            </div>

            <motion.div
                animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'top' }}
                className="h-1 w-full grow mx-auto self-end" />
        </div>
    )
}