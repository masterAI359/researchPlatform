import POVWrapper from "../Investigate/Wrappers/POVWrapper";
import StepControl from "../Buttons/StepButtons/StepControl";

export default function InvestigateHero({ }) {

  return (
    <section className="lg:py-8 py-4 transition-all animate-fade-in delay-1000 duration-500 ease-in-out">
      <div className={`mx-auto 2xl:mt-6 2xl:pt-0 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl 
      w-full rounded-4xl no-scrollbar flex flex-col items-center lg:pt-6 md:px-4 xl:px-12
      sm:h-[32rem] md:h-[32rem] lg:h-[34rem] py-16 h-[30rem] transition-all duration-700 ease-in-out 
      bg-gradientdown relative`}>

        <POVWrapper />
        <StepControl />
      </div>
    </section>
  )
}