import blueCheck from '../../../../lotties/blueCheck.json'
import Lottie from 'lottie-react'

export default function LoggedInSuccessfully() {


    return (
        <div className='lg:min-h-10 lg:min-w-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 
                  xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7'>
            <Lottie className="box-content absolute xs:right-0 xl:translate-x-1.5"
                animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
        </div>
    )
}