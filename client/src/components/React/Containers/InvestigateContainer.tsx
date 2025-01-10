import HeroContainer from "./HeroContainer";
import StoryContainer from "./StoryContainer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SelectedArticles } from '../../../env'
import { useFetch } from "@/Hooks/useFetch";
import { AnimatePresence } from "framer-motion";
import Notes from "../Investigate/Notes/Notes";
import LostConnection from "../ErrorMessages/LostConnection";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch, useSelector } from "react-redux";
import { searching } from "@/ReduxToolKit/Reducers/UserPOV";
import { getStories } from "@/ReduxToolKit/Reducers/Reading";

//TODO: create reducers to handle the state variables we've created here at the top level 
// our prop drilling is getting ridiculous
export default function InvestigateContainer() {
  const query = useSelector((state: RootState) => state.pov.query)
  const takingNotes = useSelector((state: RootState) => state.notes.takingNotes)
  const submitted = useSelector((state: RootState) => state.pov.searching)
  const gettingContent = useSelector((state: RootState) => state.read.getContent)
  //move selectedForSummary to redux store
  const [selectedForSummary, setSelectedForSummary] = useState<SelectedArticles[]>([])
  const storyRef = useRef(null)
  const articlesToSummarize = encodeURIComponent(JSON.stringify(selectedForSummary))
  const containerRef = useRef(null)
  const notesRef = useRef(null)
  const dispatch = useDispatch()
  const { fetchArticles, fetchSummaries, fetchedArticles, fetchedSummaries, loadingSummaries, readyToSelect, errorMessage } = useFetch()


  const [notePosition, setNotePosition] = useState({ x: 0, y: 500 })
  const [windowWidth, setWindowWidth] = useState<number>(null)
  const [constraints, setConstraints] = useState(null)
  const [finished, setFinished] = useState<boolean>(false)
  const [gettingHelp, setGettingHelp] = useState<boolean>(false)
  const [hideHeroContainer, setHide] = useState<boolean>(false)

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
    if (submitted) {
      fetchArticles(query)
      dispatch(searching(false))
      setSelectedForSummary([])
    }
    if (gettingContent) {
      fetchSummaries(articlesToSummarize)
      scrollToView()
      dispatch(getStories(false))
      setSelectedForSummary([])
    }

    if (containerRef.current && notesRef.current) {

      handleDragConstraints()
    }
  }, [submitted, gettingContent,])

  if (typeof window !== 'undefined') {

    useLayoutEffect(() => {
      if (containerRef.current) {
        setWindowWidth(containerRef.current.offsetWidth)
      }

      window.addEventListener('resize', resize);

    }, [])
  }

  return (
    <section
      ref={containerRef}
      className={`w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center relative
         items-center animate-fade-in relative box-border overflow-hidden pb-[40rem]`}>
      <AnimatePresence mode="wait">
        {windowWidth !== null && !hideHeroContainer ? <HeroContainer
          key={'HeroContainer'}
          gettingHelp={gettingHelp}
          setGettingHelp={setGettingHelp}
          summaries={summaries}
          finished={finished}
        /> : null}
        {errorMessage !== null && <LostConnection errorMessage={errorMessage} />}
      </AnimatePresence>

      <div className="w-full h-auto mx-auto xl:mt-6" ref={storyRef}>
        <StoryContainer
          articles={articles}
          summaries={summaries}
          readyToSelect={readyToSelect}
          setSelectedForSummary={setSelectedForSummary}
          selectedForSummary={selectedForSummary}
          loadingSummaries={loadingSummaries}
          fetchedSummaries={fetchedSummaries}
          gettingHelp={gettingHelp}
          setGettingHelp={setGettingHelp}
          setFinished={setFinished}
          finished={finished}
          setHide={setHide}
        />
      </div>

      <AnimatePresence>
        {takingNotes &&
          <Notes
            notesRef={notesRef}
            constraints={constraints}
            notePosition={notePosition}
            setNotePosition={setNotePosition}
          />
        }
      </AnimatePresence>

    </section>
  )
}