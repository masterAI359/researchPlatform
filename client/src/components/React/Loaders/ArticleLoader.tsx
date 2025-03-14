import Lottie from "lottie-react"
import { motion } from "framer-motion"
import dataCollection from '../../../lotties/dataCollection.json'
import { createPortal } from "react-dom"

const variants = {
    show: { opacity: 1 },
    hide: { opacity: 0 }
}

export default function ArticleLoader() {


    const loader = (
        <motion.div
            key='contentLoader'
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className='w-full h-full mx-auto flex flex-col-reverse items-center fixed bg-black top-0 right-0 bottom-0 left-0'>

            <header className='w-full h-fit mx-auto flex justify-center 2xl:-translate-y-40 xl:-translate-y-72 lg:-translate-y-80'>
                <h1
                    className='w-fit h-fit font-light tracking-tight md:text-3xl xl:text-4xl text-white animate-pulse'
                >Please wait just a few moments. We're gathering the chosen articles</h1>
            </header>
            <div className="w-full h-fit flex justify-center">
                <div className="w-3/5 h-auto xl:-translate-x-8 2xl:translate-y-14 xl:-translate-y-52 lg:-translate-y-44 transition-all duration-200 ease-in-out">
                    <Lottie

                        animationData={dataCollection}
                        autoPlay={true}
                        loop={true}
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>


        </motion.div>
    )

    return (
        createPortal(loader, document.body)
    )
}