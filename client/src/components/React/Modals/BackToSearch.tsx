import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { displayArticleContent, displaySearch, displayReturnModal } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { clearChosenArticles } from "@/ReduxToolKit/Reducers/Investigate/ChosenArticles"
import { useDispatch, useSelector } from "react-redux"
import { resetData } from "@/ReduxToolKit/Reducers/Investigate/Reading"
import { resetResults } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"

export function BackToSearch({ }) {
    const dispatch = useDispatch()

    const goBack = () => {
        dispatch(displayArticleContent(false))
        resetData()
        dispatch(resetResults())
        dispatch(displaySearch(true))
        dispatch(displayReturnModal(false))
        dispatch(clearChosenArticles())
    }

    const cancelReturn = () => {
        dispatch(displayReturnModal(false))
    }

    const variants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    }


    const modal = (
        <motion.div
            key='returnToSearch'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2, type: 'tween' }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
         xl:min-w-96 xl:min-h-80 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 
        sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center bg-ebony mt-2 
        shadow-inset text-center">
            <div className="lg:min-w-0 lg:flex-1 max-w-sm mx-auto">
                <p className="text-white xl:text-3xl font-light tracking-tight">Are you sure?</p>
                <p className="mt-4">
                    <span className="text-2xl font-lighter text-white" />
                    <span className="text-base font-medium text-zinc-400">You will lose the articles you just loaded.</span><br></br>
                    <span className="text-base font-medium text-zinc-400">This action cannot be undone</span>
                </p>
                <p className="mx-auto mt-6 text-sm text-white" />
                <div className="inline-flex flex-no-wrap gap-x-4 items-center mt-8 w-full">

                    <button onClick={cancelReturn} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>
                    <button onClick={goBack} type="button" className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                </div>
            </div>
        </motion.div>)


    return (
        createPortal(modal, document.body)
    )

}

