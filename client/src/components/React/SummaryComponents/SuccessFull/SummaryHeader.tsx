import MoreButton from "../../Buttons/MoreButton";


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

                if (arr[i].length < 25) {
                    shortenedAuthors.push(arr[i])
                } else {
                    continue
                }

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
            className="relative  border-b flex border-slate-300 mx-auto box-border w-full mx-auto 2xl:mb-2">
            <section className="flex xs:flex-col xs:gap-y-2 md:flex-row md:gap-x-4 items-center w-full h-full mx-auto xs:pb-2 xl:pb-6">
                <div className="w-fit flex items-center">
                    <div className="xs:h-full xs:h-full flex flex-row justify-start relative">
                        <div
                            style={{ backgroundImage: `url(${article_image})` }}
                            className='absolute inset-0 xs:w-full xs:h-full xl:w-full
                            bg-cover bg-center opacity-50 xs:rounded-xl xl:rounded-lg xl:w-full'
                        >
                        </div>
                        <div className='relative z-10 xs:p-2 md:p-4 flex flex-col gap-y-10 xs:py-6 md:py-12'>

                            <div className="w-auto h-full">
                                <h1 className='lg:text-lg xs:text-md leading-6 text-white font-light tracking-tight font-serif'>
                                    {article_title}
                                </h1>
                            </div>
                            <div className="flex items-center">
                                <p className="text-slate-300 opacity-100 xs:text-xs md:text-md flex items-center">
                                    <img className="mr-3 h-9 w-9" src={logo} alt={''} />

                                    {source}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <figcaption className="w-full h-full flex">
                    <div className='flex md:flex-col h-full w-full box-border xl:gap-y-4 items-center self-end'>
                        <div className='w-full h-full box-border xs:flex xs:flex-col md:gap-y-2 justify-end'>

                            <div>
                                <p className="text-slate-300 font-light xs:text-sm md:text-lg font-serif">
                                    Published - {date ? date : article_pub_date}{' '}
                                </p>
                            </div>
                            <div className='max-w-3/4 flex flex-wrap mt-3 items-center'>
                                <p className='text-slate-300 md:text-lg font-light mr-2'>Authors - </p>
                                {article_authors !== undefined && article_authors !== null ? authShortened.map((author: string, index: number) => {

                                    if (index + 1 < authShortened.length) {
                                        return (<p className="text-slate-300 md:text-lg font-serif mr-2">
                                            {author},
                                        </p>)
                                    } else if (index + 1 === authShortened.length) {
                                        return (<p className="text-slate-300 md:text-lg font-serif mr-2">
                                            {author}
                                        </p>)
                                    }
                                }) : (<p className='text-slate-300 md:text-lg font serif mr-2'>Could not determine. Visit the source to determine authors.</p>)}
                            </div>
                        </div>

                    </div>
                    <MoreButton article_url={article_url} />
                </figcaption>
            </section>
        </header>
    )
}