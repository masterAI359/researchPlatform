import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { useState, useRef } from "react";
import { useScrollTrap } from "@/hooks/useOverScrollTrap";
import { AnimatePresence, motion } from "framer-motion";

export default function Description() {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { description, extract } = investigateState.wiki;
    const [readExtract, setReadExtract] = useState<boolean>(false);
    const scrollRef = useRef(null);
    useScrollTrap(scrollRef);

    return (
        <motion.main className="2xl:min-h-36 relative min-w-full max-w-full h-auto flex flex-col gap-y-6 mb-6 items-center justify-between transition-all duration-400 ease-in-out ">
            <AnimatePresence mode="popLayout">
                {!readExtract &&
                    <motion.div
                        layout
                        key={'shortdescription'}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 0.2, delay: 0 } }}
                        exit={{ opacity: 0, scale: 1, transition: { type: 'tween', duration: 0.2, delay: 0 } }}
                        className="text-white text-lg font-light tracking-tight flex flex-col h-full grow items-center justify-center ">
                        {description}
                    </motion.div>}
                {readExtract && <motion.div
                    id="wiki_extract"
                    layout
                    key={'fullbackground'}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
                    exit={{ opacity: 0, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
                    className="h-72 w-full border-b border-white/20 mt-4 overflow-y-hidden relative">
                    <div
                        ref={scrollRef}
                        className="absolute inset-0 text-white 2xl:text-sm  overflow-y-scroll no-scrollbar lg:text-sm text-xs font-light tracking-tight">
                        {extract}

                    </div>
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