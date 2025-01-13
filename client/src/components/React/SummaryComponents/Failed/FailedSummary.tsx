import Notification from "./Notification"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function FailedSummary({ failedNotifications, setFailedNotifications }) {
    const notifications = useSelector((state: RootState) => state.read.failedNotifications)

    return (

        <motion.ul className="2xl:bottom-12 2xl:right-12 bottom-3 right-3 flex fixed z-50 flex-col gap-y-6">
            <AnimatePresence mode="popLayout" initial={false}>
                {notifications.map((notification: any) => (
                    <Notification
                        key={notification.article_url}
                        notification={notification}
                        failedNotifications={failedNotifications}
                        setFailedNotifications={setFailedNotifications}
                    />
                ))}
            </AnimatePresence>

        </motion.ul>

    )

}