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


export default function HeroWindow({ currentStep, setStartSearch, setQuery, isLoading, query, setIsSubmitted, setCurrentStep }: WindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0)
  const [origin, setOrigin] = useState<string>('');


  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight)
    }
    // Recalculate on window resize
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
      className="col-span-6 overflow-hidden relative max-h-[45rem] w-full animate-fade-in delay-300">
      {containerWidth > 0 ? <div
        style={{ width: containerWidth }}
        className="w-full flex justify-center items-center"
      >
        <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div> : null}

      {containerWidth > 0 ? <motion.div
        style={{ maxHeight: containerHeight }}
        className="flex items-baseline content-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -currentStep * containerWidth }}
        transition={{ type: 'tween', duration: 0.2 }}>

        <div style={{ width: containerWidth, maxHeight: containerHeight, flexShrink: 0 }} className='text-center box-border flex'>
          <Step1
            containerWidth={containerWidth}
            origin={origin}
            setOrigin={setOrigin} />
        </div>
        <div style={{ width: containerWidth, maxHeight: containerHeight, flexShrink: 0 }} className='h-fit text-center flex grow content-center'>
          <Step2 containerWidth={containerWidth} />
        </div>
        <div style={{ width: containerWidth, height: containerHeight, flexShrink: 0 }} className='text-center h-fit'>
          <Step3 containerWidth={containerWidth} setStartSearch={setStartSearch} />
        </div>
        <div style={{ width: containerWidth, height: containerHeight, flexShrink: 0 }} className='text-center h-fit'>
          <Step4 setStartSearch={setStartSearch} />
        </div>
        <div style={{ width: containerWidth, height: containerHeight, flexShrink: 0 }} className='text-center h-fit'>
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