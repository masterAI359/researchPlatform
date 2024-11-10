import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Notification({ notification }) {
    const [showing, setShowing] = useState<boolean>(true)

    console.log(showing)

    useEffect(() => {


    }, [])

    return (
        showing && (
            <motion.li
                key={notification.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                className="sm:max-w-20 md:max-w-44 xl:max-w-[32rem] xl:min-h-32 px-4 h-auto bg-ebony rounded-2xl py-2 cursor-pointer flex">

                <div className="my-auto h-full w-full box-border flex gap-x-2 xl:my-2 relative">
                    <div className="w-8 h-8 top-0 left-0 mr-1">
                        <svg className="text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 30.486328 15.978516 A 1.50015 1.50015 0 0 0 29.439453 16.439453 L 24 21.878906 L 18.560547 16.439453 A 1.50015 1.50015 0 0 0 17.484375 15.984375 A 1.50015 1.50015 0 0 0 16.439453 18.560547 L 21.878906 24 L 16.439453 29.439453 A 1.50015 1.50015 0 1 0 18.560547 31.560547 L 24 26.121094 L 29.439453 31.560547 A 1.50015 1.50015 0 1 0 31.560547 29.439453 L 26.121094 24 L 31.560547 18.560547 A 1.50015 1.50015 0 0 0 30.486328 15.978516 z" fill="currentColor" />
                        </svg>

                    </div>
                    <div className="w-12 h-12 box-border">
                        <img className="max-h-full max-w-full" src={notification.logo} />
                    </div>
                    <p className="text-white text-sm">
                        {notification.source} article:
                        <span> '{notification.title}' </span>
                        failed to load
                    </p>
                </div>
                <div className="justify-self-end relative w-auto h-full box-border">
                    <div
                        onClick={() => { setShowing(false) }}
                        className="w-8 h-8 rounded-md hover:bg-white/10 p-1 transition-all ease-in-out duration-200 top-0 right-0">
                        <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                            <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                        </svg></div>

                </div>
            </motion.li>
        )


    )
}