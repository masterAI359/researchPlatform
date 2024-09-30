import Prompt from "../PromptChallenge/Prompt";
import PromptContainer from "./PromptContainer";
import StoryContainer from "./StoryContainer";
import ArticleLoader from "../Loaders/ArticleLoader";
import ArticlesGrid from "../ArticleComponents/ArticlesGrid";
import SelectArticles from "../ArticleComponents/SelectArticles";
import SummaryContainer from "../SummaryComponents/SummaryContainer";
import SummaryLoader from "../Loaders/SummaryLoader";
import ScrollDown from "../ArticleComponents/ScrollDown";
import InvestigateHero from "../PromptChallenge/InvestigateHero";
import { useState, useEffect } from "react";
import { Articles, OptionsTypes, SelectedArticles } from '../../../env'
import { AnimatePresence, motion } from "framer-motion";


export default function InvestigateContainer () {

    //Redux toolkit might be necessary at this point
    

    // state for SearchBox.tsx and Article rendering
    const [query, setQuery] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [articles, setArticles] = useState<Articles[]>([])
    const [readyToSelect, setReadyToSelect] = useState<boolean>(false)
    const [selectedForSummary, setSelectedForSummary] = useState<SelectedArticles[]>([])
    const [submittedForSummaries, setSubmittedForSummaries] = useState<boolean>(false)
    const [loadingSummaries, setLoadingSummaries] = useState<boolean>(false)
    const [summaries, setSummaries] = useState<object[]>([])

    const articlesToSummarize = encodeURIComponent(JSON.stringify(selectedForSummary))

    const options: OptionsTypes =  {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      }


    const fetchSummaries = async () => {
      setLoadingSummaries(true)
      setReadyToSelect(false)
      setArticles([])
      try {
        const tldrResponse = await fetch(`/summarize?q=${articlesToSummarize}`,
          options
         )
      if(!tldrResponse.ok) {
        throw new Error('There was an issue with TLDR API')
      }
      setArticles([])
      const tlderJSON = await tldrResponse.json()
      console.log(tlderJSON)
      setSummaries(tlderJSON)
      setSubmittedForSummaries(false)
      } catch(err) {
        console.error('Error: ' + err)
      } finally {
      setLoadingSummaries(false)
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
        <section className="w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center
         items-center animate-fade-in">
        <PromptContainer>
          <InvestigateHero
          query = {query}
          setQuery = {setQuery}
          isLoading = {isLoading}
          setIsSubmitted = {setIsSubmitted}
          />
          <AnimatePresence>
           {articles.length > 0 && 
           <motion.div
           key = 'scrollDown'
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           >
            <ScrollDown 
              selectedForSummary = {selectedForSummary}
              articles = {articles}
              loadingSummaries = {loadingSummaries}
              summaries = {summaries}/>
            </motion.div>}
          </AnimatePresence>
         
        </PromptContainer>
        
        <StoryContainer>
          <AnimatePresence>
            {isLoading && 
            <motion.div
            key = 'loadingArticles'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
              <ArticleLoader 
                
                isLoading={isLoading}
                summaries = {summaries}/> 
            </motion.div>}

            {readyToSelect && 
            <motion.div 
              key = 'presentArticles'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArticlesGrid
                summaries={summaries}
                articles={articles}
                selectedForSummary = {selectedForSummary}
                setSelectedForSummary = {setSelectedForSummary}/>
            </motion.div>}

            {submittedForSummaries && 
            <motion.div
             key = 'loadingSummaries'
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1 }}
            >
              <SummaryLoader/>
            </motion.div>
            }

            {summaries.length > 0 && 
            <motion.div
            key = 'presentSummaries'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 1, delay: 1 }}
            >
              <SummaryContainer 
                
                summaries={summaries}
                articles = {articles}
                selectedForSummary = {selectedForSummary}/>
            </motion.div>}

          </AnimatePresence>
        </StoryContainer>
       
        {articles.length > 0 && <SelectArticles 
        readyToSelect = {readyToSelect}
        selectedForSummary = {selectedForSummary}
        submittedForSummaries = {submittedForSummaries}
        setSubmittedForSummaries = {setSubmittedForSummaries}
        loadingSummaries = {loadingSummaries}
        />}

        </section>
    )
}



          //<Prompt
          //query = {query}
          //setQuery = {setQuery}
          //isLoading = {isLoading}
          //setIsLoading={setIsLoading}
          //articles = {articles}
          //setArticles={setArticles}
          //readyToSelect = {readyToSelect}
          //setReadyToSelect = {setReadyToSelect}
          //isSubmitted = {isSubmitted}
          //setIsSubmitted = {setIsSubmitted}
          //summaries={summaries}
          ///>