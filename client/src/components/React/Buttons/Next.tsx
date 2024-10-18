import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ButtonProps {
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  canProceed: boolean
  setCanProceed: Function
}


export default function NextButton({ setCurrentStep, currentStep, setCanProceed, canProceed }: ButtonProps) {


  const handleNextStep = () => {

    if (currentStep <= 3) {
      setCurrentStep(currentStep => currentStep + 1)
    } else if (currentStep === 1) {
      setCurrentStep(currentStep => currentStep + 2)
    } else {
      return currentStep
    }
  }

  const checkRequirements = (e: React.MouseEvent) => {

    while (canProceed === false) {
      return currentStep
    }

    if (canProceed === true) {
      handleNextStep()
    }
  }


  return (
    <AnimatePresence>
      {currentStep <= 3 && <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="col-span-1 justify-self-end self-center"
      >
        <button
          onClick={(e) => checkRequirements(e)}
          className="text-white
          lg:w-20 lg:h-12 p-2 transition-all mx-auto
          duration-200 bg-white/5 hover:bg-white/10 hover:scale-110 flex items-center group
          rounded-2xl">
          <span className="mx-auto">
            <svg
              className="text-white group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px">
              <path
                d="M 34.484375 11.984375 A 1.50015 1.50015 0 0 0 33.439453
                14.560547 L 40.878906 22 L 3.5 22 A 1.50015 1.50015 0 1 0 
                3.5 25 L 40.878906 25 L 33.439453 32.439453 A 1.50015 1.50015 
                0 1 0 35.560547 34.560547 L 45.560547 24.560547 A 1.50015 
                1.50015 0 0 0 45.560547 22.439453 L 35.560547 12.439453 A 
                1.50015 1.50015 0 0 0 34.484375 11.984375 z"
                fill="currentColor" />
            </svg>
          </span>
        </button>
      </motion.div>}

    </AnimatePresence>

  )
}