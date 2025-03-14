import { useEffect } from "react"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { displayReadingTooltip } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { RootState } from "@/ReduxToolKit/store"

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

export default function GuideDoneReading({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { showReadingTooltip } = investigateState.display
    const dispatch = useDispatch()

    useEffect(() => {

        const timer = setTimeout(() => {
            dispatch(displayReadingTooltip(false))
        }, 4000)

        return (() => clearTimeout(timer))

    }, [showReadingTooltip])

    return (
        <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute animate-bounce absolute w-fit z-30 2xl:left-32 bottom-72 bg-white rounded-lg h-auto w-auto flex flex-col 
            items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
            after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent"
        >
            <div className="w-full h-auto p-2">
                <h1 className="text-black text-wrap text-sm w-60 h-auto tracking-tight">
                    select 3 articles, then click this button below to retrieve their content
                </h1>
            </div>
        </motion.div>
    )
}


