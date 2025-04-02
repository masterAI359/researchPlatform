import { motion, AnimatePresence } from "framer-motion"
import Pending from "./Pending"
import Success from "./Success"
import Failed from "./Failed"
import { useEffect } from "react"

const variants = {
    show: {
        y: 0,
        opacity: 1
    },
    hide: {
        y: -100,
        opacity: 0
    }
}
export default function Resetting ({ setResetting, successfullyChanged }) {

    
    useEffect(() => {

        const timer = setTimeout(() => {

            setResetting(false)
        }, 2500)

        return () => clearTimeout(timer)

    }, [successfullyChanged])
    
    
           
    
        return (
            <motion.div
                variants={variants}
                animate='show'
                exit='hide'
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute top-24 right-36 h-10 w-52 py-5 bg-mirage z-30 rounded-xl px-2"
            >
                <div className="flex w-full h-full items-center justify-between">
                    <div className="w-auto h-fit">
                        <p className="text-white font-light">
                            {successfullyChanged === null && 'Changing password'}
                            {successfullyChanged === true && 'Updated Password!'}
                            {successfullyChanged === false && 'Failed to update'}
                        </p>
                    </div>
                    <div className="w-auto h-fit relative">
                        <AnimatePresence mode="wait">
                            {successfullyChanged === null && <Pending />}
                            {successfullyChanged === true && <Success />}
                            {successfullyChanged === false && <Failed />}
                        </AnimatePresence>
    
                    </div>
                </div>
            </motion.div>
        )
    }
    
