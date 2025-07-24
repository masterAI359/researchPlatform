import { Virtuoso } from "react-virtuoso";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import ArticleSaved from "../components/ArticleSaved";
import { SkeletonMap } from "../skeletons/SkeletonMap";
import { useVirtuoso } from "@/Hooks/useVirtuoso";

export default function ArticlesScroller() {
    const userArticles: SavedArticle[] | null = useSelector((state: RootState) => state.userdata.userArticles);
    const { visible, fullyLoaded, loadMore } = useVirtuoso(userArticles);


    return (
        <div
            className="relative w-full h-svh overflow-x-hidden px-4"
        >
            <Virtuoso
                style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'end' }}
                className="no-scrollbar"
                data={visible}
                endReached={loadMore}
                increaseViewportBy={50}
                context={{ fullyLoaded }}
                components={{ Footer: SkeletonMap }}
                itemContent={(index, article) => {

                    return <ArticleSaved key={index} article={article} />
                }}

            />

        </div>
    )
};


