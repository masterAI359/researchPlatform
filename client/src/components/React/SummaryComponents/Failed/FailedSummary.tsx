import FailedNotification from "./FailedNotification"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function FailedSummary({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { read } = investigateState
    const { failedNotifications } = read

    return (

        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
            className="2xl:bottom-12 2xl:right-12 bottom-3 right-3 flex fixed z-50 flex-col gap-y-6">
            <AnimatePresence mode="popLayout" initial={false}>
                {failedNotifications?.map((notification: any) => (
                    <FailedNotification
                        key={notification.article_url}
                        notification={notification}
                    />
                ))}
            </AnimatePresence>

        </motion.ul>

    )

}