import { motion } from "framer-motion"

export default function MindNode3({ currentStep }) {

    return (
        <div className={`${currentStep < 2 ? 'opacity-100 pointer-events-none' : 'opacity-100 pointer-events-auto'} 
        ${currentStep === 2 ? 'scale-110' : null} bg-ebony 
        xs:h-12 xs:w-28 lg:w-44 lg:h-16 p-3 absolute xs:top-24 md:top-40 lg:top-44 xs:right-1  md:right-4 flex items-center justify-beetween
      ${currentStep < 2 ? 'border border-2 border-button_gray' : 'border border-2 border-button_blue'} rounded-3xl transition-all duration-200 ease-in-out`}>
            <div className='flex gap-2 items-center w-full h-full box-border'>
                <motion.div
                    className="flex items-center justify-center rounded-full xs:max-w-7 xs:max-h-7
     lg:max-h-12 lg:max-w-12 xs:p-0.5 sm:p-1 md:1.5 lg:p-2  shrink-0 z-10 hover:cursor-pointer transition-all duration-300 hover:scale-110"
                    animate={{
                        backgroundColor: currentStep >= 3 ? "#2563eb" : "#374151",
                        boxShadow: currentStep === 2
                            ? "0 0 0 2px rgba(37, 99, 235, 1)"
                            : "none"
                    }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: 'left' }}>

                    <svg className="p-0.5 box-border w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 24.34375 5.0703125 C 14.23245 4.880049 6 13.432641 6 23.5 L 6 38.5 C 6 40.967501 8.0324991 43 10.5 43 L 11.5 43 C 13.967501 43 16 40.967501 16 38.5 L 16 23.404297 C 16 19.338919 18.864634 15.723804 22.808594 15.154297 C 27.795106 14.434278 32 18.251669 32 23.066406 L 32 38.5 C 32 40.967501 34.032499 43 36.5 43 L 37.5 43 C 39.967501 43 42 40.967501 42 38.5 L 42 23.068359 C 42 13.259183 34.111687 5.2533184 24.34375 5.0703125 z M 24.287109 8.0703125 C 32.453171 8.2233066 39 14.861536 39 23.068359 L 39 34 L 35 34 L 35 23.066406 C 35 16.481143 29.112347 11.211612 22.380859 12.183594 C 16.878819 12.978087 13 17.925675 13 23.404297 L 13 34 L 9 34 L 9 23.5 C 9 15.069359 15.904408 7.912576 24.287109 8.0703125 z M 25.285156 20 C 25.078156 20 24.875328 20.090813 24.736328 20.257812 L 18.166016 29.828125 C 17.989016 30.041125 17.950359 30.339844 18.068359 30.589844 C 18.185359 30.840844 18.437844 31 18.714844 31 L 24 31 L 22.021484 37.109375 C 21.938484 37.433375 22.091672 37.769875 22.388672 37.921875 C 22.491672 37.974875 22.604844 38 22.714844 38 C 22.921844 38 23.124672 37.909188 23.263672 37.742188 L 29.833984 28.171875 C 30.011984 27.957875 30.050594 27.662109 29.933594 27.412109 C 29.815594 27.160109 29.562156 27 29.285156 27 L 24 27 L 25.978516 20.890625 C 26.061516 20.566625 25.908328 20.230125 25.611328 20.078125 C 25.508328 20.025125 25.395156 20 25.285156 20 z M 9 37 L 13 37 L 13 38.5 C 13 39.346499 12.346499 40 11.5 40 L 10.5 40 C 9.6535009 40 9 39.346499 9 38.5 L 9 37 z M 35 37 L 39 37 L 39 38.5 C 39 39.346499 38.346499 40 37.5 40 L 36.5 40 C 35.653501 40 35 39.346499 35 38.5 L 35 37 z" fill="#ffffff" />
                    </svg>
                </motion.div>
                <div className='h-auto w-11/12 mx-auto'>
                    <h1 className="text-white xs:text-xs lg:text-md text-center font-light tracking tight">
                        Biases
                    </h1>
                </div>
            </div>

        </div>

    )
}