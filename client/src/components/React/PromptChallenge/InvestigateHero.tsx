import { Children, useState, useRef, useEffect } from "react";
import Angle from "./Appproach/Angle";
import HeroWindow from "./Window";
import BackButton from "../Buttons/Back";
import NextButton from "../Buttons/Next";
import StepWizard from "../StepWizard/StepWizard";
import { AnimatePresence, motion } from "framer-motion";

export default function InvestigateHero({ query, isLoading, setIsSubmitted, setQuery, gettingHelp, setGettingHelp, summaries }) {
  const [approachSet, setApproach] = useState<boolean>(true)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [startSearch, setStartSearch] = useState<boolean>(false)
  const [canProceed, setCanProceed] = useState<boolean>(false)
  const [notifyRequired, setNotifyRequired] = useState<boolean>(false)


  return (
    <section className={`py-8 transition-all animate-fade-in delay-1000 duration-500 ease-in-out `}>
      <div className={`mx-auto 2xl:max-w-7xl xs:w-dvw
    md:px-12 w-full rounded-[3rem] no-scrollbar
    relative xs:h-[28rem] lg:pt-20 sm:pt-20 opacity-100 transition-all duration-700 ease-in-out
    ${currentStep < 4 ? 'lg:h-[40rem] bg-gradientdown' : 'lg:h-[26rem] bg-transparent'} 
    ${gettingHelp ? 'opacity-65 pointer-events-none' : null}`}>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
            <BackButton
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
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

            <NextButton
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setCanProceed={setCanProceed}
              canProceed={canProceed}
              setNotifyRequired={setNotifyRequired}
              notifyRequired={notifyRequired}
            />
          </motion.div>
        </AnimatePresence>



      </div>
    </section>
  )
}


