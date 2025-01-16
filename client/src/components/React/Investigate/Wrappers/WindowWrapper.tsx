import { useRef, useState, useLayoutEffect } from "react";
import { WindowProps } from "@/env";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from '@/ReduxToolKit/store'
import Slide1 from "./Slider/Slide1";
import Slide2 from "./Slider/Slide2";
import Slide3 from "./Slider/Slide3";
import Slide4 from "./Slider/Slide4";
import Slide5 from "./Slider/Slide5";


export default function WindowWrapper({ setCanProceed, notifyRequired, setNotifyRequired }: WindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [origin, setOrigin] = useState<string>('');
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

        <Slide1
          containerWidth={containerWidth}
          setOrigin={setOrigin}
          setNotifyRequired={setNotifyRequired}
          notifyRequired={notifyRequired}
          origin={origin}
          setCanProceed={setCanProceed}
        />
        <Slide2
          containerWidth={containerWidth}
          setOrigin={setOrigin}
        />
        <Slide3
          containerWidth={containerWidth}
        />
        <Slide4
          containerWidth={containerWidth}
        />
        <Slide5
          containerWidth={containerWidth}
        />

      </motion.div>
    </section>
  )
}