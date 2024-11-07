import { Children, useState, useRef, useEffect } from "react";
import HeroWindow from "./Window";
import BackButton from "../Buttons/Back";
import NextButton from "../Buttons/Next";





export default function InvestigateHero({ query, isLoading, setIsSubmitted, setQuery }) {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [startSearch, setStartSearch] = useState<boolean>(false)
  const [canProceed, setCanProceed] = useState<boolean>(false)
  const [notifyRequired, setNotifyRequired] = useState<boolean>(false)
  const [gettingHelp, setGettingHelp] = useState<boolean>(false)


  console.log(gettingHelp)




  return (
    <section className={`py-8 transition-all animate-fade-in delay-1000 duration-500 ease-in-out `}>
      <div className={`grid grid-cols-8 mx-auto 2xl:max-w-7xl 
    md:px-12 w-full bg-gradientdown rounded-[3rem] md:min-h-fit lg:min-h-[45rem]
    overflow-hidden relative h-full lg:pt-16 sm:pt-20 opacity-100 ${gettingHelp ? 'opacity-65 pointer-events-none' : null}`}>
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


