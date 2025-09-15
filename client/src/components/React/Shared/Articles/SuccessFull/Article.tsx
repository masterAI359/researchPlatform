import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrolltoTop from '../../../../../helpers/ScrollToTop';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';


export default function Article({ articleData, investigating }) {
    const [fullStory, setFullStory] = useState<boolean>(true);
    const {
        article_url,
        article_text,
    } = articleData;


    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    type: 'tween',
                    duration: 0.3
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.1
                }
            }}
            className={`relative top-0 left-0 right-0 flex flex-col grow px-4
            w-full lg:max-w-xl xl:max-w-4xl min-h-screen scrollbar-hide bg-black transition-all duration-200 ease-in-out
            
            `}
        >

            <ScrolltoTop />

            <ArticleHeader
                articleData={articleData}
                setFullStory={setFullStory}
                fullStory={fullStory}
                investigating={investigating}
            />
            <ArticleContent
                article_url={article_url}
                article_text={article_text}
                fullStory={fullStory}
            />
        </motion.div>
    )


}
