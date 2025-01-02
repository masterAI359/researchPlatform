
export default function SummaryHeader({
    article_image,
    logo,
    source,
    date,
    article_pub_date,
    article_title,
    index,
    article_authors,
    fullStory,
    setFullStory,
    article_url
}) {


    function handleArticleView() {
        setFullStory((fullStory) => !fullStory);
    }


    const limitArray = (arr: any) => {

        let shortenedAuthors = []

        for (let i = 0; i < arr.length; i++) {

            if (i < 3) {
                shortenedAuthors.push(arr[i])
            } else if (i > 3) {
                break
            }

        }

        return shortenedAuthors
    }


    const authShortened = limitArray(article_authors)

    console.log(authShortened)


    return (
        <header
            className="relative flex flex-col box-border w-full mx-auto 2xl:mb-6">
            <div className="w-full flex justify-items-start items-center">
                <div className="w-1/3">
                    <img className="w-full h-full rounded-lg" src={article_image} />
                </div>
            </div>
            <figcaption className="pb-7 pt-3 border-b border-slate-300 w-full mx-auto">
                <div className='flex flex-row h-full w-10/12 box-border justify-between items-center'>
                    <div className='w-full h-full box-border'>
                        <div className="flex items-center">
                            <p className="text-slate-300 opacity-100 text-sm flex items-center mb-3">
                                <img className="mr-3 h-8 w-8" src={logo} alt={''} />

                                {source}
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-300 text-lg font-serif">
                                Published - {date ? date : article_pub_date}{' '}
                            </p>
                        </div>
                        <div className='max-w-3/4 flex flex-wrap mt-3 items-center'>
                            <p className='text-slate-300 text-sm mr-2'>Authors - </p>
                            {article_authors !== undefined && article_authors !== null ? authShortened.map((author: string, index: number) => {

                                if (index + 1 < authShortened.length) {
                                    return (<p className="text-slate-300 text-sm font-serif mr-2">
                                        {author},
                                    </p>)
                                } else if (index + 1 === authShortened.length) {
                                    return (<p className="text-slate-300 text-sm font-serif mr-2">
                                        {author}
                                    </p>)
                                }
                            }) : (<p className='text-slate-300 text-sm font serif mr-2'>Could not determine. Visit the source to determine authors.</p>)}
                        </div>
                    </div>
                    <div className='w-fit h-fit '>
                        <div className='box-border flex flex-col gap-2 items-center justify-center'>
                            <button
                                onClick={handleArticleView}
                                className='bg-white/10 hover:scale-110 text-white text-sm hover:text-white transition-all duration-200 ease-in-out p-3 rounded-full lg:w-32 h-full'
                            >{fullStory ? 'Summary' : 'Full Story'}</button>
                            <button
                                className='bg-white/10 hover:scale-110 text-white text-sm transition-all duration-200 ease-in-out p-3 rounded-full lg:w-32 h-full'
                            >   <a href={article_url} target='_blank'></a>
                                Visit Source</button>
                        </div>
                    </div>
                </div>
            </figcaption>
        </header>
    )
}