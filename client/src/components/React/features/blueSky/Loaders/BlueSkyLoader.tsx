import { motion } from "framer-motion"
import Lottie from "lottie-react"
import horizontalVortex from '@/lotties/horizontalVortex.json';
import React from 'react';

function BlueSkyLoader() {

    return (
        <motion.div
            key={'loadingdots'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="min-h-96 2xl:h-full 2xl:pb-168 min-w-full 
            box-border flex items-start justify-center"
        >
            <Lottie
                animationData={horizontalVortex}
                autoPlay={true}
                loop={true}
                width={400}
                height={400}
            />
        </motion.div>
    )
};


export default React.memo(BlueSkyLoader);