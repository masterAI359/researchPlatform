import { useRef, useState, useLayoutEffect } from "react";
import { WindowProps } from "@/env";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from '@/ReduxToolKit/store'
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";


export default function WindowWrapper({ }: WindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const step = useSelector((state: RootState) => state.stepper.step)


  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);

    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);



  return (
    <section
      ref={containerRef}
      className="overflow-x-hidden overflow-y-hidden relative xs:h-fit md:min-h-full h-fit 
      mx-auto xs:min-w-full xs:max-w-full xl:min-w-168 xl:w-11/12 xs:mb-4 
      transition-all duration-400 animate-fade-in delay-300 no-scrollbar box-border">
      <motion.div
        ref={wizardRef}
        style={{ maxHeight: "fit" }}
        className="flex xs:items-center md:items-baseline w-full xs:h-fit md:min-h-full lg:max-h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: -step * containerWidth }}
        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}>

        <Step1 containerWidth={containerWidth} />
        <Step2 containerWidth={containerWidth} />
        <Step3 containerWidth={containerWidth} />
        <Step4 containerWidth={containerWidth} />
        <Step5 containerWidth={containerWidth} />



      </motion.div>
    </section>
  )
}