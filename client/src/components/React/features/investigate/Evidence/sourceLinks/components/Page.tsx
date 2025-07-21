import { motion } from "framer-motion";
import ArticleLink from "./ArticleLink";
import LinkPlaceholder from "../loaders/LinkPlaceholder";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

export default function Page({ pageContent, index }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { search } = investigateState;
    const { status } = search;


    const variants = {
        show: {
            opacity: 1,
            scale: 1,
            transition: { type: 'tween', duration: 0.2, ease: 'easeInOut', delay: 0.2 }
        },
        hide: {
            opacity: 0,
            scale: 0.98,
            transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
        }
    };


    return (
        <motion.ol
            key={index}
            layout
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            className="absolute inset-0 max-w-4xl xl:max-w-6xl 2xl:w-full mx-auto justify-items-center
                    grid grid-cols-2 xl:grid-cols-3 2xl:gap-y-10 2xl:gap-x-0 xs:gap-3 min-h-full">

            {status === 'pending' &&
                Array(6).fill(0).map((_, i) => <LinkPlaceholder key={i} />)
            }

            {status === 'fulfilled' && (Array.isArray(pageContent)) && (pageContent.length > 0) &&
                pageContent.map((article, index) => (
                    <ArticleLink key={article.url + index} article={article} index={index} />
                ))
            }
        </motion.ol>
    )
}


