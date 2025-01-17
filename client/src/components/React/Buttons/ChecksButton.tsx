import { useRef } from "react"
import Lottie from "lottie-react"
import blueCheck from '../../../lotties/blueCheck.json'
import { useDispatch } from "react-redux"


export default function ChecksButton({ index, button, answer, setterFunction }) {
    const animationRef = useRef<any>(null)
    const dispatch = useDispatch()



    return (
        <button
            onClick={() => dispatch(setterFunction(button))}
            key={index}
            data-set={button}
            className="flex items-center relative px-2 text-black hover:text-white
                 xs:w-28 xs:h-9 lg:w-32 lg:h-12 2xl:p-2 2xl:h-12 2xl:w-36 cursor-pointer bg-white hover:bg-white/5 
                  text-white rounded-lg transition-all duration-200 ease-inout group
                 "> {button === true
                ? <p className="text-black group-hover:text-white xs:text-md 2xl:text-lg">Yes</p>
                : <p className="text-black group-hover:text-white xs:text-md 2xl:text-lg">No</p>}
            <div
                className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5
             xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 
             flex items-center justify-center">
                {answer === button ? <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%" }} /> : (
                    <div
                        className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 
                    xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4  xs:right-1
                    bg-black group-hover:bg-white/20 box-content rounded-full absolute "></div>

                )}
            </div>
        </button>
    )
}