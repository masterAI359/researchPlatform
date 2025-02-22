import StepWizard from "../StepWizard/StepWizard";
import { AnimatePresence, motion } from "framer-motion";
import WindowWrapper from "../Investigate/Wrappers/WindowWrapper";


export default function WindowContainer() {


    return (
        <main className={`xl:w-3/5 xs:w-full min-h-full relative flex flex-col items-center
        `}>

            <StepWizard />
            <section className="w-full h-full relative">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.4 }}
                    >

                        <WindowWrapper
                        />

                    </motion.div>
                </AnimatePresence>
            </section>
        </main>
    )
}