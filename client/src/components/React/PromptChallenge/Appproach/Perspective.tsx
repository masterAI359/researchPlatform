import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChangeEvent, ReactHTMLElement, useRef, useState } from "react"
import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import HelpButton from "../../Buttons/Question"
import { Step2Help } from "@/helpInfo/help"



//TODO: add state that will describe the users point of view here 

export default function Perspective({ setOrigin, origin, setGettingHelp }: any) {
  const animationRef = useRef(null)

  const assignOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetDiv = e.target as HTMLDivElement
    setOrigin(targetDiv.getAttribute('data-set'))
    animationRef.current.play()

  }

  const opinions: string[] = [
    "My Opinion",
    "Opposing Opinion",
    "Just Curious"
  ]

  const expertise: string[] = [
    "New to the Topic",
    "Familiar",
    "Area of Expertise"
  ]

  const passion: string[] = [
    "Neutral",
    "Lukewarm",
    "Passionate",
  ]

  return (
    <div
      className="lg:w-full lg:h-full content-center mx-auto box-border flex flex-col justify-center my-auto">

      <header className="w-full h-auto mx-auto border-b border-white/10 xl:mb-8 flex gap-x-8 items-baseline">
        <h1 className="text-white xl:text-3xl font-light tracking-tight mb-2 text-left">
          Before we dive in <span className="text-zinc-500">define your angle of approach</span>
        </h1>
        <div className="w-fit">
          <HelpButton info={Step2Help} setGettingHelp={setGettingHelp} />

        </div>
      </header>
      <div className="flex w-full mx-auto justify-between">
        <motion.div
          className="flex flex-col gap-y-2 items-center text-center my-auto"
        >
          <header className="w-full">
            <h1 className="text-xl font-light tracking tight text-slate-400 mb-2">Perspective to Examine</h1>
          </header>
          {opinions.map((opinion) => (
            <motion.div
              className=""
              key={opinion}
            >
              <div
                ref={animationRef}
                className="bg-white/10 text-white lg:text-lg font-light tracking-tight xs:text-xs rounded-lg lg:w-[15rem] md:w-[12rem] md:h-12 xs:w-auto xs:h-auto
               cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 grow-0 gap-5"
                data-set={opinion}
                onClick={(e) => { assignOrigin(e) }}
              >{opinion}
                <div className="h-10 w-10 relative z-0 flex items-center justify-center">
                  {origin === opinion ? <Lottie className="box-content" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} /> : (
                    <div className="h-5 w-5 bg-white/30 box-content rounded-full"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col gap-y-2 items-center text-center my-auto">
          <header className="w-full">
            <h1 className="text-xl font-light tracking tight text-slate-400 mb-2">Prior Knowledge</h1>
          </header>
          {expertise.map((item) => (
            <motion.div
              key={item}
              className=""
            >
              <div
                ref={animationRef}
                className="bg-white/10 text-white lg:text-lg font-light tracking-tight xs:text-xs rounded-lg lg:w-[15rem] md:w-[12rem] md:h-12 xs:w-auto xs:h-auto
               cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 grow-0 gap-5"
                data-set={item}
                onClick={(e) => { assignOrigin(e) }}
              >{item}
                <div className="h-10 w-10 relative z-0 flex items-center justify-center">
                  {item === origin ? <Lottie className="box-content" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} /> : (
                    <div className="h-5 w-5 bg-white/30 box-content rounded-full"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col gap-y-2 items-center text-center my-auto">
          <header className="w-full border-b border-white/10">
            <h1 className="text-xl font-light tracking tight text-slate-400 mb-2">Emotional Investment</h1>
          </header>
          {passion.map((item) => (
            <motion.div
              key={item}
              className=""
            >
              <div
                ref={animationRef}
                className="bg-white/10 text-white lg:text-lg font-light tracking-tight xs:text-xs rounded-lg lg:w-[15rem] md:w-[12rem] md:h-12 xs:w-auto xs:h-auto
               cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 grow-0 gap-5"
                data-set={item}
                onClick={(e) => { assignOrigin(e) }}
              >{item}
                <div className="h-10 w-10 relative z-0 flex items-center justify-center">
                  {item === origin ? <Lottie className="box-content" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} /> : (
                    <div className="h-5 w-5 bg-white/30 box-content rounded-full"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}