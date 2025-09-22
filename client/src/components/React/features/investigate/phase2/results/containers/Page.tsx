import { motion } from "framer-motion";
import ArticleLink from "../components/links/ArticleLink";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { searchResultsVariants } from "@/motion/variants";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary";

export default function Page({ pageContent }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { search } = investigateState;
    const { status } = search;
    const test = [null, null];

    return (
        <motion.ol
            layout
            aria-label="Search results"
            variants={searchResultsVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className="relative h-full no-scrollbar overflow-x-hidden 
            w-full xl:max-w-6xl 2xl:w-full mx-auto justify-items-center
            grid grid-cols-1 sm:grid-cols-3 grid-flow-row 2xl:gap-y-10 2xl:gap-x-0 gap-2">
            <ErrorBoundary>
                {status === 'fulfilled' && (Array.isArray(pageContent)) && (pageContent.length > 0) &&
                    pageContent.map((article, index) => (
                        <ArticleLink key={article.url + index} article={article} index={index} />
                    ))
                }
            </ErrorBoundary>


        </motion.ol>
    );
};