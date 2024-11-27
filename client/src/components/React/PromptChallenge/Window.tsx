import React from 'react';
import { useRef, useState, useEffect } from "react";
import { WindowProps } from "@/env";
import { AnimatePresence, motion } from "framer-motion";
import StepWizard from '../StepWizard/StepWizard';
import Perspective from './Appproach/Perspective';
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

  let stepsHeight = containerHeight - wizardHeight



  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight)

    }

    if (wizardRef.current) {
      setWizardHeight(wizardRef.current.offsetHeight)
      setWizardHeight(wizardRef.current.offsetHeight)
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



  return (
    <section
      ref={containerRef}
      className="overflow-x-hidden relative xs:h-5/6 md:min-h-full mx-auto h-fit xs:w-12/12 xl:w-3/4 transition-all duration-400 animate-fade-in delay-300 no-scrollbar">
      {containerWidth > 0 ? <motion.div
        ref={wizardRef}
        style={{ maxHeight: "fit" }}
        className="flex items-baseline md:min-h-full lg:max-h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -currentStep * containerWidth }}
        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}>

        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center mx-auto max-h-fit box-border flex'>
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
        <div style={{ width: containerWidth, flexShrink: 0, maxHeight: 'fit' }} className='text-center flex grow content-center'>
          <Perspective setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ width: containerWidth, flexShrink: 0, maxHeight: 'fit' }} className='text-center max-h-fit'>
          <Step2 containerWidth={containerWidth}
            setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center max-h-fit'>
          <Step3 containerWidth={containerWidth} setStartSearch={setStartSearch} setGettingHelp={setGettingHelp} />

        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center h-fit'>
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