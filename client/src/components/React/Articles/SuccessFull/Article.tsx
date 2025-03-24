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
                date={date}
                index={index}
                logo={logo}
                source={source}
                article_title={article_title}
                article_pub_date={article_pub_date}
                article_image={article_image}
                article_authors={article_authors}
                fullStory={fullStory}
                article_url={article_url}
                setFullStory={setFullStory}
                article_text={article_text}
                summary={summary}
            />
            <ArticleContent
                article_text={article_text}
                summary={summary}
                fullStory={fullStory}
            />
        </motion.div>
    )


}
