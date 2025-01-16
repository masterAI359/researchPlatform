import { useEffect, useRef, useState } from "react";
import { useFetch } from "@/Hooks/useFetch";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/ReduxToolKit/store";
import { useSelector } from "react-redux";
import HeroContainer from "./HeroContainer";
import ArticleContainer from "./ArticleContainer";
import Notes from "../Investigate/Notes/Notes";
import LostConnection from "../ErrorMessages/LostConnection";

export default function InvestigateContainer() {
  const { loadingSummaries, errorMessage } = useFetch()
  const takingNotes = useSelector((state: RootState) => state.notes.takingNotes)
  const gettingContent = useSelector((state: RootState) => state.read.getContent)
  const finished = useSelector((state: RootState) => state.review.finished)
  const [notePosition, setNotePosition] = useState({ x: 0, y: 500 })
  const [constraints, setConstraints] = useState(null)
  const containerRef = useRef(null)
  const notesRef = useRef(null)

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


  return (
    <section
      ref={containerRef}
      className={`w-full grid grid-cols-1 transition-all duration-300 ease-in-out h-auto mx-auto justify-center relative
         items-center animate-fade-in relative box-border overflow-hidden pb-[40rem]`}>
      <AnimatePresence mode="wait">
        <HeroContainer
          key={'HeroContainer'}
        />
        {errorMessage !== null && <LostConnection errorMessage={errorMessage} />}
      </AnimatePresence>

      <div className="w-full h-auto mx-auto xl:mt-6">
        {!finished &&
          <motion.div
            key="StoryContainer"

          >
            <ArticleContainer
              loadingSummaries={loadingSummaries}
            />
          </motion.div>
        }
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