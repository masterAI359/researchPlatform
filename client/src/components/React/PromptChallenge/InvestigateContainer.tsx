import Prompt from "./Prompt";
import LoadArticles from "../LoadArticles";
import ArticlesGrid from "../ArticlesGrid";
import { useState } from "react";



type IsLoading = boolean;

interface Image {
    img: string,
    width: number,
    height: number
  }
  
  interface Articles {
    datePublished: string,
    description: string,
    image: Image
    keywords: string[]       
    name: string,
    provider: string,
    url: string
  }
  



export default function InvestigateContainer () {

    const [isLoading, setIsLoading] = useState<IsLoading>(false)
    const [articles, setArticles] = useState<Articles[]>([])

    console.log(articles)

    return (
        <div className="grid grid-cols-1 h-auto mx-auto justify-center">
        <div className="block">
        <Prompt
        isLoading = {isLoading}
        setIsLoading={setIsLoading}
        articles = {articles}
        setArticles={setArticles}
        />
        </div>
        <div className="block mx-auto">
        {isLoading ? <LoadArticles/> : ""}
        { articles.length > 0 ? <ArticlesGrid
        articles={articles}
        /> : "" }
        </div>
        </div>
    )
}
