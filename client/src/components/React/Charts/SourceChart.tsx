import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const variants = {
    open: { opacity: 1},
    closed: {opacity: 0}
};


export default function SourceChart () {
    const chartRef = useRef(null);

 const data = {
  labels: ['Right-Leaning', 'Left-Leaning', 'Center'],
  datasets: [
    {
      label: '# of sources',
      data: [12, 19, 3],
      backgroundColor: [
        '#ffffff80',
        "#364EF5",
       '#EDEADE',
      
      ],
      borderColor: [
    '#ffffff80',
       "#364EF5",
        '#EDEADE',
      ],
      borderWidth: 1,
    },
  ],
};


    return (
        <motion.div 
        variants={variants}
        initial='closed'
        animate='open'
        exit='closed'
        transition={{ type: 'tween', duration: 0.2 }}
        className="pt-24 w-auto h-128"
        >
        <Doughnut data={data} />
        </motion.div>
    )
}



export function ChartContainer () {

    return (
       <motion.section 
        variants={variants}
        initial='closed'
        animate='open'
        exit='closed'
        transition={{ type: 'tween', duration: 0.2 }}
       className="lg:p-8">
  <div className="px-8 py-12 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24 items-center">
      <div>
        <span className="text-blue-400"> Comparative Analysis</span>
        <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
          Source diversity <span className="block text-zinc-400"></span>
        </h2>
        <p className="mt-4 text-base text-white">
          Identify trends, spot patterns, and uncover relationships between
          variables with ease. Our comparative charts provide a comprehensive
          view of your data for analysis.
        </p>
        <ul role="list" className="text-sm text-white mt-4 flex flex-col pt-4 border-t border-white/10">
          <li className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
            <span className="ml-3">3x Prebuilt landing Pages</span>
          </li>
          <li className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
            <span className="ml-3">Comprehensive Styleguide</span>
          </li><li className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
            <span className="ml-3">Prebuilt sections Sections</span>
          </li>
        </ul>
      </div>
      <SourceChart/>
    </div>
  </div>
</motion.section>

    )
}