import GatherPOV from "./GatherPOV";
import StepControl from "../components/buttons/StepControl";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
export default function InvestigateHero({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation);
  const { showBlueSkySearch } = investigateState.display;

  return (
    <section className="transition-opacity opacity-0 
    animate-fade-in animation-delay-200ms ease-in w-full 
    2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-6 h-auto"
    >
      <div className={`mx-auto 2xl:mt-6 2xl:pt-0 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl
      min-w-88 max-w-88 sm:min-w-128 sm:max-w-168 rounded-4xl no-scrollbar 
      flex flex-col items-center lg:pt-6 md:px-2 xl:px-12
      sm:h-[32.5rem] md:h-[35rem] lg:h-[38rem] xl:h-[39rem] 
      py-10 h-[30rem] transition-all duration-700 ease-in-out 
      bg-gradientdown relative shrink-0
      ${showBlueSkySearch
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto'
        }
      `}>
        <GatherPOV />
        <StepControl />
      </div>
    </section>
  )
};