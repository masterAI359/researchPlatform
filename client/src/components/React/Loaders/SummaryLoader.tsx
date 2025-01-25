import Lottie from "lottie-react"
//import squareCircle from '../../../lotties/SquareCircle.json'
import dataCollection from '../../../lotties/dataCollection.json'
import { createPortal } from "react-dom"

export default function SummaryLoader() {


    const loader = (
        <div className='w-full h-full mx-auto flex flex-col items-center absolute bg-black top-0 right-0 bottom-0 left-0'>

            <header className='w-full h-fit mx-auto xl:translate-y-16'>
                <h1
                    className='text-center font-light tracking-tight text-4xl text-white'
                >Just a few moments while we gather those articles</h1>
            </header>
            <div className="w-3/5 h-fit mx-auto pb-12 2xl:-translate-y-24">
                <Lottie
                    className=""
                    animationData={dataCollection}
                    autoPlay={true}
                    loop={true}
                    style={{ height: '100%', width: '100%' }}
                />
            </div>


        </div>
    )

    return (
        createPortal(loader, document.body)
    )
}