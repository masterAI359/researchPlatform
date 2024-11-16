import Lottie from "lottie-react"
import squareCircle from '../../../lotties/SquareCircle.json'

export default function SummaryLoader() {

    return (
        <div className='w-full h-full 2xl:max-w-7xl mx-auto grid grid-cols-1 2xl:mt-16 justify-center' >

            <header className='w-full mx-auto mb-24'>
                <h1
                    className='text-center font-serif text-4xl text-slate-400'
                >Just a few moments while we gather those articles</h1>
            </header>
            <div className="w-full mx-auto">
                <Lottie
                    className="mx-auto"
                    animationData={squareCircle}
                    autoPlay={true}
                    loop={true}
                    style={{ height: 400, width: 400 }}
                />
            </div>


        </div>
    )
}