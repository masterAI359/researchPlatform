import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useRef, useState } from "react"
import Lottie from 'react-lottie';
import checkMark from '../../../lotties/checkMark.json'

interface lottieTypes {
  loop: boolean,
  autoplay: boolean,
  animationData: any
  rendererSettings: object
}

const defaultOptions: lottieTypes = {
  loop: false,
  autoplay: true,
  animationData: checkMark,
  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
}

export default function Perspective({ setOrigin, origin }: any) {
  const animationRef = useRef(null)

  const assignOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetDiv = e.target as HTMLDivElement
    setOrigin(targetDiv.getAttribute('data-set'))

  }



  return (
    <div
      className="grid-cols-1 justify-center w-fit h-[14rem]">

      <div className="lg:mb-3">
        <header className="text-xl text-center text-zinc-200">Point of view</header>
      </div>

      <motion.div
        className="grid-cols-1 gap-2 items-center text-center"
      >
        <motion.div
          className="mb-1"
          key="My Opinion"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-black relative flex justify-between items-center px-2 grow-0 gap-5 z-1"
            data-set="My Opinion"
            onClick={(e) => { assignOrigin(e) }}
          > <p className="text-white justify-self-start pl-3">My Opinion</p>
            <div>
              {origin === "My Opinion"
                ? <Lottie
                  options={defaultOptions}
                ></Lottie>
                : ''}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mb-1"
          key="Opposing Opinion"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-black relative flex justify-between items-center px-2 grow-0 gap-5 z-1"
            data-set="Opposing Opinion"
            onClick={(e) => { assignOrigin(e) }}
          ><p className="text-white justify-self-start pl-3">Opposing Opinion</p>
            <div>
              {origin === "Opposing Opinion"
                ? <Lottie
                  options={defaultOptions}
                ></Lottie>
                : ''}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mb-1"
          key="Just Curious"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-black relative flex justify-between items-center px-2 grow-0 gap-5 z-1"
            data-set="Just Curious"
            onClick={(e) => { assignOrigin(e) }}
          ><p className="text-white justify-self-start pl-3">Just Curious</p>
            <div>
              {origin === "Just Curious"
                ? <Lottie
                  options={defaultOptions}
                ></Lottie>
                : ''}
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  )
}