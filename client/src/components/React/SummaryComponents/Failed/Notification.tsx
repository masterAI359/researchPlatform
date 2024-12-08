import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Notification({ notification }) {
    const [showing, setShowing] = useState<boolean>(true)

    return (
        <AnimatePresence>
            {showing && (
                <motion.li
                    key={notification.title}
                    layout
                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    className="sm:max-w-20 md:max-w-44 xl:max-w-[29rem] xl:min-h-36 px-3 h-auto bg-ebony rounded-2xl py-2 cursor-pointer flex">

                    <div className="min-h-full w-full box-border flex gap-x-2 xl:my-2 relative">
                        <div className="flex flex-col w-full h-full gap-y-4">
                            <div className="flex gap-x-2 h-auto items-start w-3/4 box-border">
                                <div className="min-h-8 min-w-8 max-h-10 max-w-10">
                                    <img className="max-h-full max-w-full" src={notification.logo} />
                                </div>
                                <p className="text-white text-sm font-bold">
                                    {notification.source} article:
                                    <span className="font-light"> '{notification.title}' </span>
                                    <span className="font-bold text-red-600">failed to load</span>
                                </p>
                            </div>
                            <div>
                                <button className="bg-button_gray text-white rounded-full w-28 border-transparent py-2 px-2 
                                hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer text-sm"
                                > <a href={notification.article_url} target="_blank">Visit Source</a>
                                </button>
                            </div>
                        </div>
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
            )}
        </AnimatePresence>



    )
}