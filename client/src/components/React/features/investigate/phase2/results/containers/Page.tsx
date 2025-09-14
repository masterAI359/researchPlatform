import { motion } from "framer-motion";
import ArticleLink from "../components/links/ArticleLink";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { searchResultsVariants } from "@/motion/variants";

export default function Page({ pageContent }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { search } = investigateState;
    const { status } = search;

    return (
        <motion.ol
            layout
            aria-label="Search results"
            variants={searchResultsVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className="relative h-[100dvh] no-scrollbar overflow-x-hidden
            w-full xl:max-w-6xl 2xl:w-full mx-auto justify-items-center
            grid grid-cols-1 sm:grid-cols-3 grid-flow-row 2xl:gap-y-10 2xl:gap-x-0 gap-2">

            {status === 'fulfilled' && (Array.isArray(pageContent)) && (pageContent.length > 0) &&
                pageContent.map((article, index) => (
                    <ArticleLink key={article.url + index} article={article} index={index} />
                ))
            }
        </motion.ol>
    );
};