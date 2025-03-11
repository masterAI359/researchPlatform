import { AnimatePresence, motion } from "framer-motion"
import ArticleLink from "./ArticleLink"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function Pages({ page, firstHalf, secondHalf }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { articles, status } = investigateState.search

    const listOneAnimation = {
        show: {
            opacity: 1,
            transition: { type: 'tween', delay: 0.2, duration: 0.2 }
        },
        hide: {
            opacity: 0,
            transition: { type: 'tween', duration: 0.2 }
        }
    }

    const listTwoAnimation = {
        show: {
            opacity: 1,
            transition: { type: 'tween', delay: 0.2, duration: 0.2 }
        },
        hide: {
            opacity: 0,
            transition: { type: 'tween', duration: 0.2 }
        }
    }

    console.log(typeof (page))

    return (
        <AnimatePresence mode="popLayout">
            {page === 1 ?
                <motion.ol
                    layout
                    key='pageOne'
                    variants={listOneAnimation}
                    initial='hide'
                    animate='show'
                    exit='hide'
                    className="relative max-w-4xl 2xl:max-w-full 2xl:w-full mx-auto 
    grid grid-cols-2 2xl:grid-cols-3 2xl:gap-12 xs:gap-3 min-h-full">
                    {firstHalf?.map((article: ArticleType, index: number) => {
                        return (
                            <ArticleLink
                                index={index}
                                key={index}
                                article={article}
                            />)
                    })
                    }
                </motion.ol> : <motion.ol
                    key='pageTwo'
                    variants={listTwoAnimation}
                    initial='hide'
                    animate='show'
                    exit='hide'
                    className="relative max-w-4xl 2xl:max-w-full 2xl:w-full mx-auto 
                grid grid-cols-2 2xl:grid-cols-3 2xl:gap-12 xs:gap-3 min-h-full">
                    {secondHalf?.map((article: ArticleType, index: number) => {
                        return (
                            <ArticleLink
                                index={index}
                                key={index}
                                article={article}
                            />)
                    })
                    }
                </motion.ol>
            }
        </AnimatePresence>

    )
}