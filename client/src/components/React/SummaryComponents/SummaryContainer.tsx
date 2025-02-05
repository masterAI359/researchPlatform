import { Summary } from "./SuccessFull/Summary"
import { AnimatePresence, motion } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function SummaryContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { read } = investigateState
  const { summaries, failedNotifications, currentStory } = read

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

  console.log(summaries)


  return (
    <motion.div
      layout
      className="min-h-full 2xl:max-w-7xl xl:max-w-5xl xs:px-2 md:px-8 shadow-black inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-0"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <header>

      </header>
      <main
        className="2xl:max-w-6xl h-full w-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12 
                 ">
        <div
          className="w-full mx-auto relative">
          <AnimatePresence mode="popLayout">
            {summaries?.map((summaryData: any, index: number) =>
            (currentStory === index && <Summary
              key={index}
              index={index}
              summaryData={summaryData}
            />)
            )}
          </AnimatePresence>
        </div>
      </main>
      {failedNotifications !== null &&
        <FailedSummary
        />
      }
    </motion.div>


  )
}
