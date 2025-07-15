import { getBiases } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import Biases from "./StepComponents/Biases"
import { motion } from "framer-motion"
import { variants } from "@/motion/variants"

export default function Step2() {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { pov } = investigateState
  const { biases } = pov
  const dispatch = useDispatch()

  const getPOV = (e: React.MouseEvent<HTMLDivElement>) => {

    const targetDiv = e.target as HTMLDivElement
    dispatch(getBiases(targetDiv.getAttribute('data-set')))
  }

  const opinions: string[] = [
    "Inclined to believe the idea",
    "Inclined to not believe/disprove the idea",
    "Don't have an opinion on the idea"
  ]

  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate='open'
      exit='closed'
      transition={{ type: 'tween', duration: 0.2 }}
      className='max-w-full absolute inset-0
    flex flex-col justify-center items-center xs:px-2 basis-full'>

      <div className="w-full flex items-center justify-center h-auto md:h-full">

        <div className="flex w-fit items-center justify-center xs:gap-x-16 xl:gap-x-36 box-border">
          <div
            className="flex flex-col md:gap-y-4 xs:gap-y-1 items-center justify-center text-center my-auto"
          >
            <header className="w-full">
              <h1 className="2xl:text-xl xl:text-lg lg:text-base md:text-sm md:text-left text-xs  font-light tracking tight text-slate-400 mb-2">I would describe my feelings towards the idea as ...</h1>
            </header>
            {opinions.map((opinion) => (
              <Biases key={opinion} opinion={opinion} biases={biases} getPOV={getPOV} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


