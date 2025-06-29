import Lottie from "lottie-react"
import blueCheck from '../../../../../lotties/blueCheck.json';

export default function Perspective({ perspective, opinion, getPOV }) {


    return (
        <div
            className="relative"
            key={opinion}
        >
            <div
                className={`bg-white/10 xl:text-lg lg:text-[0.8rem] text-xs sm:text-sm tracking-tight
              rounded-4xl 2xl:w-60 xl:w-52 2xl:h-16 xl:h-14 lg:w-[12rem] md:w-[12rem] md:h-12 sm:w-40 sm:h-11 w-32 h-10
               cursor-pointer md:hover:bg-white/20 md:hover:text-white transition-all duration-200 ease-in-out
                flex justify-between items-center lg:px-4 xs:px-2 grow-0 gap-3
                ${perspective === null && 'text-white'}
                ${perspective !== null && perspective === opinion && 'text-white'}
                ${perspective !== null && perspective !== opinion && 'text-zinc-500'}
                `}
                data-set={opinion}
                onClick={(e) => getPOV(e)}
            >
                {opinion}
                <div className="lg:min-h-10 lg:max-h-10 lg:min-w-10 lg:p-0.5 
                  xs:max-w-7 xs:max-h-7 xs:min-w-7 xs:min-h-7 absolute xs:right-1 z-0 flex items-center justify-center">
                    {opinion === perspective ? <Lottie className="box-content absolute right-0 translate-x-0.5 xl:translate-x-1.5"
                        animationData={blueCheck} loop={false} autoPlay={false} style={{ height: "100%", width: "100%", position: "relative" }} />
                        : (
                            <div className="xl:max-h-5 xl:max-w-5 xl:min-w-5 xl:min-h-5 xs:max-w-4 xs:max-h-4 xs:min-w-4 xs:min-h-4 bg-black/40 box-content rounded-full  absolute xs:right-1"></div>

                        )}
                </div>
            </div>
        </div>
    )
}