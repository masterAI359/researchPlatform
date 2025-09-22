import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import ArticleLink from "../results/components/links/ArticleLink";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollWithShadow } from "@/hooks/useScrollWithShadow";

export default function DisplayThese({ fetching }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { chosenArticles } = investigateState.getArticle;
    const { articleOptions } = investigateState.search;
    const [selected, setSelected] = useState<ArticleType[]>([]);
    const { boxShadow, onScrollHandler } = useScrollWithShadow();
    const isMobile = useIsMobile();

    const optionsMap: Map<string, ArticleType> = useMemo(() => {

        const mappedOptions: Map<string, ArticleType> = new Map(

            articleOptions?.map((article: ArticleType) =>
                [article.url, article])
        );
        return mappedOptions ?? null;
    }, [articleOptions]);

    useEffect(() => {

        function getConfirmation(map: Map<string, ArticleType>, chosen: ArticleType[]): ArticleType[] | null {
            let results = [];
            for (let i = 0; i < chosen.length; i++) {
                let link = chosen[i].url;
                if (map.has(link)) {
                    results.push(map.get(link));
                };
            };
            return results ?? null;
        };

        if (Array.isArray(chosenArticles) && (chosenArticles.length > 0) && (optionsMap.size > 0)) {
            const displayThese = getConfirmation(optionsMap, chosenArticles);
            setSelected(displayThese);
        };

    }, [chosenArticles, optionsMap]);


    return (
        <div className="relative w-full h-[55dvh] sm:h-full mx-auto">
            <div onScroll={onScrollHandler} style={isMobile ? { boxShadow } : null}
                className="py-2 mx-auto gap-y-2 
             w-full h-full relative overflow-y-auto no-scrollbar z-40 transition-all duration-200 ease-in-out sm:flex-row sm:flex-wrap flex flex-col items-center justify-start sm:justify-center sm:gap-x-3">
                {selected?.length && chosenArticles?.length && boxShadow
                    ? selected.map((article, i) => (
                        <ArticleLink key={article.url} article={article} index={i} removingModal={fetching} />
                    ))
                    : null}
            </div>
        </div>
    )
};

