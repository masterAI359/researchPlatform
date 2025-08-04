import { shallowEqual, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { AnimatePresence, motion } from "framer-motion"
import { delays } from "@/motion/variants"
import ScrolltoTop from "@/helpers/ScrollToTop"
import NoSavedArticles from "../fallbacks/NoSavedArticles"
import ArticlesScroller from "./ArticlesScroller";

export default function SavedArticles({ }) {
    const { userArticles,
    } = useSelector((state: RootState) => state.userdata, shallowEqual);
    const hasArticles: boolean = Array.isArray(userArticles) && (userArticles.length > 0);



    return (
        <div className="w-full h-fit lg:px-10 xl:px-12 2xl:px-16">
            <ScrolltoTop />
            <AnimatePresence mode="wait">
                {hasArticles &&
                    <motion.div
                        key='savedArticles'
                        variants={delays}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        className="w-full 2xl:px-2 gap-3 h-auto md:mt-12 xl:mt-4 flex justify-end">

                        <ArticlesScroller />
                    </motion.div>
                }
                {!hasArticles && <NoSavedArticles key='noSavedArticles' />}

            </AnimatePresence>
        </div>
    );
};