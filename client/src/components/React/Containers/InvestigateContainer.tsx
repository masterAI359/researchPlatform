import HeroContainer from "./HeroContainer";
import StoryContainer from "./StoryContainer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SelectedArticles } from '../../../env'
import { useFetch } from "@/Hooks/useFetch";
import { AnimatePresence, motion } from "framer-motion";
import ControlPanel from "../Buttons/ButtonWrappers/ControlPanel";
import Notes from "../PromptChallenge/Notes";
import Navigation from "../Navigation/Navigation";


export default function InvestigateContainer() {
  const [query, setQuery] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [selectedForSummary, setSelectedForSummary] = useState<SelectedArticles[]>([])
  const [submittedForSummaries, setSubmittedForSummaries] = useState<boolean>(false)
  const storyRef = useRef(null)
  const articlesToSummarize = encodeURIComponent(JSON.stringify(selectedForSummary))
  const [takingNotes, setTakingNotes] = useState<boolean>(false)
  const [notePosition, setNotePosition] = useState({ x: 0, y: 500 })
  const [windowWidth, setWindowWidth] = useState<number>(null)
  const [constraints, setConstraints] = useState(null)
  const [finished, setFinished] = useState<boolean>(false)
  const [gettingHelp, setGettingHelp] = useState<boolean>(false)
  const [showMapModal, setShowMapModal] = useState<boolean>(false)
  const containerRef = useRef(null)
  const notesRef = useRef(null)
  const { fetchArticles, fetchSummaries, fetchedArticles, fetchedSummaries, isLoading, loadingSummaries, readyToSelect } = useFetch()


  const articles: Articles[] = fetchedArticles
  const summaries: object[] = fetchedSummaries

  const resize = () => {

    if (containerRef.current) {
      setWindowWidth(containerRef.current.offsetWidth)
    }
  }

  function scrollToView() {

    storyRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true })
  }

  function handleDragConstraints() {

    const constraintsRect = containerRef.current.getBoundingClientRect();
    const notesRect = notesRef.current.getBoundingClientRect();

    setConstraints({
      top: 0,
      left: 0,
      right: constraintsRect.width - notesRect.width,
      bottom: constraintsRect.height - notesRect.height
    })
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

    if (containerRef.current && notesRef.current) {

      handleDragConstraints()
    }
  }, [isSubmitted, submittedForSummaries,])

  if (typeof window !== 'undefined') {

    useLayoutEffect(() => {
      if (containerRef.current) {
        setWindowWidth(containerRef.current.offsetWidth)
        console.log(windowWidth)
      }

      window.addEventListener('resize', resize);

    }, [])
  }

  console.log({ "Finished Reading?": finished })


  return (
    <section
      ref={containerRef}
      className={`w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center relative
         items-center animate-fade-in pb-52 relative box-border overflow-hidden pb-[40rem]`}>

      {windowWidth !== null && <HeroContainer
        gettingHelp={gettingHelp}
        setGettingHelp={setGettingHelp}
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
        setIsSubmitted={setIsSubmitted}
        selectedForSummary={selectedForSummary}
        articles={articles}
        loadingSummaries={loadingSummaries}
        summaries={summaries}
      />}
      <div className="w-full h-auto mx-auto xl:mt-12" ref={storyRef}>
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
          gettingHelp={gettingHelp}
          setGettingHelp={setGettingHelp}
          setFinished={setFinished}
          finished={finished}
        />
      </div>

      <AnimatePresence>
        {takingNotes &&
          <Notes
            notesRef={notesRef}
            constraints={constraints}
            notePosition={notePosition}
            setNotePosition={setNotePosition}
            setTakingNotes={setTakingNotes}
          />
        }
      </AnimatePresence>

    </section>
  )
}