import { Summary } from "./Summary"

export default function SummaryContainer ({ summaries, articles }) {

  
  // TODO: Try presenting the summaries as a series of tablets that can be expanded to display the full story
  // I want to attempt this in an effor to make displaying the data more visually appealing and consistent with the existing template 

    return (
        <div className="w-[75rem] mx-auto grid-cols-1 mt-10 justify-center">
         <ul>
            { summaries.map((summaryData: any, index: number) => 
              <Summary
              key = {index}
              summaryData = {summaryData}
              />
            )}
         </ul>
        </div>
    )
}



