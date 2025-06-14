import Lottie from "lottie-react"
import { motion } from "framer-motion"
import vortex from '../../../lotties/vortex.json'
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
            className='w-full h-auto mx-auto flex flex-col-reverse items-start md:items-center fixed bg-black top-0 md:right-0 md:bottom-0 md:left-0'>

            <header className='w-2/3 h-fit mx-auto justify-center 2xl:-translate-y-40 xl:-translate-y-72 lg:-translate-y-80'>
                <h1
                    className='block max-w-3/4 h-fit font-light text-center text-sm tracking-tight md:text-3xl xl:text-4xl text-zinc-400 animate-pulse'
                >We're Gathering the chosen articles

                </h1>
            </header>
            <div className="w-full h-fit flex justify-center">
                <div className="w-4/5 md:w-3/5 h-auto xl:-translate-x-8 2xl:translate-y-14 xl:-translate-y-52 lg:-translate-y-44 transition-all duration-200 ease-in-out">
                    <Lottie

                        animationData={vortex}
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