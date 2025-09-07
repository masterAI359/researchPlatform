import ArticleSaved from "../components/ArticleSaved";
import Title from "../components/Title";
import ArticleThumbnail from "../components/ArticleThumbnail";

export default function TestNaiveRender({ userArticles }) {

    return (<div
        className="relative w-full h-[1000px] border overflow-x-hidden px-4"
    >

        <div className="w-full  2xl:w-11/12 xl:w-4/5 md:w-3/4 flex flex-col h-auto items-end px-4 md:px-0">
            {Array.isArray(userArticles) && (userArticles.length > 0)
                && userArticles.map((article: any) => (<ArticleSaved key={article.title}>
                    <Title article={article} />
                    <ArticleThumbnail articleDeleted={false} fastScroll={false} article={article} deleteHandler={null} />
                </ArticleSaved>))}
        </div>
    </div>
    );
};