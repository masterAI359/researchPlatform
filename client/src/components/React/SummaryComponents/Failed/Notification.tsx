import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { closeNotification } from "@/ReduxToolKit/Reducers/Investigate/Reading"



export default function Notification({ notification }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { read } = investigateState
    const { failedNotifications } = read
    const dispatch = useDispatch()

    const close = () => {
        const articleLink: string = notification.article_url
        const thisNotification = failedNotifications.findIndex((notification => notification.article_url === articleLink))
        dispatch(closeNotification(thisNotification))
    }

    return (
        <motion.li
            key={notification.title}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { type: 'tween', duration: 0.15 } }}
            className="xs:max-w-72 xs:max-h-32 md:max-w-44 xl:max-w-[29rem] xl:min-h-40 px-3 h-auto bg-ebony rounded-2xl xl:py-3 lg:py-2 flex content-start">

            <div className="min-h-full w-full box-border flex gap-x-2 xl:my-1 relative">
                <div className="flex flex-col w-full xs:h-fit md:h-full md:gap-y-4 xs:gap-y-2">
                    <div className="flex gap-x-2 h-fit items-start xs:w-full md:w-3/4 lg:w-5/6 box-border">
                        <div className="md:min-h-8 md:min-w-8 md:max-h-10 md:max-w-10 xs:w-24 xs:h-fit">
                            <img className="max-h-full max-w-full" src={notification.logo} />
                        </div>
                        <p className="text-white xs:text-xs md:text-sm font-bold">
                            {notification.source} article:
                            <span className="font-light"> '{notification.title}' </span>
                            <span className="font-bold text-red-600">failed to load</span>
                        </p>
                    </div>
                    <div>
                        <button className="absolute xl:bottom-0 xl:left-2 bg-white/10 text-white rounded-full xs:w-24 md:w-28 border-transparent md:p-2 xs:p-1
                                hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer xs:text-xs md:text-sm"
                        > <a href={notification.article_url} target="_blank">Visit Source</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="justify-self-end relative w-auto h-full box-border">
                <div
                    onClick={close}
                    className="md:w-8 md:h-8 xs:h-5 xs:h-5 cursor-pointer rounded-md hover:bg-white/10 xs:p-0 md:p-1 transition-all ease-in-out duration-200 top-0 right-0">
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                    </svg></div>

            </div>
        </motion.li>
    )
}