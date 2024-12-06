import { motion } from "framer-motion";


//TODO: break the bottom motion.div into two pieces to animate the last path of the map

export default function BottomPath({ currentStep }) {

    return (
        <div className="z-1 mx-auto w-72 flex flex-col-reverse">
            <div className="h-44 w-auto flex flex-col justify-center mb-16">
                <motion.div
                    className="h-22 w-1 mx-auto"
                    animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.6 }}
                    style={{ transformOrigin: 'top' }}
                />
                <motion.div
                    className="h-22 w-1 mx-auto"
                    animate={{ backgroundColor: currentStep < 4 ? "#374151" : "#2563eb" }}
                    transition={{ type: 'tween', duration: 0.6 }}
                    style={{ transformOrigin: 'top' }}
                />
            </div>

            <motion.div
                animate={{ backgroundColor: currentStep <= 2 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'top' }}
                className="h-1 w-72 bg-button_gray self-end" />
        </div>
    )
}