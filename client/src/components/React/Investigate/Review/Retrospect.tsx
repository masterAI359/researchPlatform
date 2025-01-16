import { useDispatch, useSelector } from "react-redux"
import { finalPerspective } from "@/ReduxToolKit/Reducers/Review"
import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import { RootState } from "@/ReduxToolKit/store"


const opinions: string[] = [
    "Agree",
    "Disagree",
    "Just Curious"
]

export default function Retrospect() {
    const dispatch = useDispatch()
    const perspective = useSelector((state: RootState) => state.review.endingPerspective)

    console.log(perspective)

    return (

        <div className="w-full h-full flex flex-col gap-y-2">
            {opinions.map((opinion, index) => (
                <div className="relative">
                    <div
                        key={index}
                        onClick={() => dispatch(finalPerspective(opinion))}
                        className="bg-white/10 text-white xl:text-lg lg:text-[0.8rem] xs:text-[0.6rem] font-light tracking-tight
              rounded-lg xl:w-60 xl:h-16 lg:w-[12rem] md:w-[12rem] md:h-12 xs:w-28 xs:h-9
               cursor-pointer hover:bg-white/20 flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3"
                    >
                        {opinion}
                        <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 
                  xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                            {perspective === opinion ? <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5"
                                animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                                : (
                                    <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-white/30 box-content rounded-full  absolute xs:right-1"></div>

                                )}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}