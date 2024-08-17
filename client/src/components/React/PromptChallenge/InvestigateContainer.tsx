import Prompt from "./Prompt";
//import LoadArticles from "../Loaders/LoadArticles";
import ArticleLoader from "../Loaders/ArticleLoader";
import ArticlesGrid from "../ArticleComponents/ArticlesGrid";
import SelectArticles from "../ArticleComponents/SelectArticles";
import SummaryContainer from "../SummaryComponents/SummaryContainer";
import { useState, useEffect } from "react";
import { Articles, OptionsTypes } from '../../../env'

// TODO: implement twitter's API into the InvestigateContainer component to allow the user to 
// either directly tackle a statement or to get the user thinking about something they wanted to dig in to


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
      console.log(tlderJSON)
      setSummaries(tlderJSON)
      } catch(err) {
        console.error('Error: ' + err)
      } finally {
      setSubmittedForSummaries(false)
      setLoadingSummaries(false)
      setReadyToSelect(false)
      }
    }

    const fetchBingApi = async () => {
        try {
          setIsLoading(true)  
          setSelectedForSummary([])
          setArticles([])
          setSummaries([])
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
        summaries={summaries}
        />
        </div>
        <div className="block w-full mx-auto h-fit">
        <ArticleLoader 
        isLoading={isLoading}
        /> 
        { articles.length > 0 ? <ArticlesGrid
        summaries={summaries}
        articles={articles}
        selectedForSummary = {selectedForSummary}
        setSelectedForSummary = {setSelectedForSummary}
        /> : "" }
        { <SummaryContainer 
        summaries={summaries}
        articles = {articles}
        /> }
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
