import { formatDate } from "@/helpers/Presentation";

export default function FrontMatter({ article }) {

    const aspectClass = "w-[400px] aspect-[16/9] rounded-2xl lg:rounded-3xl sm:aspect-[2/1] lg:aspect-[3/2] w-full object-cover";
    const dateFormatted = article.date ? formatDate(article.date) : formatDate(article.date_published);

    console.log(dateFormatted)

    return (
        <div
            className="flex flex-col lg:flex-row justify-start items-center lg:gap-x-4 w-full lg:w-4/5">
            <div className="w-full h-auto">

                <img
                    loading="lazy"
                    className={`${aspectClass} bg-mirage`}
                    width="400"
                    src={article.article_image}
                />
            </div>

            <div className="group w-full">
                <h3

                    className="text-xl md:text-xl mt-6 tracking-tight font-light lg:text-2xl xl:text-3xl text-white/80  transition-all duration-200 ease-in-out">
                    {article.article_title}
                </h3>
                <p className="text-blue-400 text-xs mt-6">
                    {article.source} <span>
                        <span className="text-zinc-400">-</span> <time className="text-zinc-400 transition-all ease-in-out duration-200" dateTime={article.article_pub_date}>
                            {dateFormatted ? dateFormatted : article.article_pub_date}
                        </time>
                    </span>
                </p>
                <p className="text-blue-400 text-xs mt-6">
                    Source Bias <span className="text-zinc-400">-</span> <span className="text-zinc-400 transition-all ease-in-out duration-200">
                        {article.bias ? article.bias : 'Unknown'}
                    </span>
                </p>
                <p className="text-blue-400 text-xs mt-6">
                    Factual Reporting <span className="text-zinc-400">-</span> <span className="text-zinc-400">
                        {article.factual_reporting ? article.factual_reporting : 'Unknown'}
                    </span>
                </p>
            </div>
        </div>

    )
}