import HeroContainer from "./PromptContainer";
import StoryContainer from "./StoryContainer";
import { useEffect, useRef, useState } from "react";
import { SelectedArticles } from '../../../env'
import { useFetch } from "@/Hooks/useFetch";
import { AnimatePresence, motion } from "framer-motion";
import Notes from "../PromptChallenge/Notes";

export default function InvestigateContainer() {
  const [query, setQuery] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [selectedForSummary, setSelectedForSummary] = useState<SelectedArticles[]>([])
  const [submittedForSummaries, setSubmittedForSummaries] = useState<boolean>(false)
  const storyRef = useRef(null)
  const articlesToSummarize = encodeURIComponent(JSON.stringify(selectedForSummary))
  const [takingNotes, setTakingNotes] = useState<boolean>(false)


  const { fetchArticles, fetchSummaries, fetchedArticles, fetchedSummaries, isLoading, loadingSummaries, readyToSelect } = useFetch()


  const articles: Articles[] = fetchedArticles
  const summaries: object[] = fetchedSummaries

  function scrollToView() {

    storyRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true })
  }

  useEffect(() => {
    if (isSubmitted) {
      fetchArticles(query)
      setIsSubmitted(false)
    }
    if (submittedForSummaries) {
      fetchSummaries(articlesToSummarize)
      scrollToView()
      setSubmittedForSummaries(false)
      setSelectedForSummary([])

    }

  }, [isSubmitted, submittedForSummaries,])


  return (
    <section className={`w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center
         items-center animate-fade-in pb-52`}>
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
      <div className="w-full h-auto mx-auto" ref={storyRef}>
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
          setTakingNotes={setTakingNotes}
        />
      </div>

      <AnimatePresence>
        {takingNotes &&
          <Notes />
        }
      </AnimatePresence>

    </section>
  )
}