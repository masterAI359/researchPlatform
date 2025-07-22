import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { AnimatePresence, motion } from "framer-motion"
import { delays } from "@/motion/variants"
import ArticleSaved from "../components/ArticleSaved";
import ScrolltoTop from "../../../../../../helpers/ScrollToTop"
import NoSavedArticles from "../fallbacks/NoSavedArticles"


export default function SavedArticles({ }) {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const hasArticles: boolean = Array.isArray(userArticles) && (userArticles.length > 0);

    //implement react virtuoso for virtualized rendering

    return (
        <div className="w-full h-fit lg:px-10 xl:px-12 2xl:px-16">
            <ScrolltoTop />
            <AnimatePresence>
                {hasArticles &&
                    <motion.div
                        key='savedArticles'
                        variants={delays}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        className="w-full 2xl:px-2 gap-3 h-fit md:mt-24 flex justify-end">

                        <article className="w-full md:w-full flex flex-col h-fit gap-y-8 2xl:gap-y-12 items-end px-4 md:px-0">
                            {userArticles.map((article: any, index: number) => (
                                <ArticleSaved key={index} article={article} />
                            ))
                            }
                        </article>
                    </motion.div>
                }
                {!hasArticles && <NoSavedArticles />}

            </AnimatePresence>
        </div>
    );
};