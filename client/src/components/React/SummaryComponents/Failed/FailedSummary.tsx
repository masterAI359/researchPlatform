import Notification from "./Notification"

export default function FailedSummary({ failedNotifications }) {


    return (

        <ul className="2xl:bottom-12 2xl:right-12 bottom-3 right-3 flex fixed z-50 flex-col gap-y-6">
            {failedNotifications.map((notification: any) => (
                <Notification
                    key={notification.source}
                    notification={notification}
                />

            ))}
        </ul>

    )

}