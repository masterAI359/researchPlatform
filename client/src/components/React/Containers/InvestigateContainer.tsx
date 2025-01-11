import HeroContainer from "./HeroContainer";
import StoryContainer from "./StoryContainer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "@/Hooks/useFetch";
import { AnimatePresence } from "framer-motion";
import Notes from "../Investigate/Notes/Notes";
import LostConnection from "../ErrorMessages/LostConnection";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";

export default function InvestigateContainer() {
  const { fetchedSummaries, loadingSummaries, readyToSelect, errorMessage } = useFetch()
  const takingNotes = useSelector((state: RootState) => state.notes.takingNotes)
  const gettingContent = useSelector((state: RootState) => state.read.getContent)
  const containerRef = useRef(null)
  const notesRef = useRef(null)
  const [notePosition, setNotePosition] = useState({ x: 0, y: 500 })
  const [windowWidth, setWindowWidth] = useState<number>(null)
  const [constraints, setConstraints] = useState(null)
  const [finished, setFinished] = useState<boolean>(false)
  const [gettingHelp, setGettingHelp] = useState<boolean>(false)
  const [hideHeroContainer, setHide] = useState<boolean>(false)

  const resize = () => {
    if (containerRef.current) {
      setWindowWidth(containerRef.current.offsetWidth)
    }
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

  function scrollToView() {
    containerRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true })
  }

  useEffect(() => {

    if (gettingContent) {
      scrollToView()
    }
    if (containerRef.current && notesRef.current) {

      handleDragConstraints()
    }

  }, [gettingContent])

  useLayoutEffect(() => {
    if (containerRef.current) {
      setWindowWidth(containerRef.current.offsetWidth)
    }
    window.addEventListener('resize', resize);
  }, [])

  return (
    <section
      ref={containerRef}
      className={`w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center relative
         items-center animate-fade-in relative box-border overflow-hidden pb-[40rem]`}>
      <AnimatePresence mode="wait">
        <HeroContainer
          key={'HeroContainer'}
          gettingHelp={gettingHelp}
          setGettingHelp={setGettingHelp}
          finished={finished}
        />
        {errorMessage !== null && <LostConnection errorMessage={errorMessage} />}
      </AnimatePresence>

      <div className="w-full h-auto mx-auto xl:mt-6">
        <StoryContainer
          readyToSelect={readyToSelect}
          loadingSummaries={loadingSummaries}
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