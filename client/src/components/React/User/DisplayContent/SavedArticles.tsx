import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { motion } from "framer-motion"
import ArticleSaved from "./ArticleSaved"
import ErrorBoundary from "../../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../../AppRouting/ScrollToTop"

export default function SavedArticles({ }) {
    const { userArticles, error, status } = useSelector((state: RootState) => state.userdata)

    useEffect(() => {

    }, [userArticles, error, status])

    const variants = {
        open: {
            opacity: 1,
            transition: {
                duration: 0.2,
                type: 'tween',
                delay: 0.3
            }
        },
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                type: 'tween'
            }
        }
    }



    return (
        <ErrorBoundary>
            <ScrolltoTop />
            <div className="w-full h-full mx-auto animate-fade-in duration-300 delay-200 ease-in">
                <h1 className="text-white font-light tracking-tight 2xl:text-3xl xs:text-center md:text-left">
                    Your Saved Articles
                </h1>

                <motion.section
                    key='savedArticles'
                    variants={variants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    className="w-full 2xl:px-2 xs:gap-3 h-full mt-12">


                    <article className="w-full flex flex-col gap-y-4 h-auto items-end xs:px-4 md:px-0">
                        {userArticles.map((article: any, index: number) => (
                            <ArticleSaved key={index} article={article} index={index} />
                        ))}
                    </article>

                </motion.section>
            </div>

        </ErrorBoundary>

    )
}