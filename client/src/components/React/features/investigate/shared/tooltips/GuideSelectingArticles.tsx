import { useEffect } from "react"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { displaySelectTooltip } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
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

export default function GuideSelectingArticles({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { showSelectTooltip } = investigateState.display
    const dispatch = useDispatch()

    useEffect(() => {

        const timer = setTimeout(() => {
            dispatch(displaySelectTooltip(false))
        }, 6000);

        return (() => clearTimeout(timer));

    }, [showSelectTooltip]);

    return (
        <motion.div
            key='selectTooltip'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute z-30 xl:right-12 bottom-14 sm:bottom-16 right-2 bg-gradient-to-tr from-ebony to-mirage rounded-lg
         h-auto flex flex-col items-center w-80 lg:w-96 lg:h-80
        border border-ebony shadow-material after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
            after:border-t-ebony after:border-l-transparent after:border-r-transparent after:border-b-transparent">

            <div className="max-w-full h-auto p-2 lg:p-6 text-left text-wrap flex flex-col gap-y-6 lg:gap-y-8">
                <h1 className="text-blue-400 text-wrap text-2xl lg:text-xl xl:text-3xl  font-light tracking-tight">
                    To Read Aricle Content
                </h1>
                <p className="text-white font-light tracking-tight text-lg lg:text-2xl text-wrap">
                    select up to a maximum of 3 articles, then click this button below to retrieve their contents
                </p>
            </div>
        </motion.div>
    )
};