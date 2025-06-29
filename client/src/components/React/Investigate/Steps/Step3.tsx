import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import HelpButton from "../../Buttons/HelpButtons/Question"
import { Step3Help } from "@/helpInfo/help"
import { getBiases } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

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

        <div className="w-full flex items-center sm:h-52 md:h-full">

          <div className="flex w-fit mx-auto xs:gap-x-16 xl:gap-x-36 box-border">
            <div
              className="flex flex-col md:gap-y-4 xs:gap-y-1 items-center text-center my-auto"
            >
              <header className="w-full">
                <h1 className="2xl:text-xl xl:text-lg lg:text-base md:text-sm md:text-left text-xs  font-light tracking tight text-slate-400 mb-2">I would describe my feelings towards the idea as ...</h1>
              </header>
              {opinions.map((opinion) => (
                <div
                  className="relative"
                  key={opinion}
                >
                  <div
                    className={`bg-white/10 lg:text-base lg:text-[0.8rem] text-xs sm:text-sm tracking-tight
                                rounded-4xl w-72 lg:w-96 lg:h-14 h-11 2xl:min-w-128 2xl:max-w-128 2xl:h-16 xl:h-14 xl:min-w-96
                                cursor-pointer md:hover:bg-white/20 md:hover:text-white transition-all duration-200 ease-in-out
                                flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3
                                ${biases === null && 'text-white'}
                                ${biases && opinion === biases && 'text-white'}
                                ${biases && opinion !== biases && 'text-zinc-500'}
                                `}
                    data-set={opinion}
                    onClick={(e) => getPOV(e)}
                  >
                    {opinion}
                    <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:p-0.5 
                  xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                      {opinion === biases ? <Lottie className="box-content absolute right-0 translate-x-0.5 xl:translate-x-1.5"
                        animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                        : (
                          <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-black/40 box-content rounded-full  absolute xs:right-1"></div>

                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}


