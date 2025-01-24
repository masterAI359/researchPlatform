import POVWrapper from "../Investigate/Wrappers/POVWrapper";

export default function InvestigateHero({ }) {

  return (
    <section className={`lg:py-8 xs:py-4 transition-all animate-fade-in delay-1000 duration-500 ease-in-out`}>
      <div className={`mx-auto 2xl:max-w-7xl xs:w-dvw
   w-full rounded-[3rem] no-scrollbar flex flex-col items-center px-12
    relative xs:h-[28rem] lg:pt-6 sm:pt-20 opacity-100 transition-all duration-700 ease-in-out 
    2xl:h-[37rem] bg-gradientdown
    `}>

        <POVWrapper
        />
      </div>
    </section>
  )
}