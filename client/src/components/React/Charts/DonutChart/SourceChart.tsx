import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { numBiasSources } from "@/helpers/Ratings";
import { ChartData } from "chart.js";
import ChartHeader from "./ChartHeader";
ChartJS.register(ArcElement, Tooltip, Legend);

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};




export default function SourceChart() {
  const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
  const numLeftSources: number | null = numBiasSources(userArticles, "Left", "Left-Center");
  const numRightSources: number | null = numBiasSources(userArticles, "Right", "Right-Center");
  const numCenterSources: number | null = numBiasSources(userArticles, "LeastBiased");
  const numConspiracySources: number | null = numBiasSources(userArticles, "Conspiracy-Pseuodscience");
  const numQuestionableSources: number | null = numBiasSources(userArticles, 'Questionable');
  const numSatireSources: number | null = numBiasSources(userArticles, "Satire");
  const numScientificSources: number | null = numBiasSources(userArticles, "Pro-Science");

  const ratings: string[] = [
    'Right wing',
    'Left wing',
    'Centrist',
    'Conspiracy Sources',
    'Questionable Sources',
    'Scientific Sources',
    'Satirical'
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

  const tableColors: string[] = [
    '#27292d',
    '#2628a1',
    '#9470c4',
    '#b37800',
    '#71717a',
    '#2e8b57',
    '#8695f9',
  ]


  const data: ChartData<'doughnut', number[], string> = {
    labels: ratings,
    datasets: [
      {
        label: '# of sources',
        data: sourceBiasCounts,
        backgroundColor: tableColors,
        borderColor: tableColors,
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
      className="w-auto h-96 lg:h-128 flex items-center md:justify-center"
    >
      <Doughnut className="cursor-pointer" data={data} />
    </motion.div>
  )
}

export function BiasChart() {

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
          <ChartHeader />
          <SourceChart />
        </div>
      </div>
    </motion.section>

  )
}