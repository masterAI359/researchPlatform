


export default function FullText({ article_text }) {


    return (
        <div
            className={`pt-6 text-white font-serif text-xl font-light tracking-tight leading-10 whitespace-pre-wrap pb-16 transition-all duration-1000 ease-in-out`}
        >
            {article_text}
        </div>
    )
}