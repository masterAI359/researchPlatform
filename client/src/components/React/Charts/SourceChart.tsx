import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { leftBiasSources, rightBiasSources } from "@/helpers/Ratings";

ChartJS.register(ArcElement, Tooltip, Legend);

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};


export default function SourceChart() {
  const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
  const chartRef = useRef(null);

  const numLeftBias = leftBiasSources(userArticles);
  const numRightBias = rightBiasSources(userArticles);

  console.log(numLeftBias, numRightBias);

  const ratings = ['Least Biased', 'Left Bias', 'Left-Center Bias', 'Right-Center Bias', 'Right Bias', 'Conspiracy-Pseuodscience', 'Questionable Sources', 'Pro-Science - Bias and Credibility', 'Satire'];

  const data = {
    labels: ['Right-Leaning', 'Left-Leaning', 'Center'],
    datasets: [
      {
        label: '# of sources',
        data: [12, 19, 3],
        backgroundColor: [
          '#ffffff80',
          '#2628a1',
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
      className="w-auto h-96 lg:h-128 flex items-center justify-center"
    >
      <Doughnut className="cursor-pointer" data={data} />
    </motion.div>
  )
}



export function ChartContainer() {

  return (
    <motion.section
      variants={variants}
      initial='closed'
      animate='open'
      exit='closed'
      transition={{ type: 'tween', duration: 0.2 }}
      className="lg:p-8">
      <div className="mx-auto 2xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 items-center">
          <div>
            <span className="text-blue-400"> Comparative Analysis</span>
            <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
              Source diversity <span className="block text-zinc-400"></span>
            </h2>
            <p className="mt-4 text-base text-white">
              Identify trends in the sources you choose to inform yourself with
            </p>
            <ul role="list" className="text-sm text-white mt-4 flex flex-col pt-4 border-t border-white/10">
              <li className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-3">Rated by <a className="text-blue-400" href="https://mediabiasfactcheck.com/" target="_blank">Media Bias/Fact Check Ratings(MBFC) </a></span>
              </li>
              <li className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-3">Maintain awareness of potential ideological blindspots</span>
              </li><li className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="ml-3">Visualize balance or bias in your chosen sources of information</span>
              </li>
            </ul>
          </div>
          <SourceChart />
        </div>
      </div>
    </motion.section>

  )
}