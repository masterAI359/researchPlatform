import Loader from "../../Loaders/Loader";
import { AnimatePresence, motion } from "framer-motion";
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
            dispatch(removeNotification('idle'))
        }, 2000)


        return () => clearTimeout(timer)

    }, [saveStatus])

    return (
        <motion.div
            variants={variants}
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute top-24 right-36 h-10 w-52 py-5 bg-mirage rounded-xl px-2"
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
                        {saveStatus === 'pending' && <Saving />}
                        {saveStatus === 'fulfilled' && <SaveSuccess />}
                        {saveStatus === 'rejected' && <FailedToSave />}
                    </AnimatePresence>

                </div>
            </div>
        </motion.div>
    )
}


const notificationVariants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}

function Saving() {

    return (
        <motion.div
            key='pending'
            variants={notificationVariants}
            initial='show'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
        >
            <Loader />
        </motion.div>)
}

function SaveSuccess() {

    return (
        <motion.div
            key='success'
            variants={notificationVariants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
            className="relative top-0 right-0 bottom-0 h-10 w-10 flex items-center justify-center">
            <Lottie animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
        </motion.div>
    )
}


function FailedToSave() {

    return (
        <motion.div
            key='failed'
            variants={notificationVariants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.15 }}
            className="relative top-0 right-0 bottom-0 h-10 w-10 flex items-center justify-center">
            <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero"><g fill="#f24343" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM17.52734,16l6.08789,8.94336l-6.16211,9.05664h2.54492l4.80273,-7.09766h0.19922l4.7168,7.09766h2.69336l-6.09961,-8.95508l6.23633,-9.04492h-2.55664l-4.81445,7.16016h-0.20117l-4.74023,-7.16016z" /></g></g></svg>
        </motion.div>
    )
}