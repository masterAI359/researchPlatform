import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step3Help } from "@/helpInfo/help"
import { getBiases } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import Biases from "./StepComponents/Biases"

export default function Step2({ containerWidth }: any) {
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
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='xs:w-full snap-center snap-always
    text-center mx-auto h-full box-border flex xs:px-2 basis-full'>
      <div
        className="min-w-full lg:h-full content-center mx-auto box-border flex flex-col justify-center my-auto md:px-0">
        <div className="w-full h-auto border-b border-white/10 mb-4">
          <header className="w-auto h-auto mx-auto mb-1 2xl:mb-2 flex gap-x-8 items-center">
            <h1 className="text-white text-nowrap 2xl:text-3xl md:text-2xl sm:text-xl xs:text-md font-light tracking-tight text-left w-auto sm:w-auto">
              Acknowledge biases
            </h1>
            <div className="w-fit self-center">
              <HelpButton info={Step3Help} />

            </div>
          </header>
        </div>

        <div className="w-full flex items-center justify-center sm:h-52 md:h-full">

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


      </div>
    </div>
  )
}


