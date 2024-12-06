import React from 'react';
import { useRef, useState, useLayoutEffect } from "react";
import { WindowProps } from "@/env";
import { motion } from "framer-motion";
import Perspective from './Steps/Step2';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step3';
import Step3 from './Steps/Step4';
import Step4 from './Steps/Step4';
import SearchBox from './SearchBox';


export default function HeroWindow({ currentStep, setStartSearch, setQuery, isLoading,
  query, setIsSubmitted, setCurrentStep, setCanProceed, notifyRequired, setNotifyRequired, setGettingHelp }: WindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [wizardHeight, setWizardHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [origin, setOrigin] = useState<string>('');


  useLayoutEffect(() => {
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
      className="overflow-x-hidden relative xs:h-5/6 md:min-h-full h-fit mx-auto xs:w-12/12 xl:w-4/5 transition-all duration-400 animate-fade-in delay-300 no-scrollbar">
      {typeof window !== 'undefined' ? <motion.div
        ref={wizardRef}
        style={{ maxHeight: "fit" }}
        className="flex items-baseline md:min-h-full lg:max-h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -currentStep * containerWidth }}
        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}>

        <div style={{ flexShrink: 0 }} className='xl:w-168 text-center mx-auto max-h-fit box-border flex'>
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
        <div style={{ flexShrink: 0, maxHeight: 'fit' }} className='xl:w-168 text-center flex grow content-center'>
          <Step2 setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ flexShrink: 0, maxHeight: 'fit' }} className='xl:w-168 text-center max-h-fit'>
          <Step3 containerWidth={containerWidth}
            setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ flexShrink: 0 }} className='xl:w-168 text-center max-h-fit'>
          <Step4 containerWidth={containerWidth} setStartSearch={setStartSearch} setGettingHelp={setGettingHelp} />

        </div>
        <div style={{ flexShrink: 0 }} className='xl:w-168 text-center h-fit'>
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