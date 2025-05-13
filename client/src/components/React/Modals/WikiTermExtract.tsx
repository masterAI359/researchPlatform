import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { useEffect, useState } from "react";
import WikiExtractLoader from "../Loaders/WikiExtractLoader";
import { getExtract } from "@/ReduxToolKit/Reducers/Investigate/Review";
import ExtractNotification from "../Notifications/ExtractNotification";
import { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review";

const variants = {

    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
}


interface WikiTerm {
    article_url?: string,
    data?: Extracts
}

export default function WikiTermExtract ({ article_url, data }: WikiTerm) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { extract, title, timestamp, status } = investigateState.wiki;
    const { extracts } = investigateState.review;
    const dispatch = useDispatch<AppDispatch>();
    const [showNotification, setShowNotification] = useState<boolean>(null);
    const updatedTime: string | null = timestamp ? timestamp.split('').slice(0, 10) : null;
    const saved: boolean | null = extract ?  extracts.some((item: any) => item.title === title) : null

    


    useEffect(() => {


    }, [status, extract, saved, showNotification])


  


    const handleSave = async () => {
        dispatch(getExtract({ title: title, extract: extract, associatedArticle: article_url}));
        setShowNotification(true);
    }



    const termExtracted = (
        <motion.div
        variants={variants}
        initial='closed'
        animate='open'
        exit='closed'
        transition={{ type: "tween", duration: 0.2 }}
        className="w-80 h-auto p-6 rounded-3xl  bg-gradient-to-tr from-ebony to-mirage shadow-inset flex flex-col gap-y-4 items-center justify-center fixed right-6 bottom-6"
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
            <AnimatePresence mode="wait">
         {status === 'pending' && <WikiExtractLoader />}
            {status === 'fulfilled' &&
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
                <p className="text-zinc-400 text-sm font-light tracking-tight">Last Updated: <span className="text-white">{updatedTime ? updatedTime : null}</span></p>
            </figcaption>
            <main className="text-white text-sm font-light tracking-tight mt-4">
                {extract}
            </main>
            <footer className="w-full h-fit flex items-center justify-end mt-4">
                <div className="h-6 w-6 cursor-pointer group relative">
                    <div className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto group-hover:bg-white opacity-0 absolute md:-left-24 -top-6
                border border-gray group-hover:opacity-100 transition-all 
                z-50 duration-200 ease-in-out">

                <h1 className="text-black xl:text-sm xl:p-1 font-light tracking-tight text-center w-full">
                    save extract
                </h1>
            </div>
  <svg
  onClick={handleSave}
  className={`${saved ? 'text-white' : 'text-white/30'} group-hover:text-white/60 transition-all duration-200 ease-in-out'}
            transition-all duration-200 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={'100%'} height={'100%'} viewBox="0,0,256,256">
                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z" /></g></g>
            </svg>
                </div>
            </footer>
            </motion.div> }
            </AnimatePresence>

            <AnimatePresence>
               {showNotification && <ExtractNotification saved={saved} setShowNotification={setShowNotification} />}
            </AnimatePresence>
   
        </motion.div>
    )

    return createPortal(termExtracted, document.body)
}
