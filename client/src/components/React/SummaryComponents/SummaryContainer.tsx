import { Summary } from "./Summary"
import { motion } from "framer-motion"

export default function SummaryContainer ({ summaries, articles, selectedForSummary }) {

const container = {

  hidden: { opacity: 0},
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
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
        >
          <div className={`2xl:max-w-7xl h-auto w-full mx-auto 
                 grid-cols-1 justify-center opacity-0 transition-all duration-1000 animate-fade-in`}>
                  <ul className="w-full">
                     { summaries.map((summaryData: any, index: number) => 
                       <Summary
                       key = {index}
                       summaryData = {summaryData}
                       />
                     )}
                  </ul>
          </div>
        </motion.div>

       
    )
}



