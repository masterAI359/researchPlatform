import { Children, useState, useRef, useEffect } from "react";
import HeroWindow from "./Window";
import BackButton from "../Buttons/Back";
import NextButton from "../Buttons/Next";





export default function InvestigateHero({ query, isLoading, setIsSubmitted, setQuery }) {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [progress, setProgress] = useState<number>(null)
  const [startSearch, setStartSearch] = useState<boolean>(false)



  return (
    <section className='py-8 transition-all animate-fade-in delay-1000 duration-700 ease-in'>
      <div className='grid grid-cols-8 mx-auto 2xl:max-w-7xl 
    md:px-12 w-full bg-gradientdown rounded-[3rem] lg:min-h-[45rem]
    overflow-hidden relative h-full lg:pt-16 sm:pt-20'>
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
        />
        <NextButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

      </div>
    </section>
  )
}


