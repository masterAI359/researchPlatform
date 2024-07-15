import Prompt from "./Prompt";
//import LoadArticles from "../Loaders/LoadArticles";
import ArticleLoader from "../Loaders/ArticleLoader";
import ArticlesGrid from "../ArticleComponents/ArticlesGrid";
import SelectArticles from "../ArticleComponents/SelectArticles";
import { useState, useEffect } from "react";
import { Articles, OptionsTypes } from '../../../env'


export default function InvestigateContainer () {

    const [query, setQuery] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [articles, setArticles] = useState<Articles[]>([])
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [selectedForSummary, setSelectedForSummary] = useState<string[]>([])
    const [submittedForSummaries, setSubmittedForSummaries] = useState<boolean>()
    const [loadingSummaries, setLoadingSummaries] = useState<boolean>()
    const [summaries, setSummaries] = useState<object[]>([])

    const options: OptionsTypes =  {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      }

  const articlesToSummarize = encodeURIComponent(JSON.stringify(selectedForSummary))

    const fetchSummaries = async () => {

      try {
        setLoadingSummaries(true)
        const tldrResponse = await fetch(`/summarize?q=${articlesToSummarize}`,
          options
         )
      if(!tldrResponse.ok) {
        throw new Error('There was an issue with TLDR API')
      }
      const tlderJSON = await tldrResponse.json()
      setSummaries([tlderJSON])
      } catch(err) {
        console.error('Error: ' + err)
      } finally {
      setSubmittedForSummaries(false)
      setLoadingSummaries(false)
      }
    }
    console.log({"Chosen Articles: ": selectedForSummary})
    console.log({"Summaries: ": summaries})

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
        if(submittedForSummaries) {
          fetchSummaries()
        }
      }, [isSubmitted, submittedForSummaries])



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
        setSubmittedForSummaries = {setSubmittedForSummaries}
        loadingSummaries = {loadingSummaries}
        />
         : ""}
        </div>
    )
}
