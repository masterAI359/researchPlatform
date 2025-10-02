import { shallowEqual, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { AnimatePresence, motion } from "framer-motion"
import { delays } from "@/motion/variants"
import ScrolltoTop from "@/helpers/ScrollToTop"
import NoSavedArticles from "../fallbacks/NoSavedArticles"
import ArticlesScroller from "./ArticlesScroller";

export default function SavedArticles({ }) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const hasArticles: boolean = Array.isArray(userArticles) && (userArticles.length > 0);



    return (
        <motion.section
            variants={delays}
            initial='closed'
            animate='open'
            exit='closed'
            className="w-auto  md:w-full h-fit lg:px-10 xl:px-12 2xl:px-16 mx-auto">
            <ScrolltoTop />
            <div
                className="w-full md:px-0 2xl:px-2 gap-3 h-full md:mt-12 xl:mt-4 flex justify-center md:justify-end">

                <ArticlesScroller />
            </div>
            {!hasArticles && <NoSavedArticles key='noSavedArticles' />}

        </motion.section>
    );
};


