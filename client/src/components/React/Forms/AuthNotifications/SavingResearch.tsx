import Loader from "../../Loaders/Loader";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import blueCheck from '../../../../lotties/blueCheck.json'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";
import { removeNotification } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice";

export default function SavingResearch({ }) {
    const saveStatus = useSelector((state: RootState) => state.saveResearch.status)
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
            dispatch(removeNotification())
        }, 3000)


        return () => {
            clearTimeout(timer)
        }
    }, [saveStatus])

    return (
        <motion.div
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute top-24 right-36 h-10 w-52 py-5 bg-mirage rounded-xl px-2"
        >
            <div className="flex w-full h-full items-center justify-between">
                <div className="w-auto h-fit">
                    <p className="text-white font-light">
                        {saveStatus === 'fulfilled' ? 'Saved successfully!' : 'Saving your work'}
                    </p>
                </div>
                <div className="w-auto h-fit relative">
                    {saveStatus === 'fulfilled' ? <SaveSuccess /> : <Loader />}
                </div>
            </div>
        </motion.div>
    )
}


function SaveSuccess() {

    return (
        <div className="relative top-0 right-0 bottom-0 h-10 w-10 flex items-center justify-center">
            <Lottie animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
        </div>
    )
}