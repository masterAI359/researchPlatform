import StatBreakdown from "./StatBreakdown";
import StatsHeader from "./StatsHeader";

interface StatsSection {
    statsPopulated?: boolean
};

export default function StatsSection({ statsPopulated }: StatsSection): JSX.Element {

    return (
        <section
            id="investigation-stats"
            className="lg:p-8 animate-fade-in transition-opacity">
            <div
                className="mx-auto w-full 2xl:max-w-7xl">
                <div className="2xl:max-w-7xl  relative isolate overflow-hidden  bg-gradientup ring-1 ring-white/10 rounded-4xl px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <StatsHeader />
                        <StatBreakdown />
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        {/* <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none shadow-thick opacity-50 border border-white/10 rounded-3xl"
                            src="/images/assets/darkcode.svg"
                            alt="img" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
