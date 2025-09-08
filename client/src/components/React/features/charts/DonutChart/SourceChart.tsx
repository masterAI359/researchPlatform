import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { variants } from "@/motion/variants";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { ChartData } from "chart.js";
import ErrorBoundary from "../../../Shared/ErrorBoundaries/ErrorBoundary";
import ErrMessage from "../../../Shared/ErrorBoundaries/messages/ErrMessage";
import { ratings, tableColors } from "./keyData/donutKeys";
import React from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

function SourceChart(): JSX.Element {
  const biasRatings = useSelector((state: RootState) => state.chart.biasRatings);

  const data: ChartData<'doughnut', number[], string> = {

    labels: ratings,
    datasets: [
      {
        label: '# of sources',
        data: biasRatings,
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
      <ErrorBoundary
        fallback={
          <ErrMessage
            message="Error at <SourceChart/> component :/"
          />
        }
      >
        {biasRatings && <Doughnut key='biasChart' className="cursor-pointer" data={data} />}
      </ErrorBoundary>
    </motion.div>
  );
};

export default React.memo(SourceChart);