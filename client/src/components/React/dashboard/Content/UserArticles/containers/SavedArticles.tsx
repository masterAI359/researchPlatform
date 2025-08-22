import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/ReduxToolKit/store"
import { AnimatePresence, motion } from "framer-motion"
import { delays } from "@/motion/variants"
import ScrolltoTop from "@/helpers/ScrollToTop"
import NoSavedArticles from "../fallbacks/NoSavedArticles"
import ArticlesScroller from "./ArticlesScroller";
import { useEffect } from "react"
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"

export default function SavedArticles({ }) {
    const { userArticles,
    } = useSelector((state: RootState) => state.userdata, shallowEqual);
    const hasArticles: boolean = Array.isArray(userArticles) && (userArticles.length > 0);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        return () => {
            dispatch(fetchSavedArticles());
        };
    }, []);

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
                        className="w-full 2xl:px-2 gap-3 h-full md:mt-12 xl:mt-4 flex justify-end">

                        <ArticlesScroller />
                    </motion.div>
                }
                {!hasArticles && <NoSavedArticles key='noSavedArticles' />}

            </AnimatePresence>
        </div>
    );
};


