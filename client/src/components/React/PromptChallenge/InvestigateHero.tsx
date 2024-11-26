import { Children, useState, useRef, useEffect } from "react";
import HeroWindow from "./Window";
import BackButton from "../Buttons/Back";
import NextButton from "../Buttons/Next";
import StepWizard from "../StepWizard/StepWizard";

export default function InvestigateHero({ query, isLoading, setIsSubmitted, setQuery }) {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [startSearch, setStartSearch] = useState<boolean>(false)
  const [canProceed, setCanProceed] = useState<boolean>(false)
  const [notifyRequired, setNotifyRequired] = useState<boolean>(false)
  const [gettingHelp, setGettingHelp] = useState<boolean>(false)

  console.log(currentStep)

  return (
    <section className={`py-8 transition-all animate-fade-in delay-1000 duration-500 ease-in-out `}>
      <div className={`mx-auto 2xl:max-w-7xl xs:w-dvw
    md:px-12 w-full rounded-[3rem] bg-gradientdown no-scrollbar
    relative xs:h-[28rem] lg:pt-20 sm:pt-20 opacity-100 transition-all duration-700 ease-in-out
    ${currentStep < 4 ? 'lg:h-[40rem] ' : 'lg:h-[26rem]'} 
    ${gettingHelp ? 'opacity-65 pointer-events-none' : null}`}>

        <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <BackButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <HeroWindow
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
        />
        <NextButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setCanProceed={setCanProceed}
          canProceed={canProceed}
          setNotifyRequired={setNotifyRequired}
          notifyRequired={notifyRequired}
        />

      </div>
    </section>
  )
}


