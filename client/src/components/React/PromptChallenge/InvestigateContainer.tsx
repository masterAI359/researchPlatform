import Prompt from "./Prompt";
import LoadArticles from "../Loaders/LoadArticles";
import ArticleLoader from "../Loaders/ArticleLoader";
import ArticlesGrid from "../ArticleComponents/ArticlesGrid";
import SelectArticles from "../ArticleComponents/SelectArticles";
import { useState, useEffect } from "react";
import { Articles } from '../../../env'



interface OptionsTypes {
    method: string,
    headers: HeadersInit,
  }


export default function InvestigateContainer () {

    const [query, setQuery] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [articles, setArticles] = useState<Articles[]>([])
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [selectedForSummary, setSelectedForSummary] = useState<Articles[]>([])



    const options: OptionsTypes =  {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      }


    const fetchBingApi = async () => {
        try {
          setIsLoading(true)  
          const response = await fetch(`/search/articles?q=${query}`,
            options
          )
          if(!response.ok) {
            throw new Error("There was a network response issue!")
          } 
          const jsonResponse = await response.json()
          const articleData = jsonResponse.data
          setArticles(articleData)
          setReadyToSelect(true)
        } catch(err) {
      
          console.log({"Fetch Failed": err})
        } finally {
          setIsSubmitted(false)
          setIsLoading(false)
        }
      };


      useEffect(() => {
   
        if(isSubmitted) {
          
          fetchBingApi()  
        }

    
      }, [isSubmitted])


      //need to change the way in which i render the ArticlesLoader.tsx file, i need to change the class to
      //display the component and keep it 'hidden' when isLoading is false
  

    return (
        <div className="grid grid-cols-1 w-full h-auto mx-auto justify-center items-center">
        <div className="block">
        <Prompt
        query = {query}
        setQuery = {setQuery}
        isLoading = {isLoading}
        setIsLoading={setIsLoading}
        articles = {articles}
        setArticles={setArticles}
        readyToSelect = {readyToSelect}
        setReadyToSelect = {setReadyToSelect}
        isSubmitted = {isSubmitted}
        setIsSubmitted = {setIsSubmitted}
        />
        </div>
        <div className="block w-full mx-auto">
        <ArticleLoader 
        isLoading={isLoading}
        /> 
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
