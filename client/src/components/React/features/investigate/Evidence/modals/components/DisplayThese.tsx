import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import ArticleLink from "../../searching/components/sourceLinks/components/ArticleLink";

export default function DisplayThese({ fetching }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { chosenArticles } = investigateState.getArticle;
    const { articleOptions } = investigateState.search;
    const [selected, setSelected] = useState<ArticleType[]>([]);

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
        <div className="w-full h-full mx-auto">
            <div className="h-[60dvh] py-2 overflow-y-auto sm:overflow-y-hidden no-scrollbar overscroll-contain overflow-x-hidden
             sm:h-full flex flex-wrap justify-center gap-3 md:gap-4 xl:gap-6 items-center w-full lg:w-auto mx-auto">
                {Array.isArray(selected)
                    && (selected.length > 0)
                    && (Array.isArray(chosenArticles))
                    && (chosenArticles.length > 0)
                    && selected.map((article: ArticleType, index: number) => (
                        <ArticleLink article={article} key={article.url} index={index} removingModal={fetching} />
                    ))}
            </div>

        </div>
    )
};
