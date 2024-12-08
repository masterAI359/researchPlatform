import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SummaryHeader from './SummaryHeader';
import SummaryContent from './SummaryContent';

export function Summary({ summaryData, handleClick, isSelected, index }) {
    const [fullStory, setFullStory] = useState(false);

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
        failed,
    } = summaryData;

    function handleArticleView() {
        setFullStory((fullStory) => !fullStory);
    }


    const content = (<motion.div
        whileHover={{
            scale: isSelected ? 1 : 1.10,
            transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
        }}
        whileTap={!isSelected ? { scale: 0.9 } : null}
        onClick={!isSelected ? () => {
            handleClick(index);
        } : null}
        className={`box-border w-auto flex flex-col 2xl:mx-auto
              ${isSelected
                ? `fixed mx-auto pb-1 rounded-t-4xl z-40 top-24 lg:inset-x-36 
                xl:inset-x-[29rem] overflow-y-scroll
                 scrollbar-hide box-border bg-mirage ${fullStory ? `bottom-1 rounded-b-xl` : `bottom-44 rounded-b-4xl`}`
                : 'mx-auto xl:h-[16rem] xl:w-[30rem] rounded-4xl cursor-pointer'}`}
    >
        <SummaryHeader
            isSelected={isSelected}
            date={date}
            index={index}
            logo={logo}
            source={source}
            handleClick={handleClick}
            article_title={article_title}
            article_pub_date={article_pub_date}
            article_image={article_image}
        />

        <AnimatePresence>
            {isSelected && <SummaryContent
                isSelected={isSelected}
                date={date}
                logo={logo}
                source={source}
                article_pub_date={article_pub_date}
                article_authors={article_authors}
                article_text={article_text}
                summary={summary}
                fullStory={fullStory}
                article_url={article_url}

            />}
        </AnimatePresence>
    </motion.div>)

    if (isSelected === true) {
        return (
            content

        )
    } else if (!failed) {
        return content
    }
}
