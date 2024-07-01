import Prompt from "./Prompt";
import LoadArticles from "../Loaders/LoadArticles";
import ArticlesGrid from "../ArticleComponents/ArticlesGrid";
import SelectArticles from "../ArticleComponents/SelectArticles";
import { useState } from "react";
import { Articles } from '../../../env'



type IsLoading = boolean;

export default function InvestigateContainer () {

    const [isLoading, setIsLoading] = useState<IsLoading>(false)
    const [articles, setArticles] = useState<Articles[]>([])
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [selectedForSummary, setSelectedForSummary] = useState<Articles[]>([])
  

    return (
        <div className="grid grid-cols-1 w-full h-auto mx-auto justify-center items-center">
        <div className="block">
        <Prompt
        isLoading = {isLoading}
        setIsLoading={setIsLoading}
        articles = {articles}
        setArticles={setArticles}
        readyToSelect = {readyToSelect}
        setReadyToSelect = {setReadyToSelect}
        />
        </div>
        <div className="block mx-auto">
        {isLoading ? <LoadArticles/> : ""}
        { articles.length > 0 ? <ArticlesGrid
        articles={articles}
        selectedForSummary = {selectedForSummary}
        setSelectedForSummary = {setSelectedForSummary}
        /> : "" }
        </div>
        {articles?  <SelectArticles 
        readyToSelect = {readyToSelect}
        selectedForSummary = {selectedForSummary}
        />
         : ""}
        </div>
    )
}
