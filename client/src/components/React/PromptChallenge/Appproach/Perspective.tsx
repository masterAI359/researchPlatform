import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useRef, useState } from "react"
import Lottie from "lottie-react"
import checkMark from '../../../../lotties/checkMark.json'
import blueCheck from '../../../../lotties/blueCheck.json'



export default function Perspective({ setOrigin, origin }: any) {
  const animationRef = useRef(null)

  const assignOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetDiv = e.target as HTMLDivElement
    setOrigin(targetDiv.getAttribute('data-set'))

  }



  return (
    <div
      className="w-fit h-[14rem]">

      {/* <div className="lg:mb-3">
        <header className="text-xl text-center text-zinc-200">Point of view</header>
      </div> */}

      <motion.div
        className="flex flex-col gap-y-2 items-center text-center"
      >
        <motion.div
          className=""
          key="My Opinion"
        >
          <div
            className="bg-white/10 text-white rounded-lg lg:w-[15rem] md:w-[12rem] h-12 
                        cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 grow-0 gap-5"
            data-set="My Opinion"
            onClick={(e) => { assignOrigin(e) }}
          >My Opinion
            <div className="h-10 w-10 relative z-0">
              {origin === "My Opinion" && <Lottie animationData={blueCheck} loop={false} autoPlay={true} style={{ height: "100%", width: "100%", position: "relative" }} />}
            </div>
          </div>
        </motion.div>
        <motion.div
          className=""
          key="Opposing Opinion"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 grow-0 gap-5"
            data-set="Opposing Opinion"
            onClick={(e) => { assignOrigin(e) }}
          >Opposing Opinion
            <div className="h-10 w-10 relative">
              {origin === "Opposing Opinion" && <Lottie animationData={blueCheck} loop={false} autoPlay={true} style={{ height: "100%", width: "100%" }} />}
            </div>
          </div>
        </motion.div>
        <motion.div
          className=""
          key="Just Curious"
        >
          <div
            className="bg-white/10 text-white rounded-lg w-[15rem] h-12 
                        cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 grow-0 gap-5"
            data-set="Just Curious"
            onClick={(e) => { assignOrigin(e) }}
          >Just Curious
            <div className="h-10 w-10 relative">
              {origin === "Just Curious" && <Lottie animationData={blueCheck} loop={false} autoPlay={true} style={{ height: "100%", width: "100%" }} />}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}