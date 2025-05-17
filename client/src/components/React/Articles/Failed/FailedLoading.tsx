import FailedNotification from "./FailedNotification"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function FailedLoading({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { read } = investigateState
    const { failedNotifications } = read


    return (

        <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.3 } }}
            exit={{ opacity: 0 }}
            className="2xl:top-20 2xl:right-6 sm:top-16 bottom-16 right-2 flex fixed z-50 flex-col gap-y-6">
            <AnimatePresence initial={false}>
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