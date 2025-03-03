import POVWrapper from "../Investigate/Wrappers/POVWrapper";
import StepControl from "../Buttons/StepButtons/StepControl";

export default function InvestigateHero({ }) {

  return (
    <section className="lg:py-8 py-4 transition-all animate-fade-in delay-1000 duration-500 ease-in-out">
      <div className={`mx-auto 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl xs:w-dvw
   w-full rounded-4xl no-scrollbar flex flex-col items-center md:px-4 xl:px-12
    relative h-[30rem] py-16 lg:pt-6 transition-all duration-700 ease-in-out 
    2xl:h-[32rem] 2xl:mt-16 bg-gradientdown relative
    `}>

        <POVWrapper
        />
        <StepControl />
      </div>
    </section>
  )
}