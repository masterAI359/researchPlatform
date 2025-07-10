


export default function Title({ loaded, handleArticleSelection, article }) {

    return (
        <div className={`group transition-opacity duration-200 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`} onClick={handleArticleSelection}>
            <h3

                className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white/80 md:group-hover:text-white transition-all duration-200 ease-in-out">
                {article.title}
            </h3>
            <p className="text-zinc-400 text-xs mt-6">
                {article.authors ? article.authors[0] : 'Authors not available'} - <span> <time className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200" dateTime={article.pubDate}>{article.date_published}</time></span>
            </p>
            <p className="text-zinc-400 text-xs mt-6">
                Published by - <span className="text-zinc-400 md:group-hover:text-blue-400 transition-all ease-in-out duration-200">{article.provider} </span>
            </p>
        </div>
    )
};