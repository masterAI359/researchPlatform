import SummaryImage from '../Fallbacks/SummaryImage.jsx';
import Warning from '../Fallbacks/Warning.jsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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


    //TODO: change select toggle so that we can still allow the user to change the summary/full story view without closing it

    return (
        <motion.div
            whileHover={{
                scale: isSelected ? 1 : 1.10,
                transition: { type: 'tween', duration: 0.2, ease: 'easeInOut' }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
                handleClick(index);
            }}
            className={`box-border w-auto flex flex-col 2xl:mx-auto cursor-pointer ${failed ? 'bg-ebony' : ''
                }
             rounded-4xl ${isSelected
                    ? 'fixed top-24 lg:inset-x-36 xl:left-60 xl:right-60 2xl:left-[20rem] 2xl:right-[20rem] bottom-12 box-border overflow-y-auto no-scrollbar z-50 bg-ebony'
                    : 'mx-auto xl:h-[25rem] xl:w-[25rem]'
                }`}
        >
            {/* Header Section */}
            <header
                className={`relative flex flex-col-reverse items-baseline box-border w-full ${isSelected
                    ? 'pb-10 min-h-[32rem] max-h-11/12'
                    : 'mx-4 rounded-4xl px-4 py-4 h-full'
                    }`}
            >
                {/* Background Image with Lower Opacity */}
                <div
                    className={`absolute inset-0 bg-cover bg-center opacity-50 hover:opacity-75
                         transition-opacity duration-200 ease-in-out ${isSelected ? 'rounded-t-4xl' : 'rounded-4xl'}`}
                    style={{ backgroundImage: `url(${article_image})` }}
                ></div>

                {/* Content Over Background */}
                <div className="relative w-full h-auto box-border">
                    {isSelected ? null : (
                        <figcaption className="relative pt-20">
                            <div className="flex items-center">
                                <p className="text-slate-300 opacity-100 text-sm flex items-center mb-3">
                                    <img className="mr-3 h-12 w-12" src={logo} alt={''} />

                                    {source}
                                </p>
                            </div>
                            <div>
                                {isSelected ? <p className="text-white text-md font-serif opacity-100">
                                    {date ? date : article_pub_date}
                                </p> : null}
                            </div>
                        </figcaption>
                    )}
                </div>
                <figcaption className="relative">
                    <h1 className={`text-white font-serif opacity-100 text-4xl font-light tracking-tight w-4/5 mx-auto ${isSelected ? 'text-4xl' : 'text-lg'}`}>
                        {article_title ? (
                            article_title
                        ) : (
                            <div className="flex items-start animate-pulse h-full">
                                <Warning />
                                <span className="pl-5 text-red-600">
                                    Access to {source} article denied
                                </span>
                            </div>
                        )}
                    </h1>
                </figcaption>
            </header>

            <AnimatePresence>
                {isSelected && <motion.div>
                    <figcaption className="pb-7 pt-3 border-b border-slate-300 w-11/12 mx-auto mb-7">
                        <div className="flex items-center">
                            <p className="text-slate-300 opacity-100 text-xl flex items-center mb-3">
                                <img className="mr-3 h-12 w-12" src={logo} alt={''} />

                                {isSelected ? `${source}` : null}
                            </p>
                        </div>
                        <div className='max-w-96 flex flex-wrap mb-3'>
                            <p className='text-white text-xl mr-2'>Written by: </p>
                            {article_authors.map((author: string) => (
                                <p className="text-white text-xl font-serif mr-2">
                                    {author}
                                </p>
                            ))}

                        </div>
                        <div>
                            <p className="text-white text-xl font-serif">
                                {date ? date : article_pub_date}{' '}
                            </p>
                        </div>
                    </figcaption>

                    {isSelected ? (
                        <main className="display-block 2xl:mx-20 mx-5 opacity-87 h-fit 2xl:w-4/5">
                            <div className="">
                                <div
                                    className={` text-white 2xl:text-2xl leading-10 whitespace-pre-wrap pb-7 transition-all duration-300 ease-in-out ${fullStory ? 'opacity-0 hidden' : 'opacity-100'
                                        }`}
                                >
                                    {typeof summary[0] === 'string'
                                        ? `${summary[0]}`
                                        : summary.map((obj, index) => {
                                            return (
                                                <div key={index}>
                                                    {failed ? (
                                                        <div>
                                                            <p>
                                                                {' '}
                                                                {obj.denied}{' '}
                                                                <span className="text-blue-400 font-bold">
                                                                    {obj.failedArticle}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                    {obj.heading === '' ? (
                                                        ''
                                                    ) : (
                                                        <div className="w-full">
                                                            <h1 className="text-2xl text-white pt-10 pb-5 font-serif">
                                                                {' '}
                                                                {obj.heading}{' '}
                                                            </h1>
                                                        </div>
                                                    )}

                                                    <p className="font-serif indent-5 text-xl">
                                                        {obj.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                </div>
                                <div
                                    className={`text-white font-serif text-2xl font-thin leading-10 whitespace-pre-wrap pb-16 transition-all duration-1000 ease-in-out ${fullStory ? 'block opacity-100' : 'hidden'
                                        }`}
                                >
                                    {article_text}
                                </div>
                            </div>
                            <div>
                                <button
                                    className={`text-sm py-2 px-4 mb-10 border focus:ring-2 rounded-full border-transparent bg-white
                     hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white
                      hover:text-white inline-flex items-center justify-center ring-1 ring-transparent`}
                                    onClick={handleArticleView}
                                >
                                    <p>
                                        {failed ? (
                                            <a href={article_url} target="_blank">
                                                {' '}
                                                Visit Source &nbsp; &rarr;
                                            </a>
                                        ) : (
                                            `View ${fullStory ? 'Summary' : 'full article'}`
                                        )}
                                    </p>
                                </button>
                            </div>
                        </main>
                    ) : null}
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    );
}
