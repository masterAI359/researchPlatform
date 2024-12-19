import SearchBox from "../Investigate/Steps/SearchBox"
import MapContainer from "../Map/MapContainer"
import { motion } from "framer-motion"

export default function SearchHero({
    setQuery,
    setIsSubmitted,
    isLoading
}) {

    return (
        <section
            className="w-full h-auto mx-auto flex flex-col">
            <header className="w-full h-auto">
            </header>
            <main className="xs:w-4/5 h-auto mx-auto xs:mt-20">
                <SearchBox
                    setIsSubmitted={setIsSubmitted}
                    setQuery={setQuery}
                    isLoading={isLoading}
                />
            </main>

        </section>
    )
}