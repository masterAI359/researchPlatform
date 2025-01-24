import Lottie from "lottie-react"
import squareCircle from '../../../lotties/SquareCircle.json'
import { createPortal } from "react-dom"

export default function SummaryLoader() {


    const loader = (
        <div className='w-full h-full mx-auto grid grid-cols-1 justify-center absolute bg-black top-0 right-0 bottom-0 left-0'>

            <header className='w-full mx-auto mt-24'>
                <h1
                    className='text-center font-serif text-4xl text-slate-400'
                >Just a few moments while we gather those articles</h1>
            </header>
            <div className="w-full h-fit mx-auto">
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

    return (
        createPortal(loader, document.body)
    )
}