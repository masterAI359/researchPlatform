import { MutableRefObject, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";


interface ButtonProps {

    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
    
  }


export default function BackButton ({ setCurrentStep, currentStep }: ButtonProps) {

const handleBackStep = () => {
    setCurrentStep(currentStep => currentStep - 1)
}

    return (
<button
onClick={handleBackStep}
className={`col-span-1 justify-self-start self-center text-zinc-400 
lg:w-20 mx-auto lg:h-12 p-2 transition-all 
duration-200 bg-white/5 hover:bg-white/10 hover:scale-110 flex items-center group
rounded-2xl ${currentStep === 0 ? 'pointer-events-none opacity-50' : ''}`}>
    <span className="mx-auto">
    <svg 
      className={`${currentStep === 0 ? 'text-zinc-400' : 'text-white'}`}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48" 
      width="20px" 
      height="20px">
        <path 
        d="M 13.470703 12.986328 A 1.50015 1.50015 0 0 0 12.439453 13.439453
        L 2.4394531 23.439453 A 1.50015 1.50015 0 0 0 2.4394531 25.560547 L 
        12.439453 35.560547 A 1.50015 1.50015 0 1 0 14.560547 33.439453 L 
        7.1210938 26 L 44.5 26 A 1.50015 1.50015 0 1 0 44.5 23 L 7.1210938 23 
        L 14.560547 15.560547 A 1.50015 1.50015 0 0 0 13.470703 12.986328 z" 
        fill="currentColor" /></svg>
    </span>
</button>
    )
}