import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "@/motion/variants";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { numBiasSources } from "@/helpers/Ratings";
import { ChartData } from "chart.js";
import ErrorBoundary from "../../ErrorBoundaries/ErrorBoundary";
import ErrMessage from "../../ErrorMessages/ErrMessage";
import { useMemo } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function SourceChart() {
  const userArticles = useSelector((state: RootState) => state.userdata.userArticles);

  const biasCounts = useMemo((): BiasCounts => {

    if (Array.isArray(userArticles) && userArticles.length > 0) {

      const counts: BiasCounts = {
        Left: numBiasSources(userArticles, "Left", "Left-Center"),
        Right: numBiasSources(userArticles, "Right", "Right-Center"),
        Center: numBiasSources(userArticles, "LeastBiased"),
        Conspiracy: numBiasSources(userArticles, "Conspiracy-Pseudoscience"),
        Questionable: numBiasSources(userArticles, 'Questionable'),
        Satire: numBiasSources(userArticles, "Satire"),
        Scientific: numBiasSources(userArticles, "Pro-Science")
      };

      return counts;

    } else {
      const fallback: BiasCounts = {
        Left: 0,
        Right: 0,
        Center: 0,
        Conspiracy: 0,
        Questionable: 0,
        Satire: 0,
        Scientific: 0,
      };

      return fallback;
    }
  }, [userArticles]);

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

    biasCounts.Right,
    biasCounts.Left,
    biasCounts.Center,
    biasCounts.Conspiracy,
    biasCounts.Questionable,
    biasCounts.Satire,
    biasCounts.Scientific

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
      <ErrorBoundary fallback={<ErrMessage message="Error at <SourceChart/> component :/" />}>
        <AnimatePresence mode="wait">
          {Array.isArray(userArticles) && (userArticles.length > 0) && <Doughnut key='biasChart' className="cursor-pointer" data={data} />}
        </AnimatePresence>
      </ErrorBoundary>

    </motion.div>
  )
};

