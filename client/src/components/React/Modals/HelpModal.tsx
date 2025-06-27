import { motion, AnimatePresence } from "framer-motion";
import { Help } from "@/env";
import { getHelp } from "@/ReduxToolKit/Reducers/Investigate/HelpModal";
import { useDispatch } from "react-redux";

export default function HelpModal({ info, handleExpand, isOpen, setActiveTab, activeTab }) {
    const dispatch = useDispatch()

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className=" bg-gradient-to-tr from-ebony to-mirage opacity-100 h-auto
                         shadow-material rounded-xl 
                         z-50 absolute bottom-12 xl:pb-2 xl:bottom-24 sm:bottom-16 sm:w-[33rem] 
                         md:left-1/4 lg:left-1/3 sm:left-20 xl:w-[38rem] pb-6
                         overflow-hidden"
        >
            <header className="w-full h-auto relative flex items-start">
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                    onClick={() => {
                        handleExpand();
                        { isOpen ? dispatch(getHelp(false)) : null }
                    }}
                    className="w-8 h-8 cursor-pointer p-1.5 mr-4 rounded-lg 
                                            hover:bg-white/10 transition-all duration-200 ease-in-out absolute -right-3 top-1">
                    <svg
                        className="text-zinc-200 cursor-pointer opacity-55 hover:opacity-100 
                                            transition-opacity duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                    </svg>
                </motion.div>
                <ul className="flex items-center justify-start h-fit cursor-pointer overflow-hidden">
                    {info.map((element: Help, index: number) => (
                        <motion.li
                            className={`p-1 `}
                            key={element.heading}
                            initial={false}
                            animate={{
                                opacity:
                                    info[index] === activeTab ? 1 : 0.5,
                            }}
                            onClick={() => setActiveTab(info[index])}
                        >
                            <h1 className={`font-light tracking-tight transition-all duration-200 ease-in-out text-sm md:text-xl p-2 rounded-md text-white  ${info[index] === activeTab ? ' bg-black/30' : 'bg-white/5 hover:bg-black/20'}`}>{element.heading}</h1>

                        </motion.li>
                    ))}
                </ul>
            </header>

            <main className="w-full h-full flex flex-col min-h-60 max-h-60 relative bottom-0">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        layout
                        key={activeTab ? activeTab : "empty"}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.2 } }}
                        exit={{ y: -100, opacity: 0, transition: { duration: 0.2 } }}
                    >
                        <p className="text-white font-light text-sm md:text-lg p-4 absolute-bottom-2 left-2">
                            {activeTab ? activeTab.explanation : null}

                        </p>
                    </motion.div>
                </AnimatePresence>
            </main>

        </motion.div>
    )
}