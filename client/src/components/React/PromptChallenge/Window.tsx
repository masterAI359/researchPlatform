import React from 'react'
import { useRef, useState, useEffect } from "react";
import { WindowProps } from "@/env"
import { AnimatePresence, motion } from "framer-motion";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4'
import SearchBox from './SearchBox';


export default function HeroWindow ({ currentStep, setStartSearch, setQuery, isLoading, query, setIsSubmitted }: WindowProps) {
const containerRef = useRef<HTMLDivElement>(null);
const [containerWidth, setContainerWidth] = useState(0);
const [origin, setOrigin] = useState<string>('')


    useEffect(() => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth);
        }
        // Recalculate on window resize
        const handleResize = () => {
          if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
          }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
    console.log({ 'HeroWindow Width: ': containerWidth})

    return (
    <section 
    ref = {containerRef}
    className="col-span-6
    overflow-hidden relative max-h-[40.5rem] pb-20 w-full animate-fade-in delay-300">

      <motion.div
      className="flex justify-start"
      animate = {{ x: -currentStep * containerWidth }}
      transition={{ type: 'tween', duration: 0.3 }}>

        <div style={{ maxWidth: containerWidth, flexShrink: 0 }} className='text-center'>
        <Step1 
            containerWidth = {containerWidth}
            origin = {origin}
            setOrigin = {setOrigin}/>
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center'>
        <Step2 containerWidth = {containerWidth}/>
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center'>
        <Step3 containerWidth = {containerWidth} setStartSearch = {setStartSearch}/>
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center'>
        <Step4  setStartSearch = {setStartSearch}/>
        </div>
        <div style={{ width: containerWidth, flexShrink: 0 }} className='text-center'>
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