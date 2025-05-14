import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrolltoTop from '../../AppRouting/ScrollToTop';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/ReduxToolKit/store';
import { clearWikiSlice } from '@/ReduxToolKit/Reducers/Investigate/WikipediaSlice';


export default function Article({ articleData, index }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const dispatch = useDispatch<AppDispatch>();
    const { gettingSelection, status } = investigateState.wiki;
    const [fullStory, setFullStory] = useState<boolean>(true);
    const {
        summary,
        article_url,
        article_text,
    } = articleData;


    useEffect(() => {

      


        return () => {
            dispatch(clearWikiSlice());
        }
        
    }, [])

  


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
            className={`relative top-0 left-0 right-0 flex flex-col grow
            w-full min-h-screen scrollbar-hide bg-black transition-all duration-200 ease-in-out
            ${status === 'fulfilled' ? 'opacity-50 md:opacity-100' : 'opacity-100'}
            `}
        >

            <ScrolltoTop />

            <ArticleHeader
                articleData={articleData}
                setFullStory={setFullStory}
                fullStory={fullStory}
            />
            <ArticleContent
                article_url={article_url}
                article_text={article_text}
                summary={summary}
                fullStory={fullStory}
            />
        </motion.div>
    )


}
