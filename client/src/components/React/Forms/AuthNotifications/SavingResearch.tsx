import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";
import { removeNotification } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice";
import { displayFeedBackForm } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
import Failed from "./Failed";
import Pending from "./Pending";
import Success from "./Success";
import { stopAskingForFeedBack } from "@/ReduxToolKit/Reducers/Feedback/FeedbackSlice";

export default function SavingResearch({ }) {
    const saveStatus = useSelector((state: RootState) => state.saveResearch.status)
    const declinedFeedback = useSelector((state: RootState) => state.feedback.declined)
    const seenFeedBackForm = useSelector((state: RootState) => state.feedback.seen)
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
            dispatch(removeNotification('idle'))
            if(declinedFeedback !== true && seenFeedBackForm !== true) {
            dispatch(displayFeedBackForm(true))
            }
            dispatch(stopAskingForFeedBack(true))
        }, 2000)


        return () => clearTimeout(timer)

    }, [saveStatus])

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
                        {saveStatus === 'pending' && 'Saving your work'}
                        {saveStatus === 'fulfilled' && 'Saved successfully!'}
                        {saveStatus === 'rejected' && 'Failed to save'}

                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    <AnimatePresence mode="wait">
                        {saveStatus === 'pending' && <Pending />}
                        {saveStatus === 'fulfilled' && <Success />}
                        {saveStatus === 'rejected' && <Failed />}
                    </AnimatePresence>

                </div>
            </div>
        </motion.div>
    )
}








