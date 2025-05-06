import NextButton from "./Next";
import BackButton from "./Back";

export default function StepControl({ }) {

    return (
        <div className={`absolute bottom-4 2xl:bottom-6 2xl:right-60 w-full h-fit flex items-center`}>
            <div className="w-auto mx-auto flex items-center xl:gap-x-6 xs:gap-x-16">
                <BackButton
                />
                <NextButton
                />
            </div>

       
        </div>
    )
}

