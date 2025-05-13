import { motion } from "framer-motion"
import { useEffect } from "react";
import { createPortal } from "react-dom"

const variants = {
    
    open: { opacity: 1, y: 0},
    closed: { opacity: 0.6, y: '20dvh'}
}

interface NotificationProps {
    saved: boolean | null,
    setShowNotification: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExtractNotification ({ saved, setShowNotification }: NotificationProps) {

    useEffect(() => {

        const timer = setTimeout(() => {

            setShowNotification(false)
        }, 1500);

        return () => clearTimeout(timer);

    }, []);

    const notification = (
        <motion.div
        variants={variants}
        initial="closed"
        animate="open"
        exit="closed"
        transition={{ type: 'tween', duration: 0.2 }}
        className="fixed bottom-10 left-1/3 w-96 h-10 rounded-full bg-white"
        >
            <div className="relative h-full w-full flex items-center justify-center">
               {saved ? <div className="flex items-center justify-between w-4/5 h-8"> 
                <h1 className="text-black text-lg font-light text-nowrap">
                    Wikipedia extract <em>saved</em>
                     </h1>
                     <div className="h-8 w-8">
<svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 icon icon-tabler icons-tabler-outline icon-tabler-progress-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" /><path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" /><path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" /><path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" /><path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" /><path d="M9 12l2 2l4 -4" /></svg>

                     </div>
                    
                     </div> : <div className="flex items-center justify-between w-4/5 h-8">
                        <h1 className="text-black text-lg font-light">
                    <em className="font-light">Removed</em> from saved extracts
                     </h1>
                     <div className="h-8 w-8">
<svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'}   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-red-500 icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M14 14l-4 -4" /><path d="M10 14l4 -4" /></svg>

                     </div>
                        </div>}
            </div>
        </motion.div>
    )

    return createPortal(notification, document.body)
}