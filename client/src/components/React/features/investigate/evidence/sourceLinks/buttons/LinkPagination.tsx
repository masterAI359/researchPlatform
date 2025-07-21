import { motion } from "framer-motion"
import { incrementPage, decrementPage, incrementPageBy } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect, useState } from "react"
import { variants } from "@/motion/variants"




export default function LinkPagination({ identifier }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const [pagesLength, setPagesLength] = useState<number | null>(null)
    const [scrollUp, setScrollUp] = useState<boolean>(false)
    const { search } = investigateState
    const { currentPage, pages } = search
    const dispatch = useDispatch()

    useEffect(() => {

        if (pages) {
            setPagesLength(pages.length)
        }

        if (scrollUp) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })

            setScrollUp(false)
        }

    }, [pages, currentPage, scrollUp])

    const decrement = () => {

        if (currentPage > 0 && identifier === "BottomPager") {
            setScrollUp(true)
            dispatch(decrementPage())
        } else if (currentPage > 0) {
            dispatch(decrementPage())
        }
    }

    const increment = () => {



        if (currentPage <= 1 && identifier === 'BottomPager') {
            setScrollUp(true)
            dispatch(incrementPage())
        } else if (currentPage <= 1) {
            dispatch(incrementPage())
        }
    }

    const handleNumberedClick = (index: number) => {

        if (identifier === 'BottomPager') {
            setScrollUp(true)
            dispatch(incrementPageBy(index))
        } else {
            dispatch(incrementPageBy(index))
        }
    }


    return (
        <motion.div
            key={identifier}
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
            className={`${identifier === 'BottomPager' && 'hidden xl:flex'} relatvie w-full h-fit flex justify-center md:gap-x-6 mx-auto items-center`}>
            <div className="row flex">
                <button onClick={() => decrement()}
                    className="rounded-l-3xl border border-r-0 border-white/10
                 py-2 px-3 text-center text-sm transition-all shadow-sm 
                 hover:shadow-lg text-white hover:bg-white group">
                    <svg className={`text-white group-hover:text-black w-4 h-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M 33.960938 2.9804688 A 2.0002 2.0002 0 0 0 32.585938 3.5859375 L 13.585938 22.585938 A 2.0002 2.0002 0 0 0 13.585938 25.414062 L 32.585938 44.414062 A 2.0002 2.0002 0 1 0 35.414062 41.585938 L 17.828125 24 L 35.414062 6.4140625 A 2.0002 2.0002 0 0 0 33.960938 2.9804688 z" fill="currentColor" />
                    </svg>
                </button>
                {pagesLength > 1 && pages ? pages.map((page: any, index: number) => (
                    <button key={index} onClick={() => handleNumberedClick(index)}
                        className={`${currentPage === index ? 'bg-white/10' : 'bg-black'} 
                text-white rounded-md rounded-r-none rounded-l-none border border-r-0 border-white/10 py-2 px-3
                 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:bg-white/10`}>
                        {index + 1}
                    </button>
                )) : (<button
                    className={`${currentPage === 1 ? 'bg-white/10' : 'bg-black'} 
                text-white rounded-md rounded-r-none rounded-l-none border border-r-0 border-white/10 py-2 px-3
                 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:bg-white/10`}>
                    1
                </button>)}


                <button onClick={() => increment()} className="rounded-r-3xl text-white rounded-l-none border border-white/10 py-2 px-3 text-center text-sm transition-all
                 shadow-sm hover:shadow-lg hover:text-white hover:bg-white group
                 ">
                    <svg className={`text-white group-hover:text-black w-4 h-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                        <path d="M17.586,44.414C17.977,44.805,18.488,45,19,45s1.023-0.195,1.414-0.586l19-19c0.781-0.781,0.781-2.047,0-2.828l-19-19 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,24L17.586,41.586C16.805,42.367,16.805,43.633,17.586,44.414z" fill="currentColor" />
                    </svg>

                </button>
            </div>


        </motion.div>

    )
}