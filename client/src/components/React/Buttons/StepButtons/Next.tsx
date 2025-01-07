import React from "react";
import type { RootState } from '@/ReduxToolKit/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementBy } from "@/ReduxToolKit/Reducers/Steps";
import { AnimatePresence, motion } from "framer-motion";

interface ButtonProps {
  canProceed: boolean
  setCanProceed: Function,
  setNotifyRequired: Function,
  notifyRequired: boolean,
  gettingHelp: boolean
}

export default function NextButton({ setCanProceed, canProceed, setNotifyRequired, notifyRequired, gettingHelp }: ButtonProps) {
  const step = useSelector((state: RootState) => (state.stepper.step))
  const dispatch = useDispatch()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'tween', duration: 0.2 }}
      className={`relative h-auto w-auto justify-self-end self-center ${step >= 4 || gettingHelp ? 'pointer-events-none' : 'pointer-events-auto'}`}
    >
      <button
        onClick={() => dispatch(increment())}
        className="text-white text-md font-light xs:w-14 xs:h-8
          lg:w-20 lg:h-12 p-2 transition-all mx-auto
          duration-200 bg-white/5 hover:bg-white/10 items-center group
          rounded-2xl">
        <span className="mx-auto flex items-center justify-center">
          <svg
            className={`text-white group-hover:text-white ${step >= 4 ? 'opacity-50' : null}`}
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
    </motion.div>
  )
}

// onClick={gettingHelp === false ? (e) => checkRequirements(e) : null}