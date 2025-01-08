import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import HelpButton from "../../Buttons/Question"
import { Step2Help } from "@/helpInfo/help"
import { getPerspective, getExpertise } from "@/ReduxToolKit/Reducers/UserPOV"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function Step2({ setOrigin, origin, setGettingHelp }: any) {
  const [pov, setPov] = useState<string>(null)
  const [knowledge, setKnowledge] = useState<string>(null)
  const perspective = useSelector((state: RootState) => state.pov.perspective)
  const userExpertise = useSelector((state: RootState) => state.pov.expertise)
  const dispatch = useDispatch()

  const animationRef = useRef(null)

  const assignOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetDiv = e.target as HTMLDivElement
    setPov(targetDiv.getAttribute('data-set'))
    //animationRef.current.play()
    dispatch(getPerspective(pov))

  }

  const assignKnowledge = (e: React.MouseEvent<HTMLDivElement>) => {
    const divTarget = e.target as HTMLDivElement;
    setKnowledge(divTarget.getAttribute('data-set'))
    dispatch(getExpertise(knowledge))
  }

  useEffect(() => {

    console.log({ "Point of view": perspective }, { "Expertise": userExpertise })

  }, [pov, knowledge])


  const opinions: string[] = [
    "My Opinion",
    "Disagree",
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
      className="min-w-full lg:h-full content-center mx-auto box-border flex flex-col justify-center my-auto md:px-0">

      <header className="w-full h-auto mx-auto border-b border-white/10 xs:mb-2 xl:mb-4 flex md:gap-x-8 xs:gap-x-0 items-baseline">
        <h1 className="text-white 2xl:text-3xl md:text-2xl xs:text-md font-light tracking-tight xs:mb-1 md:mb-2 text-left xs:w-2/3 md:w-auto">
          Before we dive in <span className="text-zinc-500">define your angle of approach</span>
        </h1>
        <div className="w-fit self-end xs:mb-5 md:mb-4">
          <HelpButton info={Step2Help} setGettingHelp={setGettingHelp} />

        </div>
      </header>
      <div className="w-full flex items-center xl:mt-12">

        <div className="flex w-fit mx-auto xs:gap-x-16 xl:gap-x-36 box-border">
          <motion.div
            className="flex flex-col md:gap-y-2 xs:gap-y-1 items-center text-center my-auto"
          >
            <header className="w-full">
              <h1 className="xl:text-xl xs:text-xs  font-light tracking tight text-slate-400 mb-2">Your Perspective</h1>
            </header>
            {opinions.map((opinion) => (
              <motion.div
                className="relative"
                key={opinion}
              >
                <div
                  ref={animationRef}
                  className="bg-white/10 text-white xl:text-lg lg:text-[0.8rem] xs:text-[0.6rem] font-light tracking-tight
              rounded-lg xl:w-60 xl:h-16 lg:w-[12rem] md:w-[12rem] md:h-12 xs:w-28 xs:h-9
               cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3"
                  data-set={opinion}
                  onClick={(e) => { assignOrigin(e) }}
                >
                  {opinion}
                  <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                    {opinion === pov ? <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} /> : (
                      <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-white/30 box-content rounded-full  absolute xs:right-1"></div>

                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col md:gap-y-2 xs:gap-y-1 items-center text-center my-auto">
            <header className="w-full">
              <h1 className="xl:text-xl xs:text-xs font-light tracking tight text-slate-400 mb-2">Prior Knowledge</h1>
            </header>
            {expertise.map((item) => (
              <motion.div
                key={item}
                className="relative"
              >
                <div
                  ref={animationRef}
                  className="bg-white/10 text-white xl:text-lg lg:text-[0.8rem] xs:text-[0.6rem] font-light tracking-tight
              rounded-lg xl:w-60 xl:h-16 lg:w-[12rem] md:w-[12rem] md:h-12 xs:w-28 xs:h-9
               cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3"
                  data-set={item}
                  onClick={(e) => { assignKnowledge(e) }}
                >{item}
                  <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                    {item === knowledge ? <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} /> : (
                      <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-white/30 box-content rounded-full  absolute xs:right-1"></div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </div>
  )
}