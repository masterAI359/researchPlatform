import POVWrapper from "../Investigate/Wrappers/POVWrapper";
import StepControl from "../Buttons/StepButtons/StepControl";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
export default function InvestigateHero({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation);
  const { showBlueSkySearch} = investigateState.display;

  return (
    <section className="lg:py-8 py-4 transition-all animate-fade-in delay-1000 duration-500 ease-in-out w-full">
      <div className={`mx-auto 2xl:mt-6 2xl:pt-0 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl 
      w-full rounded-4xl no-scrollbar flex flex-col items-center lg:pt-6 md:px-4 xl:px-12
      sm:h-[32rem] md:h-[32rem] lg:h-[34rem] py-10 h-[30rem] transition-all duration-700 ease-in-out 
      bg-gradientdown relative shrink-0
      ${showBlueSkySearch ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
      `}>

        <POVWrapper />
        <StepControl />
      </div>
    </section>
  )
}