import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { closeNotification } from "@/ReduxToolKit/Reducers/Investigate/Reading"



export default function FailedNotification({ notification }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { read } = investigateState
    const { failedNotifications } = read
    const dispatch = useDispatch()

    const close = () => {
        const articleLink: string = notification.article_url
        const thisNotification = failedNotifications.findIndex((notification => notification.article_url === articleLink))
        dispatch(closeNotification(thisNotification))
    }

    const limitDescription = (string: string) => {

        if (string.length >= 50) {
            let newArr = string.split('')

            let count = 0

            let stringArr = []

            for (let i = 0; i < newArr.length; i++) {

                count++
                stringArr.push(newArr[i])

                if (count >= 40) {
                    break
                }
            }

            const newString = stringArr.join('')

            const presentation = newString + '...'

            return presentation
        } else {
            return string
        }
    }

    const shortenedTitle = limitDescription(notification.title)


    return (
        <motion.li
            key={notification.title}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { type: 'tween', duration: 0.15 } }}
            className="relative w-80 md:w-96 h-44 sm:h-32 z-50 md:max-w-44 xl:max-w-[29rem] h-auto bg-gradient-to-tr from-ebony to-mirage rounded-2xl xl:pb-12 lg:py-2 flex content-start"
        >
            {/* Main content */}
            <div className="xl:w-4/5 box-border flex gap-x-2 pl-2 pb-6 pt-2 pr-16 sm:pr-0 sm:pl-0 sm:pt-0 sm:pb-0 
            relative h-28 w-full sm:h-auto sm:w-auto">
                <div className="flex w-full h-full relative md:pl-2">
                    <div className="flex gap-2 h-auto items-start xs:w-full md:w-3/4 lg:w-5/6 box-border">
                        <div className="md:min-h-8 md:min-w-8 md:max-h-10 md:max-w-10 max-w-9 h-auto">
                            <img className="max-h-24 w-auto" src={notification.logo} />
                        </div>
                        <p className="text-white text-xs md:text-sm font-bold hidden md:block">
                            {notification.source} article:
                            <span className="font-light"> '{shortenedTitle}' </span>
                            <span className="font-bold text-red-600">failed to load</span>
                        </p>
                        <p className="text-white text-sm md:text-sm block md:hidden">
                            <span className="text-sm font-light tracking-tight text-white"><em>{notification.source} article:</em></span>
                            <span className="font-light"> '{shortenedTitle}' </span>
                            <span className="text-red-600">Denied access</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Visit Source button fixed at bottom right */}
            <button
                className="absolute left-2 bottom-2 bg-white sm:bg-white/10 group text-white rounded-full w-auto px-2 h-fit md:w-28 border-transparent md:p-2 p-1
                     sm:hover:bg-white sm:hover:text-black transition-all duration-300 ease-in-out cursor-pointer md:text-sm"
            >
                <a href={notification.article_url} className="text-base text-black md:group-hover:text-black md:text-white sm:text-xs" target="_blank">
                    Visit Source
                </a>
            </button>

            {/* Close button fixed at top right */}
            <div
                onClick={close}
                className="absolute top-2 right-2 md:w-8 md:h-8 xs:h-5 xs:w-5 cursor-pointer rounded-md hover:bg-white/10 xs:p-0 md:p-1 transition-all ease-in-out duration-200"
            >
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                    <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                </svg>
            </div>
        </motion.li>

    )
}