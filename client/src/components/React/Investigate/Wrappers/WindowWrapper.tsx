import { useRef, useState, useLayoutEffect } from "react";
import { WindowProps } from "@/env";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from '@/ReduxToolKit/store'
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";


export default function WindowWrapper({ }: WindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { stepper } = investigateState
  const { step } = stepper


  return (
    <section
      ref={containerRef}
      className="relative xs:h-fit md:min-h-full 
      mx-auto xs:min-w-full xs:max-w-full xl:min-w-168 xl:w-3/4 xs:mb-4 2xl:mt-6
      transition-all duration-400 animate-fade-in delay-300 no-scrollbar box-border flex shrink-0">
      <div
        style={{ maxHeight: "fit" }}
        className="flex xs:items-center 2xl:items-baseline
        min-w-full xs:h-fit md:min-h-full lg:max-h-fit">
        <AnimatePresence mode="popLayout">
          {step === 0 && <motion.div
            layout
            key={"Step1"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: 'tween', duration: 0.2, delay: 0.2 }
            }}
            exit={{
              opacity: 0,
              transition: { type: 'tween', duration: 0.2 }
            }}
            className="min-w-full"
          >
            <Step1 containerWidth={containerWidth} />
          </motion.div>}

          {step === 1 && <motion.div
            layout
            key={"Step2"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: 'tween', duration: 0.2, delay: 0.2 }
            }}
            exit={{
              opacity: 0,
              transition: { type: 'tween', duration: 0.2 }
            }}
            className="min-w-full"
          >
            <Step2 containerWidth={containerWidth} />
          </motion.div>}

          {step === 2 && <motion.div
            layout
            key={"Step3"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: 'tween', duration: 0.2, delay: 0.2 }
            }}
            exit={{
              opacity: 0,
              transition: { type: 'tween', duration: 0.2 }
            }}
            className="min-w-full shrink-0"
          >
            <Step3 containerWidth={containerWidth} />
          </motion.div>}

          {step === 3 && <motion.div
            layout
            key={"Step4"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: 'tween', duration: 0.2, delay: 0.2 }
            }}
            exit={{
              opacity: 0,
              transition: { type: 'tween', duration: 0.2 }
            }}
            className="min-w-full shrink-0"
          >
            <Step4 containerWidth={containerWidth} />
          </motion.div>}

          {step === 4 && <motion.div
            layout
            key={"Step5"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: 'tween', duration: 0.2, delay: 0.2 }
            }}
            exit={{
              opacity: 0,
              transition: { type: 'tween', duration: 0.2 }
            }}
            className="min-w-full shrink-0"
          >
            <Step5 containerWidth={containerWidth} />
          </motion.div>
          }

        </AnimatePresence>
      </div>




    </section>
  )
}