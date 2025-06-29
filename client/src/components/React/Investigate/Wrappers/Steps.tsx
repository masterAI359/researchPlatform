import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from '@/ReduxToolKit/store'
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";


export default function Steps({ }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { stepper } = investigateState
  const { step } = stepper


  return (
    <section
      ref={containerRef}
      className="relative h-[16.5rem] lg:h-88 xl:h-96 2xl:w-168 xl:w-[36rem] lg:w-[33rem] md:w-[29rem] md:h-80 sm:h-72 rounded-4xl bg-ebony/50 shadow-inset p-4 shrink-0
      mx-auto max-w-full sm:w-[27rem] mb-4 md:mb-0
      transition-all duration-400 animate-fade-in delay-300 no-scrollbar box-border flex">
      <div
        style={{ maxHeight: "fit" }}
        className="flex items-center 2xl:items-baseline h-fit
        w-full sm:mx-auto sm:h-60 md:h-fit md:min-h-full lg:max-h-fit">
        <AnimatePresence mode="wait">
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
            className="min-w-full min-h-full max-w-full shrink-0"
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
            className="min-w-full min-h-full shrink-0"
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
            className="w-full shrink-0"
          >
            <Step5 containerWidth={containerWidth} />
          </motion.div>
          }

        </AnimatePresence>
      </div>




    </section>
  )
}