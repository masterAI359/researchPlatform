import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Summary } from "./Summary"
import { motion } from "framer-motion"
import FailedSummary from "./FailedSummary"
import { element } from "prop-types"

export default function SummaryContainer({ summaries, articles, selectedForSummary }) {
  const [selectedStory, setSelectedStory] = useState<number>(null)
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

  const handleClick = (index: number) => {
    if (index !== selectedStory) {
      setSelectedStory(index)
    } else if (index === selectedStory) {
      setSelectedStory(null)
    }
  }


  const failedData = (data: any) => {
    const hasFailed = data.map((element: any) => {
      if (Object.hasOwn(element, 'failed')) {

        return (failedNotifications.push(element))

      } else {
        return null
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
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div
        className="2xl:max-w-7xl h-auto w-full mx-auto  
                 transition-all duration-1000 animate-fade-in mb-96">
        <ul className="w-full flex flex-wrap gap-y-8 h-auto">
          {summaries.map((summaryData: any, index: number) =>
            <Summary
              key={index}
              index={index}
              summaryData={summaryData}
              handleClick={handleClick}
              isSelected={selectedStory === index}
            />
          )}
        </ul>
      </div>
      {showNotifications &&
        <FailedSummary
          failedNotifications={failedNotifications}
        />
      }
    </motion.div>


  )
}



