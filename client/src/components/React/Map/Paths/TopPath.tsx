import { motion } from "framer-motion"


export default function TopPath({ currentStep }) {

    return (<div className="z-1 mx-auto xs:w-36 md:w-72 flex flex-col">
        <motion.div
            animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
            transition={{ type: 'tween', duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
            className="w-1 xs:h-16 md:h-24 mx-auto self-start" />
        <div className="w-full h-auto flex">
            <motion.div
                animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'right' }}
                className="h-1 self-end z-10 md:w-36 xs:w-20" />
            <motion.div
                animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
                className="h-1 xs:w-20 md:w-36 self-end" />

        </div>


    </div>

    )
}