import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SummaryHeader from './SummaryHeader';
import SummaryContent from './SummaryContent';

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






    return (<motion.div
        className="shrink-0 box-border w-auto flex flex-col 2xl:mx-auto
        mx-auto pb-1 xl:w-full h-auto
        overflow-y-scroll scrollbar-hide box-border bg-black"
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
        />
        <SummaryContent
            article_text={article_text}
            summary={summary}
            fullStory={fullStory}
        />
    </motion.div>)


}
