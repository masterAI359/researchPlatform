import { useEffect, useRef, useState } from "react";
import { useFetch } from "@/Hooks/useFetch";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/ReduxToolKit/store";
import { useDispatch, useSelector } from "react-redux";
import HeroContainer from "./HeroContainer";
import ArticleContainer from "./ArticleContainer";
import Notes from "../Investigate/Notes/Notes";
import LostConnection from "../ErrorMessages/LostConnection";

export default function InvestigateContainer() {
  const dispatch = useDispatch()
  const { loadingSummaries, errorMessage } = useFetch()
  const takingNotes = useSelector((state: RootState) => state.notes.takingNotes)
  const gettingContent = useSelector((state: RootState) => state.read.getContent)
  const finiished = useSelector((state: RootState) => state.review.finished)
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
    if (finiished) {
      scrollToView()
    }


    if (containerRef.current && notesRef.current) {

      handleDragConstraints()
    }
  }, [gettingContent, finiished])


  useEffect(() => {

    return () => {
      dispatch({ type: 'clear' })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className={`w-full shrink-0 flex flex-col transition-all duration-300 ease-in-out h-full mx-auto justify-center relative
         items-center animate-fade-in relative box-border pb-[40rem]`}>
      <HeroContainer
        key={'HeroContainer'}
      />
      {errorMessage !== null && <LostConnection errorMessage={errorMessage} />}

      <div className="w-full h-full grow mx-auto xl:mt-6">
        <motion.div
          key="StoryContainer"
        >
          <ArticleContainer
            loadingSummaries={loadingSummaries}
          />
        </motion.div>
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