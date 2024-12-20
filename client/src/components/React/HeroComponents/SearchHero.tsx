import SearchBox from "../Investigate/Steps/SearchBox"
import MapContainer from "../Map/MapContainer"
import { motion } from "framer-motion"

export default function SearchHero({
    setQuery,
    setIsSubmitted,
    isLoading,
    currentStep,
}) {

    return (
        <section
            className="w-full h-auto mx-auto flex xs:flex-col xs:mt-10">
            <header className="w-fit h-auto mx-auto xs:block md:hidden">
                <MapContainer currentStep={currentStep} />
            </header>
            <main className="xs:w-4/5 xl:w-2/5 h-auto xs:mx-auto xs:mt-6 xl:mt-44">
                <SearchBox
                    setIsSubmitted={setIsSubmitted}
                    setQuery={setQuery}
                    isLoading={isLoading}
                />
            </main>

        </section>
    )
}