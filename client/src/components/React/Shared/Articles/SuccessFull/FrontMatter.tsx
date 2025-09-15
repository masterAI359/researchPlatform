import { formatDate } from "@/helpers/Presentation";

export default function FrontMatter({ article }) {

    const aspectClass = "w-[400px] aspect-[16/9] rounded-2xl lg:rounded-3xl sm:aspect-[2/1] lg:aspect-[3/2] w-full object-cover";
    const dateFormatted = article.date ? formatDate(article.date) : formatDate(article.date_published);


    return (
        <div
            className="flex flex-col lg:flex-row justify-start items-end lg:gap-x-4 w-full lg:w-4/5">
            <div className="w-full h-auto">

                <img
                    loading="lazy"
                    className={`${aspectClass} bg-mirage`}
                    width="400"
                    src={article.article_image}
                />
            </div>

            <div className="group w-full h-full flex flex-col items-start gap-y-4 lg:gap-y-5">
                <div>
                    <h3

                        className="text-xl md:text-base tracking-tight font-light xl:text-xl text-white/80  transition-all duration-200 ease-in-out">
                        {article.article_title}
                    </h3>
                </div>
                <div>
                    <p className="text-blue-400 text-xs">
                        {article.source} <span>
                            <span className="text-zinc-400">-</span> <time className="text-zinc-400 transition-all ease-in-out duration-200" dateTime={article.article_pub_date}>
                                {dateFormatted ? dateFormatted : article.article_pub_date}
                            </time>
                        </span>
                    </p>
                </div>

                <div>
                    <p className="text-blue-400 text-xs">
                        Source Bias <span className="text-zinc-400">-</span> <span className="text-zinc-400 transition-all ease-in-out duration-200">
                            {article.bias ? article.bias : 'Unknown'}
                        </span>
                    </p>
                </div>
                <div className="hidden xl:flex">
                    <p className="text-blue-400 text-xs">
                        Factual Reporting <span className="text-zinc-400">-</span> <span className="text-zinc-400">
                            {article.factual_reporting ? article.factual_reporting : 'Unknown'}
                        </span>
                    </p>
                </div>


            </div>
        </div>

    )
}