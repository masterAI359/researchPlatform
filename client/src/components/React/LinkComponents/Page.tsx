import { motion } from "framer-motion"
import ScrolltoTop from "../AppRouting/ScrollToTop"
import ArticleLink from "./ArticleLink"

export default function Page({ pageContent }) {

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

    return (
        <motion.ol
            layout
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            className="relative max-w-4xl 2xl:max-w-6xl 2xl:w-full mx-auto justify-items-center
                    grid grid-cols-2 2xl:grid-cols-3 2xl:gap-y-10 2xl:gap-x-0 xs:gap-3 min-h-full">
            <ScrolltoTop />
            {pageContent?.map((article: ArticleType, index: number) => {
                return (
                    <ArticleLink
                        index={index}
                        key={index}
                        article={article}
                    />)
            })
            }
        </motion.ol>
    )
}


