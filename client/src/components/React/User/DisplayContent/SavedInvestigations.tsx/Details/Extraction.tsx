import { motion, AnimatePresence } from "framer-motion";
import WikiExtractLoader from "@/components/React/Loaders/WikiExtractLoader";

export default function Extraction({ data }) {
    const { status, title, extract, } = data;

    const variants = {
        open: { opacity: 1},
        closed: { opacity: 0 }
    };


    
      
    return (
        <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: "tween", duration: 0.2 }}
            className="w-80 h-auto p-6 rounded-3xl  bg-gradient-to-tr from-ebony to-mirage shadow-inset flex flex-col gap-y-4 items-center justify-center relative"
        >
            <div className="w-fit h-auto flex items-center gap-x-2 justify-center">
                <div className="w-8 h-8 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                        className="text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-wikipedia"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4.984h2" /><path d="M8 4.984h2.5" /><path d="M14.5 4.984h2.5" /><path d="M22 4.984h-2" /><path d="M4 4.984l5.455 14.516l6.545 -14.516" /><path d="M9 4.984l6 14.516l6 -14.516" /></svg>
                </div>
                <div className="w-full h-auto grow">
                    <p className="text-zinc-400 font-light text-lg">
                        Wikipedia Extract
                    </p>
                </div>
            </div>
 
                    <motion.div
                        key='extract'
                        variants={variants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <figcaption className="flex flex-col items-center gap-y-2">

                            <h1 className="text-white font-light tracking-tight text-base"><span className="text-zinc-400">Term: </span> <em>{title}</em></h1>
                        </figcaption>
                        <main className="text-white text-sm font-light tracking-tight mt-4">
                            {extract}
                        </main>
                
                    </motion.div>
        </motion.div>
    );
}
