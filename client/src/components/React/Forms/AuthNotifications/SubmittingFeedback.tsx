import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Pending from "./Pending"
import Success from "./Success"
import Failed from "./Failed"
import { createPortal } from "react-dom"
import { useDispatch } from "react-redux"
import { displayFeedBackForm } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"

export default function SubmittingFeedback ({ feedbackSubmitted, setSubmitted }) {
    const dispatch = useDispatch()

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
    
        useEffect(() => {
    
            const timer = setTimeout(() => {
                setSubmitted(false)
                dispatch(displayFeedBackForm(false))
            }, 2000)
    
    
            return () => clearTimeout(timer)
    
        }, [feedbackSubmitted])


        const notification = (
            <motion.div
            variants={variants}
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-8 right-24 md:top-36 h-10 w-60 py-5 bg-mirage z-30 rounded-xl px-2"
        >
            <div className="flex w-full h-full items-center justify-between">
                <div className="w-auto h-fit">
                    <p className="text-white text-xs text-nowrap sm:text-base font-light">
                        {feedbackSubmitted === null && 'Submitting feedback'}
                        {feedbackSubmitted === true && 'Feedback submitted!'}
                        {feedbackSubmitted === false && 'Failed to submit'}

                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    <AnimatePresence mode="wait">
                        {feedbackSubmitted === null && <Pending />}
                        {feedbackSubmitted === true && <Success />}
                        {feedbackSubmitted === false && <Failed />}
                    </AnimatePresence>

                </div>
            </div>
        </motion.div>
        )

        return createPortal(notification, document.body)
}