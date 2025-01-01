
export default function SummaryHeader({
    isSelected,
    article_image,
    logo,
    source,
    date,
    article_pub_date,
    article_title,
    handleClick,
    index
}) {


    return (
        <header
            className={`relative flex flex-col-reverse box-border w-full mx-auto
                      ${isSelected ? 'pb-10 min-h-[18rem] max-h-9/12' : 'mx-4 rounded-4xl px-4 py-4 h-full'}`}
        >
            {/* Background Image with Lower Opacity */}
            <div
                className={`absolute inset-0 bg-cover bg-center opacity-50 hover:opacity-75
                           transition-opacity duration-200 ease-in-out ${isSelected ? 'rounded-t-4xl' : 'rounded-4xl'}
                           ${article_image ? null : 'bg-fallbackImage'}
                           `}
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
                {isSelected ? <div className='flex flex-row w-full h-fit justify-end relative'>
                    <div
                        onClick={() => handleClick(index)}
                        className="w-fit h-fit absolute cursor-pointer p-2 top-5 right-5 rounded-lg hover:bg-white/10
                       hover:text-white group transition-all ease-in-out duration-200">
                        <svg className="text-zinc-200 cursor-pointer opacity-55 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px">
                            <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" fill="currentColor" />
                        </svg>
                    </div>
                </div> : null}

            </figcaption>
        </header>
    )
}