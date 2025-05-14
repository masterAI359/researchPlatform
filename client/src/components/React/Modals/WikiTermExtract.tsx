import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { useEffect, useState } from "react";
import WikiExtractLoader from "../Loaders/WikiExtractLoader";
import { getExtract } from "@/ReduxToolKit/Reducers/Investigate/Review";
import ExtractNotification from "../Notifications/ExtractNotification";
import { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { clearWikiSlice } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";

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
    const { extract, title, timestamp, status, errormessage } = investigateState.wiki;
    const { extracts } = investigateState.review;
    const dispatch = useDispatch<AppDispatch>();
    const [showNotification, setShowNotification] = useState<boolean>(null);
    const updatedTime: string | null = timestamp ? timestamp.split('').slice(0, 10) : null;
    const saved: boolean | null = extract ?  extracts.some((item: any) => item.title === title) : null

    


    useEffect(() => {

        if(errormessage) console.log(errormessage);

    }, [status, extract, saved, showNotification, errormessage])


  


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
        className="w-80 h-fit py-2 px-4 rounded-3xl  bg-gradient-to-tr from-ebony to-mirage shadow-inset 
        flex flex-col items-center fixed xl:right-2 xl:bottom-2 2xl:right-4 bottom-4"
        > 
        <div className="min-w-full max-w-full h-auto relative">
            <div onClick={() => dispatch(clearWikiSlice())} className="absolute w-8 h-8 top-0 right-0 rounded-full p-1 md:hover:bg-white/10">
             <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" 
              className="icon icon-tabler text-white icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </div>
            <div className="w-fit gap-x-2 mx-auto h-fit min-h-14 flex items-center justify-center">
                        <div className="w-8 h-8 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" 
                            className="text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-wikipedia"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4.984h2" /><path d="M8 4.984h2.5" /><path d="M14.5 4.984h2.5" /><path d="M22 4.984h-2" /><path d="M4 4.984l5.455 14.516l6.545 -14.516" /><path d="M9 4.984l6 14.516l6 -14.516" /></svg>
                        </div>
                        <div className="w-auto h-fit">
                            <p className="text-zinc-400 font-light text-lg">
                                Wikipedia Extract
                            </p>
                        </div>
                    </div>
            <AnimatePresence mode="wait">
         {status === 'pending' && <WikiExtractLoader key={'wikiloader'}/>}
            {status === 'fulfilled' && extract !== null &&
            <motion.div 
            key='extract'
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: "tween", duration: 0.2 }}
            > 
                  <figcaption className="flex flex-col h-fit w-full items-center gap-y-2">
                    
                <h1 className="text-zinc-400 font-light tracking-tight text-base mt-2"><em>'{title}'</em></h1>
               
            </figcaption>
                <Description />
            <motion.footer className="min-w-full h-fit flex shrink-0 items-center justify-between">
                 <div className="text-zinc-400 text-sm font-light tracking-tight">Last Updated: <span className="text-white">{updatedTime ? updatedTime : null}</span></div>
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
            </motion.footer>
            </motion.div> } 
             {status === 'rejected' && extract === null && (<motion.div className="text-white">{errormessage}</motion.div>)}
            </AnimatePresence>
            <AnimatePresence>
               {showNotification && <ExtractNotification saved={saved} setShowNotification={setShowNotification} />}
            </AnimatePresence>
        </div>
        </motion.div>
    )

    return createPortal(termExtracted, document.body)
}



function Description () {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { description, extract } = investigateState.wiki;
    const [readExtract, setReadExtract] = useState<boolean>(false);

    useEffect(() => {}, [readExtract])

    return (
        <motion.main className="2xl:min-h-36 relative min-w-full max-w-full h-auto flex flex-col gap-y-6 mb-6 items-center justify-between transition-all duration-400 ease-in-out">
  <AnimatePresence mode="popLayout">
      {!readExtract &&  
      <motion.div
        layout
        key={'shortdescription'}
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 0.2, delay: 0 }}}
       exit={{ opacity: 0, scale: 1, transition: { type: 'tween', duration: 0.2, delay: 0 } }}
       className="text-white text-lg font-light tracking-tight flex flex-col h-full grow items-center justify-center ">
            {description}
        </motion.div>}
        {readExtract && <motion.div
        layout
        key={'fullbackground'}
        initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 0.2 }}}
       exit={{ opacity: 0, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
        className="text-white 2xl:text-base lg:text-sm text-xs font-light tracking-tight mt-4">
                {extract}
            </motion.div>}
        </AnimatePresence>
            <div className="w-full h-fit flex items-center justify-center gap-x-2">
                <button onClick={() => setReadExtract(readExtract => !readExtract)} type="button" className="w-44 h-8 p-1.5 rounded-full bg-white flex items-center justify-center
                 text-black  md:hover:bg-white/10 md:hover:text-white transition-all duration-200 ease-in-out">
                    {readExtract ? 'Read description' : 'Read full extract'}
                </button>
            </div>
        </motion.main>
      
    )
}