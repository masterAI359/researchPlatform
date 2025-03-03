import { motion } from "framer-motion"


export default function TopPath({ currentStep }) {

    return (<div className="z-1 mx-auto xl:h-20 xl:w-60 xl:mt-5 lg:w-52 md:w-44 md:h-12 md:mt-4 lg:w-60 flex flex-col">
        <motion.div
            animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
            transition={{ type: 'tween', duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
            className="w-1 grow mx-auto self-start z-1" />
        <div className="w-full h-auto flex">
            <motion.div
                animate={{ backgroundColor: currentStep === 0 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'right' }}
                className="h-1 self-end pr-1 grow" />
            <motion.div
                animate={{ backgroundColor: currentStep <= 1 ? "#374151" : "#2563eb" }}
                transition={{ type: 'tween', duration: 0.8 }}
                style={{ transformOrigin: 'left' }}
                className="h-1 grow" />

        </div>


    </div>

    )
}