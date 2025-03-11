import { AnimatePresence, motion } from "framer-motion"
import ArticleLink from "./ArticleLink"

const variants = {
    show: {
        opacity: 1,
        transition: { type: 'tween', delay: 0.2, duration: 0.2 }
    },
    hide: {
        opacity: 0,
        transition: { type: 'tween', duration: 0.2 }
    }
}

export default function Pages({ page, firstHalf, secondHalf }) {

    return (
        <AnimatePresence mode="wait">
            {page === 1 ?
                <motion.ol
                    layout
                    key='pageOne'
                    variants={variants}
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
                    variants={variants}
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