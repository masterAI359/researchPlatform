import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


export default function Boards() {
    const [isOpen, setIsOpen] = useState<boolean>(false)



    return (
        <motion.li
            onClick={() => { setIsOpen(prev => !prev) }}
            className="cursor-pointer">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 group">
                <svg className="icon icon-tabler icons-tabler-outline icon-tabler-sitemap shrink-0 p-0.5  w-6 h-6 text-white/60 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><path d="M12 9l0 3" /></svg>

                <span className="flex-1 ms-3 whitespace-nowrap font-light">Boards</span>

                <div className="w-4 h-4">
                    <svg className={`transition-all duration-200 ease-in-out ${isOpen ? 'rotate-180 text-blue-400' : 'rotate-0 text-white'
                        }`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M44.98828,13.98438c-0.26172,0.00781 -0.51172,0.11719 -0.69531,0.30859l-19.29297,19.29297l-19.29297,-19.29297c-0.1875,-0.19531 -0.44531,-0.30078 -0.71484,-0.30469c-0.41016,0.00391 -0.77344,0.25 -0.92969,0.625c-0.15234,0.37891 -0.0625,0.80859 0.23047,1.09375l20,20c0.39063,0.39063 1.02344,0.39063 1.41406,0l20,-20c0.29688,-0.28516 0.38672,-0.72656 0.23047,-1.10547c-0.16016,-0.37891 -0.53516,-0.625 -0.94922,-0.61719z" /></g></g></svg>
                </div>
            </div>
            <AnimatePresence >
                {isOpen && <Board />}
            </AnimatePresence>
        </motion.li>
    )
}


function Board() {

    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white/10 group">

            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>

            <span className="flex-1 ms-3 whitespace-nowrap font-light">Board 1</span>
        </motion.div>
    )
}