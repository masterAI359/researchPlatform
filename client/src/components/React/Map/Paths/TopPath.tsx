import { motion } from "framer-motion"


export default function TopPath({ currentStep }) {

    return (<div className="z-1 mx-auto w-72 flex flex-col">
        <motion.div
            animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
            transition={{ type: 'tween', duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
            className="w-1 h-24 mx-auto self-start" />
        <div className="w-full h-auto flex">
            <motion.div
                animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'right', width: '148px' }}
                className="h-1 self-end z-10" />
            <motion.div
                animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
                className="h-1 w-36 self-end" />

        </div>


    </div>

    )
}