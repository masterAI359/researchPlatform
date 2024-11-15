import Warning from '../Fallbacks/Warning.jsx';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

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

    console.log({ "Article: ": article_title, "Authors: ": article_authors })


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
                ? 'fixed pb-1 rounded-t-4xl rounded-b-xl z-50 top-0 lg:inset-x-36 xl:left-60 xl:right-60 2xl:left-[16rem] 2xl:right-[16rem] overflow-y-scroll scrollbar-hide bottom-1 box-border bg-google_bg '
                : 'mx-auto xl:h-[22rem] xl:w-[20rem] rounded-4xl cursor-pointer'}`}
    >
        {/* Header Section */}
        <header
            className={`relative flex flex-col-reverse box-border w-full mx-auto
                    ${isSelected ? 'pb-10 min-h-[23rem] max-h-9/12' : 'mx-4 rounded-4xl px-4 py-4 h-full'}`}
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
            <figcaption className={`relative w-full h-full flex flex-col-reverse mx-auto justify-between`}>
                <h1 className={`text-white font-serif opacity-100 text-4xl
                        font-light tracking-tight w-11/12 ${isSelected ? 'text-4xl text-center' : 'text-lg'}`}>
                    {article_title ? (
                        article_title
                    ) : null}
                </h1>
                {isSelected ? <div className='flex flex-row w-full h-fit justify-end'>
                    <div
                        onClick={() => handleClick(index)}
                        className="w-fit h-fit relative cursor-pointer p-2 top-5 right-5 rounded-lg hover:bg-white/10
                     hover:text-white group transition-all ease-in-out duration-200">
                        <svg className="text-zinc-200 cursor-pointer opacity-55 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px">
                            <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                        </svg>
                    </div>
                </div> : null}

            </figcaption>
        </header>

        <AnimatePresence>
            {isSelected && <motion.div className={`${fullStory ? `overflow-y-scroll scrollbar-thin scrollbar-track-rounded-full 
                        scrollbar-thumb-rounded-full scrollbar-thumb-gray-600 scrollbar-track-gray-300 scroll-smooth mx-1 my-1` : null} cursor-text`}>
                <figcaption className="pb-7 pt-3 border-b border-slate-300 w-11/12 mx-auto mb-7">
                    <div className='flex flex-row h-full w-full box-border justify-between items-center'>
                        <div className='w-full h-full box-border'>
                            <div className="flex items-center">
                                <p className="text-slate-300 opacity-100 text-xl flex items-center mb-3">
                                    <img className="mr-3 h-12 w-12" src={logo} alt={''} />

                                    {isSelected ? `${source}` : null}
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-300 text-xl font-serif">
                                    Published - {date ? date : article_pub_date}{' '}
                                </p>
                            </div>
                            <div className='max-w-[40rem] flex flex-wrap mt-3 items-center'>
                                <p className='text-slate-300 text-xl mr-2'>Authors - </p>
                                {article_authors !== undefined && article_authors !== null ? article_authors.map((author: string, index: number) => {

                                    if (index + 1 < article_authors.length) {
                                        return (<p className="text-slate-300 text-xl font-serif mr-2">
                                            {author},
                                        </p>)
                                    } else if (index + 1 === article_authors.length) {
                                        return (<p className="text-slate-300 text-xl font-serif mr-2">
                                            {author}
                                        </p>)
                                    }
                                }) : (<p className='text-slate-300 text-xl font serif mr-2'>Could not determine. Visit the source to determine authors.</p>)}
                            </div>
                        </div>
                        <div className='w-fit h-fit '>
                            <div className='box-border flex flex-col gap-2 items-center justify-center'>
                                <button
                                    onClick={handleArticleView}
                                    className='bg-white/20 hover:scale-110 text-white hover:text-white transition-all duration-200 ease-in-out p-3 rounded-lg lg:w-36 h-full'
                                >{fullStory ? 'Summary' : 'Full Story'}</button>
                                <button
                                    className='bg-white/20 hover:scale-110 text-white transition-all duration-200 ease-in-out p-3 rounded-lg lg:w-36 h-full'
                                >   <a href={article_url} target='_blank'></a>
                                    Visit Source</button>
                            </div>
                        </div>
                    </div>
                </figcaption>

                {isSelected ? (
                    <main className={`display-block mx-auto opacity-87 h-fit 2xl:w-11/12
                       `}>
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
                                                {obj.heading === '' ? (
                                                    ''
                                                ) : (
                                                    <div className="w-full">
                                                        <h1 className="text-3xl font-light tracking-tight text-white pt-10 pb-5 font-serif">
                                                            {' '}
                                                            {obj.heading}{' '}
                                                        </h1>
                                                    </div>
                                                )}

                                                <p className="font-serif font-light tracking-tight indent-5 2xl:text-2xl text-xl">
                                                    {obj.text}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                            <div
                                className={`text-white font-serif text-2xl font-light tracking-tight leading-10 whitespace-pre-wrap pb-16 transition-all duration-1000 ease-in-out ${fullStory ? 'block opacity-100' : 'hidden'
                                    }`}
                            >
                                {article_text}
                            </div>
                        </div>

                    </main>
                ) : null}
            </motion.div>}
        </AnimatePresence>
    </motion.div>)

    if (isSelected === true) {
        return (
            createPortal(content, document.body)
        )
    } else if (!failed) {
        return content
    }
}
