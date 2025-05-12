import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { RootState } from "@/ReduxToolKit/store";
import { useEffect } from "react";
import WikiExtractLoader from "../Loaders/WikiExtractLoader";

const variants = {

    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
}


export default function WikiTermExtract () {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { extract, title, timestamp, status } = investigateState.wiki;

    useEffect(() => {}, [status, extract])

    const updatedTime: string | null = timestamp ? timestamp.split('').slice(0, 10) : null;

    const termExtracted = (
        <motion.div
        variants={variants}
        initial='closed'
        animate='open'
        exit='closed'
        transition={{ type: "tween", duration: 0.2 }}
        className="w-88 h-auto p-6 rounded-3xl bg-ebony shadow-material flex flex-col gap-y-6 items-center justify-center fixed right-12 bottom-12"
        > 
        <div className="w-full h-auto flex items-center gap-x-2">
                        <div className="w-8 h-8 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" 
                            className="text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-wikipedia"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4.984h2" /><path d="M8 4.984h2.5" /><path d="M14.5 4.984h2.5" /><path d="M22 4.984h-2" /><path d="M4 4.984l5.455 14.516l6.545 -14.516" /><path d="M9 4.984l6 14.516l6 -14.516" /></svg>
                        </div>
                        <div className="w-full h-auto grow">
                            <p className="text-zinc-400 font-light text-base">
                                Wikipedia Extract
                            </p>
                        </div>
                    </div>
            {status === 'pending' && <WikiExtractLoader />}
            {status === 'fulfilled' &&
            <motion.div 
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: "tween", duration: 0.2 }}
            > 
                  <figcaption className="flex flex-col items-center gap-y-4">
                    
                <h1 className="text-white font-light tracking-tight text-xl"><span className="text-zinc-400">Term: </span> <em>{title}</em></h1>
                <p className="text-zinc-400 font-light tracking-tight">Last Updated: <span className="text-white">{updatedTime ? updatedTime : null}</span></p>
            </figcaption>
            <main className="text-white font-light tracking-tight mt-6">
                {extract}
            </main>
            </motion.div> }
        </motion.div>
    )

    return createPortal(termExtracted, document.body)
}
