import { useDispatch } from "react-redux"
import { motion } from "framer-motion"

export default function UseThisPost () {


    return (
        <motion.div 
        initial='closed'
        animate='open'
        exit='closed'
        className="z-50 absolute top-0 right-0"
        >

        
        </motion.div>
    )
}