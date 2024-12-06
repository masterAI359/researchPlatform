import { motion } from "framer-motion";


export default function BottomPath({ currentStep }) {

    return (
        <div className="z-1 mx-auto w-72 flex flex-col-reverse">
            <motion.div
                animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'bottom' }}
                className="w-1 h-44 mb-16 bg-button_gray mx-auto self-start" />
            <motion.div
                animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'top' }}
                className="h-1 w-72 bg-button_gray self-end" />
        </div>
    )
}