import Notification from "./Notification"
import { motion } from "framer-motion"

export default function FailedSummary({ failedNotifications }) {


    return (

        <motion.ul layout className="2xl:bottom-12 2xl:right-12 bottom-3 right-3 flex fixed z-50 flex-col gap-y-6">
            {failedNotifications.map((notification: any) => (
                <Notification
                    key={notification.source}
                    notification={notification}
                />

            ))}
        </motion.ul>

    )

}