import { useEffect } from "react"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { displaySelectionWarning } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"

export default function SelectionRequired() {
    const dispatch = useDispatch()

    useEffect(() => {

        const timer = setTimeout(() => {
            dispatch(displaySelectionWarning(false))
        }, 3000)

        return () => clearTimeout(timer)
    })

    const variants = {
        closed: {
            opacity: 0,
            scale: 0,
        },
        open: {
            opacity: 1,
            scale: 1

        }
    }


    return (
        <motion.div
            key='noSelectedLinks'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute z-50 bottom-18 2xl:right-16 2xl:max-w-52 h-auto p-3 bg-white rounded-lg w-auto flex flex-col items-center
        border border-astro_gray shadow-thick"
        >
            <div className="w-full h-auto p-2">
                <h1 className="text-black text-wrap text-sm w-full font-light tracking-tight">
                    Select at least one article to retrieve content!
                </h1>
            </div>

        </motion.div>
    )
}