import { useState, useRef, useEffect } from "react"
import Lottie from "lottie-react"
import blueCheck from '../../../lotties/blueCheck.json'



export default function ChecksButton({ index, buttonValue, setterFunction, answer }) {
    const [play, setPlay] = useState<boolean>(false)
    const animationRef = useRef<any>(null)

    const setAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetButton = e.target as HTMLButtonElement
        setterFunction(targetButton.getAttribute('data-set'))

        setPlay(true)

        if (animationRef.current) {
            animationRef.current.play()
        }
    }


    return (
        <button
            key={index}
            onClick={(e) => { setAnswer(e) }}
            data-set={buttonValue}
            className="flex items-center relative px-2
                 xs:w-28 xs:h-9 cursor-pointer bg-white/10 hover:bg-white/20 
                  text-white rounded-lg
                 "> {buttonValue === true ? <p className="text-white xs:text-md">Yes</p> : <p className="text-white xs:text-md">No</p>}
            <div className="lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                {play ? <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5" lottieRef={animationRef} animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%" }} /> : (
                    <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-white/30 box-content rounded-full  absolute xs:right-1"></div>

                )}
            </div>
        </button>
    )
}