import React from 'react';
import { useRef, useState, useEffect } from "react";
import { WindowProps } from "@/env";
import { AnimatePresence, motion } from "framer-motion";
import StepWizard from '../StepWizard/StepWizard';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import SearchBox from './SearchBox';

//TODO: subtract the height of the stepwizard from container height, and use that value as the maximum height for the <motion.div> containing the <Step/> components


export default function HeroWindow({ currentStep, setStartSearch, setQuery, isLoading,
  query, setIsSubmitted, setCurrentStep, setCanProceed, notifyRequired, setNotifyRequired, setGettingHelp }: WindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [wizardHeight, setWizardHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [origin, setOrigin] = useState<string>('');


  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight)
    }

    if (wizardRef.current) {
      setWizardHeight(wizardRef.current.offsetHeight)
      setWizardHeight(wizardRef.current.offsetHeight)
      console.log(wizardHeight)
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight)
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stepsHeight = containerHeight - wizardHeight


  return (
    <section
      ref={containerRef}
      className="col-span-6 overflow-hidden relative md:min-h-full h-fit max-h-[45rem] w-full animate-fade-in delay-300">
      {containerWidth > 0 ? <div
        className="w-full flex justify-center items-center"
      >
        <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div> : null}

      {containerWidth > 0 ? <motion.div
        ref={wizardRef}
        style={{ maxHeight: stepsHeight }}
        className="flex items-baseline content-center md:min-h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -currentStep * containerWidth }}
        transition={{ type: 'tween', duration: 0.2 }}>

        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center max-h-fit box-border flex'>
          <Step1
            setNotifyRequired={setNotifyRequired}
            setCanProceed={setCanProceed}
            notifyRequired={notifyRequired}
            containerWidth={containerWidth}
            origin={origin}
            setOrigin={setOrigin}
            setGettingHelp={setGettingHelp}
          />
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='max-h-fit text-center flex grow content-center'>
          <Step2 containerWidth={containerWidth}
            setGettingHelp={setGettingHelp}
          />
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center max-h-fit'>
          <Step3 containerWidth={containerWidth} setStartSearch={setStartSearch} setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center max-h-fit'>
          <Step4 setStartSearch={setStartSearch} setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center max-h-fit'>
          <SearchBox
            setQuery={setQuery}
            setIsSubmitted={setIsSubmitted}
            isLoading={isLoading}
          />
        </div>

      </motion.div> : null}
    </section>
  )
}