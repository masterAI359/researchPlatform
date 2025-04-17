import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrolltoTop from '../../AppRouting/ScrollToTop';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';


export default function Article({ articleData, index }) {
    const [fullStory, setFullStory] = useState(true);
    const {
        summary,
        article_image,
        article_url,
        article_title,
        date,
        article_pub_date,
        article_authors,
        article_text,
        logo,
        source,
        cleanedAuthors,
        cleanedSummary
    } = articleData;

    


    return (
        <motion.div
            layout
            key={article_url}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    duration: 0.3, delay: 0.1
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.1
                }
            }}
            className="relative top-0 left-0 right-0 flex flex-col grow
            w-full min-h-screen scrollbar-hide bg-black"
        >

            <ScrolltoTop />

            <ArticleHeader
                articleData={articleData}
                setFullStory={setFullStory}
                fullStory={fullStory}
            />
            <ArticleContent
                article_text={article_text}
                summary={summary}
                fullStory={fullStory}
            />
        </motion.div>
    )


}
