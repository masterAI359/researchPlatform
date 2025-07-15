import { useSelector } from "react-redux";
import type { RootState } from '@/ReduxToolKit/store'
import StepHeader from "../Steps/StepHeader";
import { stepContent } from "@/stepperContent/headers";
import { stepsHelp } from "@/helpInfo/help";
import Stepper from "../Steps/Stepper";

export default function Steps({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation)
  const { stepper } = investigateState
  const { step } = stepper


  return (
    <section
      className="h-60 mt-6 sm:h-80 md:h-88 lg:h-96
      2xl:w-168 xl:w-[36rem] lg:w-[33rem] md:w-[29rem] 
      rounded-4xl bg-ebony/50 shadow-inset p-4 shrink-0 mx-auto 
      w-full max-w-full sm:w-[27rem] mb-4 md:mb-0
      transition-all duration-400 animate-fade-in 
      delay-300 no-scrollbar box-border overflow-y-hidden">
      <div
        className="flex flex-col items-start justify-start relative
        w-full h-full ">

        <StepHeader info={stepsHelp[step]} title={stepContent[step].title} subheader={stepContent[step].subheader} />

        <Stepper />
      </div>

    </section>
  );
};

