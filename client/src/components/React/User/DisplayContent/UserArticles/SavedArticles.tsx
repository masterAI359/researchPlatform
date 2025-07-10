import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { motion } from "framer-motion"
import { delays } from "@/motion/variants"
import ArticleSaved from "./ArticleSaved"
import ErrorBoundary from "../../../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../../../AppRouting/ScrollToTop"
import LazyLoad from "react-lazyload"

export default function SavedArticles({ }) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);


    return (
        <ErrorBoundary>
            <ScrolltoTop />
            <div className="w-full h-full mx-auto animate-fade-in duration-300 delay-200 ease-in relative">
                <h1 className="text-blue-500 ml-6 mt-12 xl:ml-32 lg:ml-44 md:ml-52 tracking-tight 2xl:text-base">
                    Saved Articles
                </h1>

                <motion.section
                    key='savedArticles'
                    variants={delays}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    className="w-full 2xl:px-2 gap-3 h-full mt-24 flex justify-end">

                    <article className="w-full lg:w-11/12 md:w-full flex flex-col gap-y-8 h-auto items-end px-4 md:px-0">
                        {

                            userArticles.map((article: any, index: number) => (
                                <LazyLoad key={index} offset={200}>
                                    <ArticleSaved key={index} article={article} />
                                </LazyLoad>
                            ))}
                    </article>

                </motion.section>
            </div>

        </ErrorBoundary>

    )
}