import { useRef, useState } from "react"
import { Summary } from "./SuccessFull/Summary"
import { motion } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"

export default function SummaryContainer({ }) {
  const stories = useSelector((state: RootState) => state.read.summaries)
  const notifications = useSelector((state: RootState) => state.read.failedNotifications)
  const [failedNotifications, setFailedNotifications] = useState<object[]>([])
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

  return (
    <motion.div
      className="h-full 2xl:max-w-7xl xl:max-w-5xl xs:px-2 md:px-8 shadow-black inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-0"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <header>

      </header>
      <main
        ref={containerRef}
        className="2xl:max-w-6xl h-auto w-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12 
                 overflow-x-hidden overflow-y-hidden">
        <motion.div
          transition={{ type: 'tween', duration: 0.2 }}
          className="w-full flex h-auto items-center">
          {stories?.map((summaryData: any, index: number) =>
            <Summary
              key={index}
              index={index}
              summaryData={summaryData}
            />
          )}
        </motion.div>
      </main>
      {notifications !== null &&
        <FailedSummary
        />
      }
    </motion.div>


  )
}
