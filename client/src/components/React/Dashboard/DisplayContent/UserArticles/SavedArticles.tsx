import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { AnimatePresence, motion } from "framer-motion"
import { delays } from "@/motion/variants"
import ArticleSaved from "./ArticleSaved"
import ErrorBoundary from "../../../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../../../../../helpers/ScrollToTop"
import LazyLoad from "react-lazyload"
import NoSavedArticles from "./NoSavedArticles"
import ArticleSkeleton from "./ArticleSkeleton"

export default function SavedArticles({ }) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const hasArticles: boolean = Array.isArray(userArticles) && (userArticles.length > 0);

    return (
        <ErrorBoundary>
            <ScrolltoTop />
            <div className="w-full h-full mx-auto animate-fade-in duration-300 delay-200 ease-in relative">
                <AnimatePresence>
                    {hasArticles &&
                        <motion.section
                            key='savedArticles'
                            variants={delays}
                            initial='closed'
                            animate='open'
                            exit='closed'
                            className="w-full 2xl:px-2 gap-3 h-full mt-24 flex justify-end">

                            <article className="w-full md:w-full flex flex-col gap-y-8 h-auto items-end px-4 md:px-0">
                                {userArticles.map((article: any, index: number) => (
                                    <LazyLoad key={index} offset={200} placeholder={<ArticleSkeleton />}>
                                        <ArticleSaved key={index} article={article} />
                                    </LazyLoad>
                                ))
                                }
                            </article>
                        </motion.section>
                    }
                    {!hasArticles && <NoSavedArticles />}

                </AnimatePresence>
            </div>
        </ErrorBoundary>
    );
};