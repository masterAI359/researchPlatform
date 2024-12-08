import { motion } from "framer-motion"
import FullText from "./FullText"
import SummarizedText from "./SummarizedText"


export default function SummaryContent({
    fullStory,
    logo,
    source,
    isSelected,
    date,
    article_pub_date,
    article_authors,
    handleArticleView,
    article_url,
    article_text,
    summary
}: any) {

    return (
        <motion.div className={`${fullStory ? `overflow-y-scroll scrollbar-thin scrollbar-track-rounded-full 
            scrollbar-thumb-rounded-full scrollbar-thumb-gray-600 scrollbar-track-gray-300 scroll-smooth mx-1 my-1` : null} cursor-text`}>
            <figcaption className="pb-7 pt-3 border-b border-slate-300 w-11/12 mx-auto">
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
                <main className={`display-block xl:ml-8 opacity-87 h-fit 2xl:w-2/3`}>
                    {fullStory ? <FullText article_text={article_text} /> : <SummarizedText summary={summary} />}

                </main>
            ) : null}
        </motion.div>
    )
}