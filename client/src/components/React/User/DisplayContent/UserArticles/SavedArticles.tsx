import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { motion } from "framer-motion"
import ArticleSaved from "./ArticleSaved"
import ErrorBoundary from "../../../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../../../AppRouting/ScrollToTop"

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
            <div className="w-full lg:w-5/6 2xl:w-4/5 h-full mx-auto animate-fade-in duration-300 delay-200 ease-in relative">
                <h1 className="text-blue-500 mt-6 md:mt-10 ml-6 xl:ml-32 lg:ml-44 md:ml-52 md:mt-0 tracking-tight 2xl:text-base">
                    Saved Articles
                </h1>

                <motion.section
                    key='savedArticles'
                    variants={variants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    className="w-full 2xl:px-2 gap-3 h-full mt-24 flex justify-end">


                    <article className="w-full  2xl:w-11/12 xl:w-4/5 md:w-3/4 flex flex-col h-auto items-end px-4 md:px-0">
                        {userArticles.map((article: any, index: number) => (
                            <ArticleSaved key={index} article={article} index={index} />
                        ))}
                    </article>

                </motion.section>
            </div>

        </ErrorBoundary>

    )
}