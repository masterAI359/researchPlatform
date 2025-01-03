import { useEffect, useState } from "react"
import { Summary } from "./SuccessFull/Summary"
import { AnimatePresence, motion } from "framer-motion"
import FailedSummary from "./Failed/FailedSummary"
import SummaryHeading from "./SuccessFull/SummaryHeading"

export default function SummaryContainer({ summaries, gettingHelp, setGettingHelp, finished }) {
  const [availableStories, setAvailableStories] = useState<object[]>([])
  const [failedNotifications, setFailedNotifications] = useState<object[]>([])
  const [showNotifications, setShowNotifications] = useState<boolean>(false)

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

    failedData(summaries)


  }, [summaries])


  return (
    <motion.div
      className="h-full 2xl:max-w-7xl xs:px-2 md:px-8 shadow-black inset rounded-4xl mx-auto border-white/10 xs:mt-10 xl:mt-8"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      { /*    <AnimatePresence >
        <motion.div>
          {!finished && <SummaryHeading setGettingHelp={setGettingHelp} gettingHelp={gettingHelp} />}

        </motion.div>

      </AnimatePresence> */}
      <main
        className="2xl:max-w-7xl h-auto w-full mx-auto  
                 transition-all duration-1000 animate-fade-in mb-12">
        <div className="w-full flex flex-wrap gap-y-8 h-auto">
          {availableStories.map((summaryData: any, index: number) =>
            <Summary
              key={index}
              index={index}
              summaryData={summaryData}
            />
          )}
        </div>
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



