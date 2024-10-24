import { useState } from "react"
import { Summary } from "./Summary"
import { motion } from "framer-motion"

export default function SummaryContainer({ summaries, articles, selectedForSummary }) {
  const [selectedStory, setSelectedStory] = useState<number>(null)

  console.log(summaries)


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

  console.log(selectedStory)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div
        className="2xl:max-w-7xl h-auto w-full mx-auto  
                 transition-all duration-1000 animate-fade-in">
        <ul className="w-full flex flex-wrap gap-x-20 gap-y-8 h-auto">
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
    </motion.div>


  )
}



