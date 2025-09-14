import NextButton from "./Next";
import BackButton from "./Back";

export default function StepControl({ }) {

    return (
        <div className={`
        absolute animate-fade-in duration-300 ease-in delay-500 
        bottom-4 2xl:bottom-12 lg:bottom-8 md:right-32 lg:right-44 2xl:right-60 
        w-full h-fit flex items-center`
        }>
            <div className="w-auto mx-auto flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-6 xs:gap-x-16">

                <BackButton />

                <NextButton />
            </div>
        </div>
    )
}

