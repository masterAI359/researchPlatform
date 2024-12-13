import React from 'react';
import { useRef, useState, useLayoutEffect } from "react";
import { WindowProps } from "@/env";
import { motion } from "framer-motion";
import Perspective from './Steps/Step2';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
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

  console.log(containerWidth)


  return (
    <section
      ref={containerRef}
      className="overflow-x-hidden relative xs:h-fit md:min-h-full h-fit 
      mx-auto xs:min-w-full xs:max-w-full xl:min-w-168 xl:max-w-168 xs:mb-4 
      transition-all duration-400 animate-fade-in delay-300 no-scrollbar">
      {containerWidth >= 311 ? <motion.div
        ref={wizardRef}
        style={{ maxHeight: "fit" }}
        className="flex xs:items-center md:items-baseline xs:h-fit md:min-h-full lg:max-h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -currentStep * containerWidth }}
        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}>

        <div style={{ flexShrink: 0, maxWidth: containerWidth }} className='xl:w-168 xs:w-76 xs:min-w-76  text-center mx-auto max-h-fit box-border flex xs:px-2'>
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
        <div style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }} className='xl:w-168 xs:w-76 xs:min-w-76 text-center flex content-center xs:px-2'>
          <Step2 setGettingHelp={setGettingHelp} origin={origin}
            setOrigin={setOrigin} />
        </div>
        <div style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }} className='xl:w-168 xs:w-76 xs:min-w-76 text-center max-h-fit xs:px-2'>
          <Step3 containerWidth={containerWidth}
            setGettingHelp={setGettingHelp} />
        </div>
        <div style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }} className='xl:w-168 xs:w-76 xs:min-w-76 text-center max-h-fit xs:px-2'>
          <Step4 containerWidth={containerWidth} setStartSearch={setStartSearch} setGettingHelp={setGettingHelp} />

        </div>
        <div style={{ flexShrink: 0, maxHeight: 'fit', maxWidth: containerWidth }} className='xl:w-168 xs:w-76 xs:min-w-76 text-center h-fit xs:px-2'>
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