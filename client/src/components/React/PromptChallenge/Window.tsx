import React from 'react'
import { useRef, useState, useEffect } from "react";
import { WindowProps } from "@/env"
import { AnimatePresence, motion } from "framer-motion";
import StepWizard from '../StepWizard/StepWizard';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4'
import SearchBox from './SearchBox';


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

  // console.log({ 'HeroWindow Width: ': containerWidth, 'HeroWindow Height: ': containerHeight })

  return (
    <section
      ref={containerRef}
      className="col-span-6 overflow-hidden relative max-h-[45rem] w-full animate-fade-in delay-300">
      <div
        style={{ width: containerWidth }}
        className="w-full flex justify-center items-center"
      >
        <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>

      <motion.div
        className="flex items-baseline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -currentStep * containerWidth }}
        transition={{ type: 'tween', duration: 0.3 }}>

        <div style={{ width: containerWidth, height: containerHeight, flexShrink: 0 }} className='text-center h-fit box-border flex top-0 self-start'>
          <Step1
            containerWidth={containerWidth}
            origin={origin}
            setOrigin={setOrigin} />
        </div>
        <div style={{ width: containerWidth, height: containerHeight, flexShrink: 0 }} className='h-fit text-center flex grow'>
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

      </motion.div>
    </section>
  )
}