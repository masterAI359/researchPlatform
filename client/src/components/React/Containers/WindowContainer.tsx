import StepWizard from "../StepWizard/StepWizard";
import { AnimatePresence, motion } from "framer-motion";
import WindowWrapper from "../Investigate/Wrappers/WindowWrapper";


export default function WindowContainer() {


    return (
        <main className={`xl:w-3/5 w-full min-h-full relative flex flex-col justify-center
        `}>

            <StepWizard />
            <section className="w-full h-full relative mt-24 md:mt-0">
                <WindowWrapper
                />
            </section>
        </main>
    )
}