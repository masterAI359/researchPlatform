import PropTypes from 'prop-types'
import Lottie from 'react-lottie';
import SquareCircle from '../../../lotties/SquareCircle.json'


export default function SummaryLoader () {

    interface lottieTypes {
        loop: boolean,
        autoplay: boolean,
        animationData: any
    }

    const defaultOptions: lottieTypes = {
        loop: true,
        autoplay: true,
        animationData: SquareCircle,
    }

    return (
        <div className='w-full h-2/3 2xl:max-w-7xl mx-auto grid-cols-1 2xl:mt-16' >

            <header className='w-full mx-auto mb-24'>
                <h1 
                className='text-center font-serif text-4xl text-slate-400'
                >Just a few moments while we gather those articles</h1>
            </header>

            <Lottie 
            options = {defaultOptions}
            height = {400}
            width = {400}
            ></Lottie>
        </div>
    )
}