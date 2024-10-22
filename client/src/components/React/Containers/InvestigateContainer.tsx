import HeroContainer from "./PromptContainer";
import StoryContainer from "./StoryContainer";
import { useEffect, useState } from "react";
import { SelectedArticles } from '../../../env'
import { useFetch } from "@/Hooks/useFetch";

export default function InvestigateContainer() {
  const [query, setQuery] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [selectedForSummary, setSelectedForSummary] = useState<SelectedArticles[]>([])
  const [submittedForSummaries, setSubmittedForSummaries] = useState<boolean>(false)
  const articlesToSummarize = encodeURIComponent(JSON.stringify(selectedForSummary))

  const { fetchArticles, fetchSummaries, fetchedArticles, fetchedSummaries, isLoading, loadingSummaries, readyToSelect } = useFetch()

  const articles: Articles[] = fetchedArticles
  const summaries: object[] = fetchedSummaries

  useEffect(() => {
    if (isSubmitted) {
      fetchArticles(query)
      setIsSubmitted(false)
    }
    if (submittedForSummaries) {

      fetchSummaries(articlesToSummarize)
      setSubmittedForSummaries(false)
      setSelectedForSummary([])
    }

  }, [isSubmitted, submittedForSummaries])


  return (
    <section className="w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center
         items-center animate-fade-in">
      <HeroContainer
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
        setIsSubmitted={setIsSubmitted}
        selectedForSummary={selectedForSummary}
        articles={articles}
        loadingSummaries={loadingSummaries}
        summaries={summaries}
      />

      <StoryContainer
        articles={articles}
        summaries={summaries}
        isLoading={isLoading}
        readyToSelect={readyToSelect}
        setSelectedForSummary={setSelectedForSummary}
        selectedForSummary={selectedForSummary}
        submittedForSummaries={submittedForSummaries}
        setSubmittedForSummaries={setSubmittedForSummaries}
        loadingSummaries={loadingSummaries}
        fetchedSummaries={fetchedSummaries}
        fetchedArticles={fetchedArticles}

      />
    </section>
  )
}