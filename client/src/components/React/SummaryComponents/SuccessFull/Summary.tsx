import { useState } from 'react';
import { motion } from 'framer-motion';
import SummaryHeader from './SummaryHeader';
import SummaryContent from './SummaryContent';


//TODO: implement inserting of saved article data to the 'articles' table in our database

export function Summary({ summaryData, index }) {
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
    } = summaryData;


    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    delay: 0.5, duration: 0.4
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.2
                }
            }}
            className="relative inset-0 box-border flex flex-col
            pb-1 w-full h-full scrollbar-hide box-border bg-black"
        >
            <SummaryHeader
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
            <SummaryContent
                article_text={article_text}
                summary={summary}
                fullStory={fullStory}
            />
        </motion.div>
    )


}
