import { useDispatch, useSelector } from "react-redux"
import { finalPerspective } from "@/ReduxToolKit/Reducers/Review"
import Lottie from "lottie-react"
import blueCheck from '../../../../lotties/blueCheck.json'
import { RootState } from "@/ReduxToolKit/store"

const opinions: string[] = [
    "Agree",
    "Disagree",
    "Neutral"
]

export default function Retrospect() {
    const dispatch = useDispatch()
    const perspective = useSelector((state: RootState) => state.review.endingPerspective)

    console.log(perspective)

    return (

        <div className="w-full h-full flex flex-col mx-auto gap-y-2">
            <header className="w-auto mx-auto mb-4">
                <h1 className="text-white font-light text-xl">
                    What's your perspective now?
                </h1>
            </header>
            {opinions.map((opinion: string, index: number) => (
                <div key={index} className="relative">
                    <div
                        key={opinion}
                        onClick={() => dispatch(finalPerspective(opinion))}
                        className="bg-white text-black xl:text-lg lg:text-[0.8rem] xs:text-[0.6rem]
              rounded-lg xl:w-52 xl:h-12 lg:w-[12rem] md:w-[12rem] md:h-12 xs:w-28 xs:h-9 relative
               cursor-pointer hover:bg-white/10 hover:text-white transition-all duration-200 ease-in-out
                flex justify-between items-center xs:px-2 grow-0 gap-3 mx-auto group"
                    >
                        {opinion}
                        <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 
                  xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                            {perspective === opinion ? <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5"
                                animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                                : (
                                    <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4
                                     xs:min-w-4 xs:min-h-4 bg-black/30 box-content rounded-full  absolute xs:right-1
                                     group-hover:bg-white/10 transition-all duration-200 ease-in-out"></div>

                                )}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}