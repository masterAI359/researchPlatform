import { motion } from "framer-motion"


const variants = {
    show: {
        opacity: 1
    },
    hide: {
        opacity: 0
    }
}


export default function LinkPagination({ setPage, page }) {

    return (
        <motion.div
            layout
            key='linkPagination'
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            className="relatvie w-full h-fit flex justify-center md:gap-x-6 mx-auto items-center">


            <div className="flex 2xl:gap-x-6 items-center w-fit h-fit">
                <button
                    onClick={() => setPage(1)}
                    className={`${page === 1 ? 'pointer-events-none opacity-40' : 'pointer-events-auto opacity-100'} w-10 h-8 md:w-16 md:h-12 bg-white md:hover:bg-white/10 
            mx-auto rounded-2xl flex items-center justify-center xl:p-2
            group transition-all duration-200 ease-in-out 
          `}>
                    <svg className={`p-1.5 text-black md:group-hover:text-white transition-all duration-200 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                    </svg>
                </button>

                <div className="">
                    <p className="text-white font-serif 2xl:text-xl">
                        {`${page} / 2`}
                    </p>
                </div>

                <button
                    onClick={() => setPage(2)}

                    className={`w-10 h-8 md:w-16 md:h-12 bg-white md:hover:bg-white/10 
            mx-auto rounded-2xl flex items-center justify-center xl:p-2
            group transition-all duration-200 ease-in-out 
          `}>
                    <svg className={`p-1.5 text-black md:group-hover:text-white transition-all duration-200 ease-in-out`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" fill="currentColor" />
                    </svg>
                </button>
            </div>

        </motion.div>

    )
}