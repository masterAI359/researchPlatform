import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { numBiasSources, rightBiasSources } from "@/helpers/Ratings";
import { ChartData } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};




export default function SourceChart() {
  const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
  const chartRef = useRef(null);

  const numLeftSources: number | null = numBiasSources(userArticles, "Left", "Left-Center");
  const numRightSources: number | null = numBiasSources(userArticles, "Right", "Right-Center");
  const numCenterSources: number | null = numBiasSources(userArticles, "LeastBiased");
  const numConspiracySources: number | null = numBiasSources(userArticles, "Conspiracy-Pseuodscience");
  const numQuestionableSources: number | null = numBiasSources(userArticles, 'Questionable');
  const numSatireSources: number | null = numBiasSources(userArticles, "Satire");
  const numScientificSources: number | null = numBiasSources(userArticles, "Pro-Science");


  const ratings: string[] = [
    'Right Sources',
    'Left Sources',
    'Center Sources',
    'Conspiracy Sources',
    'Questionable Sources',
    'Scientific Sources',
    'Satire'
  ];

  const sourceBiasCounts: number[] = [
    numRightSources,
    numLeftSources,
    numCenterSources,
    numConspiracySources,
    numQuestionableSources,
    numSatireSources,
    numScientificSources
  ];


  const data: ChartData<'doughnut', number[], string> = {
    labels: ratings,
    datasets: [
      {
        label: '# of sources',
        data: sourceBiasCounts,
        backgroundColor: [
          '#27292d',
          '#2628a1',
          '#71717a',
          '#b37800',
          '#8695f9',
          '#2e8b57',
          '#9470c4'
        ],
        borderColor: [
          '#27292d',
          "#364EF5",
          '#71717a',
          '#b37800',
          '#8695f9',
          '#2e8b57',
          '#9470c4'
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