import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step2Help } from "@/helpInfo/help"
import { getPerspective, getExpertise } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import Perspective from "./StepComponents/Perspective"
import Expertise from "./StepComponents/Expertise"

export default function Step2({ containerWidth }: any) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { pov } = investigateState
  const { expertise, perspective } = pov
  const dispatch = useDispatch()

  const getPOV = (e: React.MouseEvent<HTMLDivElement>) => {

    const targetDiv = e.target as HTMLDivElement
    dispatch(getPerspective(targetDiv.getAttribute('data-set')))
  }

  const assignKnowledge = (e: React.MouseEvent<HTMLDivElement>) => {
    const divTarget = e.target as HTMLDivElement;
    dispatch(getExpertise(divTarget.getAttribute('data-set')))
  }

  const opinions: string[] = [
    "Agree",
    "Disagree",
    "Neutral"
  ]

  const expertiseArray: string[] = [
    "New to the Topic",
    "Familiar",
    "Area of Expertise"
  ]

  return (
    <div style={{ flexShrink: 0, maxWidth: containerWidth }}
      className='w-full snap-center snap-always
    text-center mx-auto min-h-full box-border flex xs:px-2 basis-full'>
      <div
        className="min-w-full lg:h-full content-center mx-auto box-border flex flex-col justify-center my-auto md:px-0">
        <div className="w-full h-auto border-b border-white/10">
          <header className="w-full h-auto mx-auto mb-1 2xl:mb-2 flex sm:gap-x-8 xs:gap-x-0 items-center">
            <h1 className="text-white 2xl:text-3xl md:text-2xl sm:text-xl xs:text-md font-light tracking-tight text-left w-2/3 sm:w-auto">
              Your angle of approach
            </h1>
            <div className="w-fit self-center">
              <HelpButton info={Step2Help} />

            </div>
          </header>
        </div>

        <div className="w-full flex items-center h-full xl:py-6">

          <div className="grid grid-cols-2 justify-between items-center w-full box-border">
            <div
              className="flex flex-col md:gap-y-2 xs:gap-y-1 items-center text-center my-auto"
            >
              <header className="w-full">
                <h1 className="2xl:text-2xl xl:text-xl md:text-sm text-center text-xs  font-light tracking tight text-slate-400 mb-2">Your Perspective</h1>
              </header>
              {opinions.map((opinion) => (
                <Perspective opinion={opinion} perspective={perspective} getPOV={getPOV} />
              ))}
            </div>

            <div className="flex flex-col md:gap-y-2 xs:gap-y-1 items-center text-center my-auto">
              <header className="w-full">
                <h1 className="2xl:text-2xl xl:text-xl md:text-sm text-center text-xs font-light tracking tight text-slate-400 mb-2">Prior Knowledge</h1>
              </header>
              {expertiseArray.map((item) => (
                <Expertise item={item} expertise={expertise} assignKnowledge={assignKnowledge} />
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}