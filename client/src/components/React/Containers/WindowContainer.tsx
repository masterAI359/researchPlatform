import HeroWindow from "../PromptChallenge/Window";
import BackButton from "../Buttons/StepButtons/Back";
import StepControl from "../Buttons/StepButtons/StepControl";
import NextButton from "../Buttons/StepButtons/Next";
import StepWizard from "../StepWizard/StepWizard";
import { AnimatePresence, motion } from "framer-motion";


export default function WindowContainer({ currentStep, setStartSearch, setQuery, isLoading,
    query, setIsSubmitted, setCurrentStep, setCanProceed, notifyRequired, setNotifyRequired,
    setGettingHelp, summaries, canProceed }: any) {


    return (
        <main className={`xl:w-3/5 xs:w-11/12 h-full relative flex flex-col items-center
        `}>

            <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <section className="w-full h-full relative">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.4 }}
                    >

                        {summaries.length < 1 && <HeroWindow
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            query={query}
                            setQuery={setQuery}
                            isLoading={isLoading}
                            setIsSubmitted={setIsSubmitted}
                            setStartSearch={setStartSearch}
                            setCanProceed={setCanProceed}
                            notifyRequired={notifyRequired}
                            setNotifyRequired={setNotifyRequired}
                            setGettingHelp={setGettingHelp}
                        />}
                        <StepControl
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            setCanProceed={setCanProceed}
                            canProceed={canProceed}
                            setNotifyRequired={setNotifyRequired}
                            notifyRequired={notifyRequired}
                        />

                    </motion.div>
                </AnimatePresence>
            </section>
        </main>
    )
}