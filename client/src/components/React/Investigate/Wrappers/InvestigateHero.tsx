import { useState } from "react";
import HeroWrapper from "../../Containers/HeroWrapper";

export default function InvestigateHero({ query, isLoading, setIsSubmitted, setQuery, gettingHelp, setGettingHelp, summaries, setStartSearch }) {
  const [approachSet, setApproach] = useState<boolean>(true)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [canProceed, setCanProceed] = useState<boolean>(false)
  const [notifyRequired, setNotifyRequired] = useState<boolean>(false)


  return (
    <section className={`lg:py-8 xs:py-4 transition-all animate-fade-in delay-1000 duration-500 ease-in-out`}>
      <div className={`mx-auto 2xl:max-w-[90rem] xs:w-dvw
   w-full rounded-[3rem] no-scrollbar flex flex-col items-center px-8
    relative xs:h-[28rem] lg:pt-20 sm:pt-20 opacity-100 transition-all duration-700 ease-in-out 
    lg:h-[42rem] bg-gradientdown
    ${gettingHelp ? 'opacity-65 pointer-events-none' : null}`}>



        <HeroWrapper
          summaries={summaries}
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
          canProceed={canProceed}
        />
      </div>
    </section>
  )
}