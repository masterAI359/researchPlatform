import { motion } from "framer-motion"
import Lottie from "lottie-react"
import horizontalVortex from '@/lotties/horizontalVortex.json';
import React from 'react';

function BlueSkyLoader() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { type: 'tween', duration: 0.2 } }}
            exit={{ opacity: 0, transition: { type: 'tween', duration: 0.2 } }}
            className="absolute inset-0 
            box-border flex items-start justify-center"
        >
            <div className="w-88 h-auto sm:w-112 xl:w-128 2xl:w-168 mt-8">
                <Lottie
                    animationData={horizontalVortex}
                    autoPlay={true}
                    loop={true}
                    width={400}
                    height={400}
                />
            </div>

        </motion.div>
    )
};


export default React.memo(BlueSkyLoader);