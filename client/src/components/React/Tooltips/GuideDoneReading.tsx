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
    const { display } = investigateState
    const { showReadingTooltip } = display
    const dispatch = useDispatch()

    console.log(showReadingTooltip)

    useEffect(() => {

        //   const timer = setTimeout(() => {
        //       dispatch(displayReadingTooltip(false))
        //   }, 2000)
        //
        //   return () => clearTimeout(timer)

    }, [showReadingTooltip])

    return (
        <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute animate-bounce absolute w-fit z-50 bg-white rounded-lg h-auto w-auto flex flex-col
            -left-16 bottom-14 md:-left-16 lg:bottom-12
            items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
            after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent"
        >
            <div className="w-full h-auto md:px-1 py-1">
                <h1 className="text-black font-bold text-wrap text-xs md:text-base w-40 h-auto tracking-tight">
                    Click here when finished reading
                </h1>
            </div>
        </motion.div>
    )
}


