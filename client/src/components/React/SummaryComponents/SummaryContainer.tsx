import { useEffect, useRef, useState } from "react"
import { Summary } from "./SuccessFull/Summary"
import { AnimatePresence, motion } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import SummaryHeading from "./SuccessFull/SummaryHeading"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function SummaryContainer({ gettingHelp, setGettingHelp, finished }) {
  const stories = useSelector((state: RootState) => state.read.summaries)
  const [availableStories, setAvailableStories] = useState<object[]>([])
  const [failedNotifications, setFailedNotifications] = useState<object[]>([])
  const [showNotifications, setShowNotifications] = useState<boolean>(false)
  const [currentStory, setCurrentStory] = useState<number>(0)
  const containerRef = useRef(null)

  const container = {

    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.3,
        staggerDirection: 1
      }
    }
  }

  const failedData = (data: any) => {
    const hasFailed = data.map((element: any) => {
      if (Object.hasOwn(element, 'failed')) {

        return (failedNotifications.push(element))

      } else {
        return (availableStories.push(element))
      }
    })

    if (failedNotifications.length > 0) {
      setShowNotifications(true)
    }
    return hasFailed
  }


  useEffect(() => {

    failedData(stories)


  }, [stories])



  return (
    <motion.div
      className="h-full 2xl:max-w-7xl xs:px-2 md:px-8 shadow-black inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-12"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <header>
        <SummaryHeading setGettingHelp={setGettingHelp} gettingHelp={gettingHelp} currentStory={currentStory} setCurrentStory={setCurrentStory} />
      </header>
      <main
        ref={containerRef}
        className="2xl:max-w-6xl h-auto w-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12 
                 overflow-x-hidden overflow-y-hidden">
        <motion.div
          transition={{ type: 'tween', duration: 0.2 }}
          className="w-full flex h-auto items-center">
          {availableStories.map((summaryData: any, index: number) =>
            <Summary
              key={index}
              currentStory={currentStory}
              index={index}
              summaryData={summaryData}
            />
          )}
        </motion.div>
      </main>
      {showNotifications &&
        <FailedSummary
          failedNotifications={failedNotifications}
          setFailedNotifications={setFailedNotifications}
        />
      }
    </motion.div>


  )
}
